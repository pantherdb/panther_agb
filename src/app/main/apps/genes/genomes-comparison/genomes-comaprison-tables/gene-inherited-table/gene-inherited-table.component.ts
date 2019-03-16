
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
  selector: 'app-gene-inherited-table',
  templateUrl: './gene-inherited-table.component.html',
  styleUrls: ['./gene-inherited-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: noctuaAnimations
})
export class GeneInheritedTableComponent implements OnInit, OnDestroy {
  dataSource: SpeciesDataSourcePass | null;
  displayedColumns_pass = ['ptn_pass', 'name_pass', 'ext_pthr'];

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild('filter')
  filter: ElementRef;

  @ViewChild(MatSort)
  sort: MatSort;
  genes: any[] = [];
  genesInherited: any[] = [];
  descGenePtns: any[] = [];
  genesInheritedCount: any;
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

      this.genesService.getGenePassed(this.Ancspecies, this.ExtSpecies, 1, 50).then(response => {
        this.genesInherited = this.genesService.genesInherited;
        //console.log(this.genesInherited);
        //this.genesInheritedCount = this.genesInherited.length;
        this.dataSource = new SpeciesDataSourcePass(this.genesService, this.paginator, this.sort);

        this.genesService.getGenePassed(this.Ancspecies, this.ExtSpecies).then(response => {
          this.genesInherited = this.genesService.genesInherited;
          this.descGenePtns = this.genesService.descGenePtns;
          //console.log(this.genesInherited);
          this.genesInheritedCount = this.genesInherited.length;
          this.dataSource = new SpeciesDataSourcePass(this.genesService, this.paginator, this.sort);
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
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });

  }

  download_pass(): void {
    this.exporter = new ExportToCSV();
    this.exporter.exportColumnsToCSV(this.genesInherited, `${this.Ancspecies} genes passed to ${this.ExtSpecies}.csv`, ["ptn", "name", "descent_gnames", "descent_longIds"]);
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
    this.filteredData = this.speciesDetailsService.genesInherited;
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
      let data = this.speciesDetailsService.genesInherited.slice();
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
