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
  styleUrls: ['./genomes-comparison.component.scss'],
  animations: noctuaAnimations
})
export class GenomesComparisonComponent implements OnInit, OnDestroy {
  dataSource_pass: SpeciesDataSourcePass | null;
  displayedColumns_pass = ['ptn_pass', 'name_pass'];
  dataSource_loss: SpeciesDataSourceLoss | null;
  displayedColumns_lost = ['ptn_lost', 'name_lost'];
  dataSource_gain: SpeciesDataSourceGain | null;
  displayedColumns_gain = ['ptn_gain', 'name_gain'];
  dataSource_not_modeled: SpeciesDataSourceNotModeled | null;
  displayedColumns_not_modeled = ['ptn_not_modeled', 'name_not_modeled'];

  @ViewChild(MatPaginator)
  paginator1: MatPaginator;

  @ViewChild(MatPaginator)
  paginator2: MatPaginator;

  @ViewChild(MatPaginator)
  paginator3: MatPaginator;

  @ViewChild(MatPaginator)
  paginator4: MatPaginator;

  @ViewChild('filter1')
  filter1: ElementRef;
  @ViewChild('filter2')
  filter2: ElementRef;
  @ViewChild('filter3')
  filter3: ElementRef;
  @ViewChild('filter3')
  filter4: ElementRef;

  @ViewChild(MatSort)
  sort: MatSort;
  genes: any[] = [];
  genes_pass: any[] = [];
  genes_loss: any[] = [];
  genes_gain: any[] = [];
  genes_not_modeled: any[] = [];
  total_gene_num: any;
  genes_pass_num: any;
  genes_loss_num: any;
  genes_gain_num: any;
  genes_not_modeled_num: any;
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
        this.total_gene_num = this.genesService.totalGenes;
        
