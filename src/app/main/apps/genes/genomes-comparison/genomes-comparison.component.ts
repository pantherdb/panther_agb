import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { MatOptionSelectionChange } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { merge, Observable, BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
// import { ListService } from '@agb.common/services/data-loader/list.service';
import { SpeciesService } from '../../species/species.service';
import { GenesService } from '../genes.service';
import { BreadcrumbsService } from '@agb.common/services/breadcrumbs/breadcrumbs.service';

import { noctuaAnimations } from '@noctua/animations';
import { NoctuaUtils } from '@noctua/utils/noctua-utils';

import { takeUntil } from 'rxjs/internal/operators';
import { forEach } from '@angular/router/src/utils/collection';
import { ExportToCSV } from "@molteni/export-csv";

import { GenesDialogService } from './../dialog.service';
import { SpeciesDialogService } from './../../species/dialog.service';

@Component({
  selector: 'app-genomes-comparison',
  templateUrl: './genomes-comparison.component.html',
  styleUrls: ['./genomes-comparison.component.scss']
})
export class GenomesComparisonComponent implements OnInit, OnDestroy {
  dataSource_pass: SpeciesDataSourcePass | null;
  displayedColumns_pass = ['ptn_pass', 'name_pass'];
  dataSource_lost: SpeciesDataSourceLost | null;
  displayedColumns_lost = ['ptn_lost', 'name_lost'];
  dataSource_gain: SpeciesDataSourceGain | null;
  displayedColumns_gain = ['ptn_gain', 'name_gain'];

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild('filter')
  filter: ElementRef;

  @ViewChild(MatSort)
  sort: MatSort;
  genes: any[] = [];
  genes_pass: any[] = [];
  genes_lost: any[] = [];
  genes_gain: any[] = [];
  total_gene_num: any;
  genes_pass_num: any;
  genes_lost_num: any;
  genes_gain_num: any;
  proxy_species: any[];
  hasProxyGene: boolean;
  noProxyGene: boolean;
  ExtSpecies: any;
  selected_proxy_species: any;
  Ancspecies: string;
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
      this.Ancspecies = decodeURIComponent(params['ancestral']);
      this.ExtSpecies = decodeURIComponent(params['extant']);

      this.genesService.getGenesBySpecies(this.Ancspecies, this.ExtSpecies, 1, 50).then(response => {
        this.genes = this.genesService.ancestral_genes;
        this.genes_pass = this.genesService.pass_genes;
        this.genes_lost = this.genesService.lost_genes;
        this.total_gene_num = this.genesService.totalGenes;
        this.genes_pass_num = this.genes_pass.length;
        this.genes_lost_num = this.genes_lost.length;
        this.dataSource_pass = new SpeciesDataSourcePass(this.genesService, this.paginator, this.sort);
        this.dataSource_lost = new SpeciesDataSourceLost(this.genesService, this.paginator, this.sort);
        
        this.genesService.getGenesBySpecies(this.Ancspecies, this.ExtSpecies).then(response => {
          //console.log(response);
          this.genes = this.genesService.ancestral_genes;
          this.genes_pass = this.genesService.pass_genes;
          this.genes_lost = this.genesService.lost_genes;
          this.total_gene_num = this.genesService.totalGenes;
          this.genes_pass_num = this.genes_pass.length;
          this.genes_lost_num = this.genes_lost.length;
          this.dataSource_pass = new SpeciesDataSourcePass(this.genesService, this.paginator, this.sort);
          this.dataSource_lost = new SpeciesDataSourceLost(this.genesService, this.paginator, this.sort);

          /* this.genesService.getGenesBySpecies(this.ExtSpecies, 'default species').then(response => {
             console.log(response);
             //this.dataSource_gain = new SpeciesDataSourceGain(this.genesService, this.paginator, this.sort);
          }); */
        });

        

      });


      this.genesService.getGeneGains(this.ExtSpecies, this.Ancspecies, 1, 50).then(response => {
        this.genes_gain = this.genesService.gained_genes;
        this.genes_gain_num = this.genes_gain.length;
        this.dataSource_gain = new SpeciesDataSourceGain(this.genesService, this.paginator, this.sort);
        
        this.genesService.getGeneGains(this.ExtSpecies, this.Ancspecies).then(response => {
          this.genes_gain = this.genesService.gained_genes;
          this.genes_gain_num = this.genes_gain.length;
          this.dataSource_gain = new SpeciesDataSourceGain(this.genesService, this.paginator, this.sort);
        });

        

      });

      /* this.genesService.getProxySpecies(this.Ancspecies).then(response => {
        this.proxy_species = this.genesService.proxy_species.sort();
        this.proxy_species.unshift('default species');
        this.hasProxyGene = (this.proxy_species.length > 1);
        this.noProxyGene = (this.proxy_species.length == 0);
        //console.log(this.hasProxyGene);
        //console.log(this.proxy_species);
        //this.dataSource = new SpeciesDataSource(this.genesService, this.paginator, this.sort);
      }); */
      this.speciesService.getSpeciesDetail(this.Ancspecies).then(response => {
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
        if (!this.dataSource_pass) {
          return;
        }
        this.dataSource_pass.filter = this.filter.nativeElement.value;
      });

  }

  download_pass(): void {
    this.exporter = new ExportToCSV();
    this.exporter.exportColumnsToCSV(this.genes_pass, `${this.Ancspecies} genes passed to ${this.ExtSpecies}.csv`, ["ptn", "name"]);
  }

  download_lost(): void {
    this.exporter = new ExportToCSV();
    this.exporter.exportColumnsToCSV(this.genes_lost, `${this.Ancspecies} genes lost prior to ${this.ExtSpecies}.csv`, ["ptn", "name"]);
  }

  download_gain(): void {
    this.exporter = new ExportToCSV();
    this.exporter.exportColumnsToCSV(this.genes_gain, `${this.ExtSpecies} genes gained after ${this.Ancspecies}.csv`, ["ptn", "name"]);
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
    this.router.navigateByUrl(`/species/genes/(list:genes/${this.Ancspecies}/${value})`);
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
export class SpeciesDataSourceLost extends DataSource<any> {
  private filterChange = new BehaviorSubject('');
  private filteredDataChange = new BehaviorSubject('');

  constructor(
    private speciesDetailsService: GenesService,
    private matPaginator: MatPaginator,
    private matSort: MatSort
  ) {
    super();
    this.filteredData = this.speciesDetailsService.lost_genes;
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
      let data = this.speciesDetailsService.lost_genes.slice();
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
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this.matSort.direction === 'asc' ? 1 : -1);
    });
  }

  disconnect(): void {
  }
}

export class SpeciesDataSourcePass extends DataSource<any> {
  private filterChange = new BehaviorSubject('');
  private filteredDataChange = new BehaviorSubject('');

  constructor(
    private speciesDetailsService: GenesService,
    private matPaginator: MatPaginator,
    private matSort: MatSort
  ) {
    super();
    this.filteredData = this.speciesDetailsService.pass_genes;
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
      let data = this.speciesDetailsService.pass_genes.slice();
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



export class SpeciesDataSourceGain extends DataSource<any> {
  private filterChange = new BehaviorSubject('');
  private filteredDataChange = new BehaviorSubject('');

  constructor(
    private speciesDetailsService: GenesService,
    private matPaginator: MatPaginator,
    private matSort: MatSort
  ) {
    super();
    this.filteredData = this.speciesDetailsService.gained_genes;
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
      let data = this.speciesDetailsService.gained_genes.slice();
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
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this.matSort.direction === 'asc' ? 1 : -1);
    });
  }

  disconnect(): void {
  }
}

