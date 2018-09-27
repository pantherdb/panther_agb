
import { Component, ElementRef, OnDestroy, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { MatOptionSelectionChange } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { merge, Observable, BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
// import { ListService } from '@agb.common/services/data-loader/list.service';
import { SpeciesService } from '../../../../species/species.service';
import { GenesService } from './../../../genes.service';
import { BreadcrumbsService } from '@agb.common/services/breadcrumbs/breadcrumbs.service';

import { noctuaAnimations } from '@noctua/animations';
import { NoctuaUtils } from '@noctua/utils/noctua-utils';

import { takeUntil } from 'rxjs/internal/operators';
import { forEach } from '@angular/router/src/utils/collection';
import { ExportToCSV } from "@molteni/export-csv";

import { GenesDialogService } from './../../../dialog.service';
import { SpeciesDialogService } from './../../../../species/dialog.service';

@Component({
  selector: 'app-gene-unmodeled-table',
  templateUrl: './gene-unmodeled-table.component.html',
  styleUrls: ['./gene-unmodeled-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: noctuaAnimations
})
export class GeneUnmodeledTableComponent implements OnInit, OnDestroy {
  dataSource_not_modeled: SpeciesDataSourceNotModeled | null;
  displayedColumns_not_modeled = ['ptn_not_modeled', 'name_not_modeled'];

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild('filter')
  filter: ElementRef;

  @ViewChild(MatSort)
  sort: MatSort;
  genes: any[] = [];
  genes_not_modeled: any[] = [];
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

      this.genesService.getGeneNotModeled(this.ExtSpecies, 1, 50).then(response => {
        this.genes_not_modeled = this.genesService.not_modeled_genes;
        //this.genes_not_modeled_num = this.genes_not_modeled.length;
        this.dataSource_not_modeled = new SpeciesDataSourceNotModeled(this.genesService, this.paginator, this.sort);

        this.genesService.getGeneNotModeled(this.ExtSpecies).then(response => {
          this.genes_not_modeled = this.genesService.not_modeled_genes;
          this.genes_not_modeled_num = this.genes_not_modeled.length;
          this.dataSource_not_modeled = new SpeciesDataSourceNotModeled(this.genesService, this.paginator, this.sort);
        });
      });



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
        if (!this.dataSource_not_modeled) {
          return;
        }
        this.dataSource_not_modeled.filter = this.filter.nativeElement.value;
      });
  }


  download_not_modeled(): void {
    this.exporter = new ExportToCSV();
    this.exporter.exportColumnsToCSV(this.genes_not_modeled, `${this.ExtSpecies} genes not modeled.csv`, ["ptn", "name"]);
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