        this.genesService.getGenesBySpecies(this.Ancspecies, this.ExtSpecies).then(response => {
          this.genes = this.genesService.ancestral_genes;
          this.total_gene_num = this.genesService.totalGenes;
        });



      });
      
      this.genesService.getGenePassed(this.Ancspecies, this.ExtSpecies, 1, 50).then(response => {
        this.genes_pass = this.genesService.pass_genes;
        this.genes_pass_num = this.genes_pass.length;
        this.dataSource_pass = new SpeciesDataSourcePass(this.genesService, this.paginator1, this.sort);

        this.genesService.getGenePassed(this.ExtSpecies, this.Ancspecies).then(response => {
          this.genes_pass = this.genesService.pass_genes;
          this.genes_pass_num = this.genes_pass.length;
          this.dataSource_pass = new SpeciesDataSourcePass(this.genesService, this.paginator1, this.sort);
        });
      });
      
      this.genesService.getGeneLoss(this.Ancspecies, this.ExtSpecies,  1, 50).then(response => {
        this.genes_loss = this.genesService.lost_genes;
        this.genes_loss_num = this.genes_loss.length;
        this.dataSource_loss = new SpeciesDataSourceLoss(this.genesService, this.paginator2, this.sort);

        this.genesService.getGeneLoss(this.Ancspecies, this.ExtSpecies).then(response => {
          this.genes_loss = this.genesService.lost_genes;
          this.genes_loss_num = this.genes_loss.length;
          this.dataSource_loss = new SpeciesDataSourceLoss(this.genesService, this.paginator2, this.sort);
        });
      });

      this.genesService.getGeneGains(this.ExtSpecies, this.Ancspecies, 1, 50).then(response => {
        this.genes_gain = this.genesService.gained_genes;
        this.genes_gain_num = this.genes_gain.length;
        this.dataSource_gain = new SpeciesDataSourceGain(this.genesService, this.paginator3, this.sort);

        this.genesService.getGeneGains(this.ExtSpecies, this.Ancspecies).then(response => {
          this.genes_gain = this.genesService.gained_genes;
          this.genes_gain_num = this.genes_gain.length;
          this.dataSource_gain = new SpeciesDataSourceGain(this.genesService, this.paginator3, this.sort);
        });
      });

      this.genesService.getGeneNotModeled(this.ExtSpecies, 1, 50).then(response => {
        this.genes_not_modeled= this.genesService.not_modeled_genes;
        this.genes_not_modeled_num = this.genes_not_modeled.length;
        this.dataSource_not_modeled = new SpeciesDataSourceNotModeled(this.genesService, this.paginator4, this.sort);

        this.genesService.getGeneNotModeled(this.ExtSpecies).then(response => {
          this.genes_not_modeled= this.genesService.not_modeled_genes;
        this.genes_not_modeled_num = this.genes_not_modeled.length;
        this.dataSource_not_modeled = new SpeciesDataSourceNotModeled(this.genesService, this.paginator4, this.sort);
        });
      });

      

      this.speciesService.getSpeciesDetail(this.Ancspecies).then(response => {
        this.speciesDetail = this.speciesService.speciesDetail;
        //console.log(this.speciesDetail);
      });

    });


    fromEvent(this.filter1.nativeElement, 'keyup')
      .pipe(
        takeUntil(this.unsubscribeAll),
        debounceTime(150),
        distinctUntilChanged()
      )
      .subscribe(() => {
        if (!this.dataSource_pass) {
          return;
        }
        this.dataSource_pass.filter = this.filter1.nativeElement.value;
      });

    fromEvent(this.filter2.nativeElement, 'keyup')
      .pipe(
        takeUntil(this.unsubscribeAll),
        debounceTime(150),
        distinctUntilChanged()
      )
      .subscribe(() => {
        if (!this.dataSource_loss) {
          return;
        }
        this.dataSource_loss.filter = this.filter2.nativeElement.value;
      });

    fromEvent(this.filter3.nativeElement, 'keyup')
      .pipe(
        takeUntil(this.unsubscribeAll),
        debounceTime(150),
        distinctUntilChanged()
      )
      .subscribe(() => {
        if (!this.dataSource_gain) {
          return;
        }
        this.dataSource_gain.filter = this.filter3.nativeElement.value;
      });

  }

  download_pass(): void {
    this.exporter = new ExportToCSV();
    this.exporter.exportColumnsToCSV(this.genes_pass, `${this.Ancspecies} genes passed to ${this.ExtSpecies}.csv`, ["ptn", "name"]);
  }

  download_lost(): void {
    this.exporter = new ExportToCSV();
    this.exporter.exportColumnsToCSV(this.genes_loss, `${this.Ancspecies} genes lost prior to ${this.ExtSpecies}.csv`, ["ptn", "name"]);
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

export class SpeciesDataSourcePass extends DataSource<any> {
  private filterChange = new BehaviorSubject('');
  private filteredDataChange = new BehaviorSubject('');

  constructor(
    private speciesDetailsService: GenesService,
    private matPaginator: MatPaginator,
    private matSort1: MatSort
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
      this.matSort1.sortChange
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
    if (!this.matSort1.active || this.matSort1.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch (this.matSort1.active) {
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

      return (valueA < valueB ? -1 : 1) * (this.matSort1.direction === 'asc' ? 1 : -1);
    });
  }

  disconnect(): void {
  }
}

export class SpeciesDataSourceLoss extends DataSource<any> {
  private filterChange = new BehaviorSubject('');
  private filteredDataChange = new BehaviorSubject('');

  constructor(
    private speciesDetailsService: GenesService,
    private matPaginator: MatPaginator,
    private matSort2: MatSort
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
      this.matSort2.sortChange
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
    if (!this.matSort2.active || this.matSort2.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch (this.matSort2.active) {
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

      return (valueA < valueB ? -1 : 1) * (this.matSort2.direction === 'asc' ? 1 : -1);
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
    private matSort3: MatSort
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
      this.matSort3.sortChange
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
    if (!this.matSort3.active || this.matSort3.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch (this.matSort3.active) {
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

      return (valueA < valueB ? -1 : 1) * (this.matSort3.direction === 'asc' ? 1 : -1);
    });
  }

  disconnect(): void {
  }
}

export class SpeciesDataSourceNotModeled extends DataSource<any> {
  private filterChange = new BehaviorSubject('');
  private filteredDataChange = new BehaviorSubject('');

  constructor(
    private speciesDetailsService: GenesService,
    private matPaginator: MatPaginator,
    private matSort3: MatSort
  ) {
    super();
    this.filteredData = this.speciesDetailsService.not_modeled_genes;
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
      this.matSort3.sortChange
    ];

    return merge(...displayDataChanges).pipe(map(() => {
      let data = this.speciesDetailsService.not_modeled_genes.slice();
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
    if (!this.matSort3.active || this.matSort3.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch (this.matSort3.active) {
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

      return (valueA < valueB ? -1 : 1) * (this.matSort3.direction === 'asc' ? 1 : -1);
    });
  }

  disconnect(): void {
  }
}

