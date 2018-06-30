
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { merge, Observable, BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
// import { ListService } from '@agb.common/services/data-loader/list.service';
import { SpeciesGeneList } from './models/species-gene-list';
import { GenesService } from './genes.service';

import { noctuaAnimations } from '@noctua/animations';
import { NoctuaUtils } from '@noctua/utils/noctua-utils';

import { takeUntil } from 'rxjs/internal/operators';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-genes',
  templateUrl: 'genes.component.html',
  styleUrls: ['genes.component.scss'],
  animations: noctuaAnimations
})
export class GenesComponent implements OnInit, OnDestroy {
  dataSource: SpeciesDataSource | null;
  displayedColumns = ['ptn', 'name', 'pthr', 'proxy_gene'];

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild('filter')
  filter: ElementRef;

  @ViewChild(MatSort)
  sort: MatSort;
  genes: any[] = [];
  //proxy_genes: any;
  species: string;
  //modelSpes=[{"short_name":"ARATH", "taxon_id":"3702", "long_name":"Arabidopsis thaliana"},{"short_name":"CAEEL", "taxon_id":"6239", "long_name":"Caenorhabditis elegans"},{"short_name":"CHICK", "taxon_id":"9031", "long_name":"Gallus gallus"},{"short_name":"DANRE", "taxon_id":"7955", "long_name":"Danio rerio"},{"short_name":"DICDI", "taxon_id":"44689", "long_name":"Dictyostelium discoideum"},{"short_name":"DROME", "taxon_id":"7227", "long_name":"Drosophila melanogaster"},{"short_name":"ECOLI", "taxon_id":"83333", "long_name":"Escherichia coli"},{"short_name":"HUMAN", "taxon_id":"9606", "long_name":"Homo sapiens"},{"short_name":"MOUSE", "taxon_id":"10090", "long_name":"Mus musculus"},{"short_name":"RAT", "taxon_id":"10116", "long_name":"Rattus norvegicus"},{"short_name":"SCHPO", "taxon_id":"284812", "long_name":"Schizosaccharomyces pombe"},{"short_name":"YEAST", "taxon_id":"559292", "long_name":"Saccharomyces cerevisiae"}];

  private unsubscribeAll: Subject<any>;


  constructor(private route: ActivatedRoute, private genesService: GenesService) {
    this.unsubscribeAll = new Subject();
  }

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.species = decodeURIComponent(params['id']);
      this.genesService.getGenesBySpecies(this.species).then(response => {
        this.genes = this.genesService.ancestral_genes;
        //this.proxy_genes = this.genesService.ancestral_genes;
        //console.log(this.genes);
        //console.log(this.proxy_genes);
        this.dataSource = new SpeciesDataSource(this.genesService, this.paginator, this.sort);
      });
    });

    fromEvent(this.filter.nativeElement, 'keyup')
      .pipe(
        takeUntil(this.unsubscribeAll),
        debounceTime(150),
        distinctUntilChanged()
      )
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }
}

export class SpeciesDataSource extends DataSource<any> {
  private filterChange = new BehaviorSubject('');
  private filteredDataChange = new BehaviorSubject('');

  constructor(
    private speciesDetailsService: GenesService,
    private matPaginator: MatPaginator,
    private matSort: MatSort
  ) {
    super();
    this.filteredData = this.speciesDetailsService.ancestral_genes;
  }

  get filteredData(): any {
    return this.filteredDataChange.value;
  }

  set filteredData(value: any) {
    this.filteredDataChange.next(value);
  }

  get filter(): string {
    return this.filterChange.value;
  }

  set filter(filter: string) {
    this.filterChange.next(filter);
  }

  connect(): Observable<any[]> {
    const displayDataChanges = [
      this.speciesDetailsService.onSpeciesChanged,
      this.matPaginator.page,
      this.filterChange,
      this.matSort.sortChange
    ];

    return merge(...displayDataChanges).pipe(map(() => {
      let data = this.speciesDetailsService.ancestral_genes.slice();
      data = this.filterData(data);
      this.filteredData = [...data];
      data = this.sortData(data);
      const startIndex = this.matPaginator.pageIndex * this.matPaginator.pageSize;
      return data.splice(startIndex, this.matPaginator.pageSize);
    })
    );
  }

  filterData(data): any {
    if (!this.filter) {
      return data;
    }
    return NoctuaUtils.filterArrayByString(data, this.filter);
  }

  sortData(data): any[] {
    if (!this.matSort.active || this.matSort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch (this.matSort.active) {
        case 'ptn':
          [propertyA, propertyB] = [a.ptn, b.ptn];
          break;
        case 'name':
          [propertyA, propertyB] = [a.name, b.name];
          break;
        case 'pthr':
          [propertyA, propertyB] = [a.pthr, b.pthr];
          break;
        case 'proxy_gene':
          [propertyA, propertyB] = [a.pthr, b.pthr];
          break;
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this.matSort.direction === 'asc' ? 1 : -1);
    });
  }

  disconnect(): void {
  }
}


