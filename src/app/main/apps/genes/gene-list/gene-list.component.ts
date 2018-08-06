
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatPaginator, MatSort } from '@angular/material';
import { MatOptionSelectionChange} from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { merge, Observable, BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
// import { ListService } from '@agb.common/services/data-loader/list.service';
import { SpeciesService } from '../../species/species.service';
import { GenesService } from '../genes.service';

import { noctuaAnimations } from '@noctua/animations';
import { NoctuaUtils } from '@noctua/utils/noctua-utils';

import { takeUntil } from 'rxjs/internal/operators';
import { forEach } from '@angular/router/src/utils/collection';
import { ExportToCSV } from "@molteni/export-csv";

@Component({
  selector: 'app-gene-list',
  templateUrl: 'gene-list.component.html',
  styleUrls: ['gene-list.component.scss'],
  animations: noctuaAnimations
})
export class GeneListComponent implements OnInit, OnDestroy {
  dataSource: SpeciesDataSource | null;
  displayedColumns = ['ptn', 'name', 'pthr', 'proxy_gene'];

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild('filter')
  filter: ElementRef;

  @ViewChild(MatSort)
  sort: MatSort;
  genes: any[] = [];
  proxy_species: any[];
  proxySpecies: any;
  selected_proxy_species: any;
  species: string;
  SpeciesInfo: any;
  exporter: any;
  private unsubscribeAll: Subject<any>;


  constructor(private route: ActivatedRoute, private router: Router, private genesService: GenesService,
    private speciesService: SpeciesService) {
    this.unsubscribeAll = new Subject();
  }

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.species = decodeURIComponent(params['species']);
      this.proxySpecies = decodeURIComponent(params['proxySpecies']);
      this.genesService.getGenesBySpecies(this.species, this.proxySpecies).then(response => {
        this.genes = this.genesService.ancestral_genes;
        //this.proxy_genes = this.genesService.ancestral_genes;
        //console.log(this.genes);
        //console.log(this.proxy_genes);
        this.dataSource = new SpeciesDataSource(this.genesService, this.paginator, this.sort);
      });
      this.genesService.getProxySpecies(this.species).then(response => {
        this.proxy_species = this.genesService.proxy_species;
        //console.log(this.proxy_species);
        //this.dataSource = new SpeciesDataSource(this.genesService, this.paginator, this.sort);
      });
      /* this.speciesService.getSpecies(this.species).then(response => {
         this.SpeciesInfo = this.speciesService.SpeciesDetail[0];
         //console.log(this.SpeciesInfo);
       });
       */
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

  download(): void {
    this.exporter = new ExportToCSV();
    this.exporter.exportColumnsToCSV(this.genes, `${this.species}.csv`, ["ptn", "name", "species", "pthr", "proxy_gene"]);
  }

  speciesDetail(): void {
    this.router.navigateByUrl(`species/species-info/${this.species}`);
  }

  changeProxyGenes(value){
    console.log(value);
    //this.selected_proxy_species = value;
    this.router.navigateByUrl(`/species/genes/(list:genes/${this.species}/${value})`);
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


