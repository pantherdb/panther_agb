
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatPaginator, MatSort } from '@angular/material';
import { MatOptionSelectionChange } from '@angular/material';
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

import { GenesDialogService } from './../dialog.service';
import { SpeciesDialogService } from './../../species/dialog.service';

@Component({
  selector: 'app-gene-list',
  templateUrl: './gene-list.component.html',
  styleUrls: ['./gene-list.component.scss'],
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
  totalGenesCount: any;
  proxy_species: any[];
  hasProxyGene: boolean;
  noProxyGene: boolean;
  proxySpecies: any;
  selected_proxy_species: any;
  species: string;
  speciesDetail: any;
  exporter: any;
  private unsubscribeAll: Subject<any>;


  constructor(private route: ActivatedRoute, private router: Router, private genesService: GenesService,
    private genesDialogService: GenesDialogService,
    private speciesService: SpeciesService, private speciesDialogService: SpeciesDialogService) {
    this.unsubscribeAll = new Subject();
  }

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.species = decodeURIComponent(params['species']);
      this.proxySpecies = decodeURIComponent(params['proxySpecies']);
      this.selected_proxy_species = this.proxySpecies;

      this.genesService.getGenesBySpecies(this.species, this.proxySpecies, 1, 50).then(response => {
        this.genes = this.genesService.ancestralGenes;
        this.totalGenesCount = this.genesService.totalGenes;
        this.dataSource = new SpeciesDataSource(this.genesService, this.paginator, this.sort);
        console.log(this.genes);

        this.genesService.getGenesBySpecies(this.species, this.proxySpecies).then(response => {
          this.genes = this.genesService.ancestralGenes;
          this.totalGenesCount = this.genesService.totalGenes;
          this.dataSource = new SpeciesDataSource(this.genesService, this.paginator, this.sort);
        });
      });

      this.genesService.getProxySpecies(this.species).then(response => {
        this.proxy_species = this.genesService.proxy_species.sort();
        this.proxy_species.unshift('default species');
        this.hasProxyGene = (this.proxy_species.length > 1);
        this.noProxyGene = (this.proxy_species.length == 0);
        //console.log(this.hasProxyGene);
        //console.log(this.proxy_species);
        //this.dataSource = new SpeciesDataSource(this.genesService, this.paginator, this.sort);
      });
      this.speciesService.getSpeciesDetail(this.species).then(response => {
        this.speciesDetail = this.speciesService.speciesDetail;
        //console.log(this.speciesDetail);
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

  download(): void {
    this.exporter = new ExportToCSV();
    this.exporter.exportColumnsToCSV(this.genes, `${this.species}.csv`, ["ptn", "name", "species", "pthr", "proxy_gene"]);
  }

  openGenePreview(species) {
    this.genesDialogService.openGenePreview(species);
  }

  openSpeciesDetail() {
    this.router.navigateByUrl(`species/${this.speciesDetail.short_name}`);
  }

  openSpeciesPreview() {
    this.speciesDialogService.openSpeciesPreview(this.speciesDetail.short_name);
  }

  changeProxyGenes(value) {
    //console.log(value);
    //this.selected_proxy_species = value;
    this.router.navigateByUrl(`/species/genes/(list:genes/${this.species}/${value})`);
  }

  onSelect({ selected }) {
    console.log(selected)
    this.openGenePreview(selected[0].ptn)
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
    this.filteredData = this.speciesDetailsService.ancestralGenes;
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
      let data = this.speciesDetailsService.ancestralGenes.slice();
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


