import { Component, ElementRef, OnDestroy, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { MatOptionSelectionChange } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { merge, Observable, BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
// import { ListService } from '@agb.common/services/data-loader/list.service';
import { SpeciesService } from '../../../../species/species.service';
import { GenesHistoryService } from '../../../gene-history.service';
import { BreadcrumbsService } from '@agb.common/services/breadcrumbs/breadcrumbs.service';

import { noctuaAnimations } from '@noctua/animations';
import { NoctuaUtils } from '@noctua/utils/noctua-utils';

import { takeUntil } from 'rxjs/internal/operators';
import { forEach } from '@angular/router/src/utils/collection';
import { ExportToCSV } from "@molteni/export-csv";

import { GenesDialogService } from '../../../dialog.service';
import { SpeciesDialogService } from '../../../../species/dialog.service';

@Component({
  selector: 'app-loss-genes-table',
  templateUrl: './loss-genes-table.component.html',
  styleUrls: ['./loss-genes-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: noctuaAnimations
})
export class LossGenesTableComponent implements OnInit, OnDestroy {

  dataSource: SpeciesDataSourceLoss | null;
  displayedColumns_Loss = ['parent_gene_ptn', 'parent_gene_name', 'loss_node_ptn', 'pthr'];

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild('filter')
  filter: ElementRef;

  @ViewChild(MatSort)
  sort: MatSort;
  genes: any[] = [];
  genesLoss: any[] = [];
  genesLossCount: any;
  proxy_species: any[];
  hasProxyGene: boolean;
  noProxyGene: boolean;
  ChildSpecies: any;
  selected_proxy_species: any;
  ParentSpecies: string;
  ParentspeciesDetail: any;
  ChildspeciesDetail: any;
  exporter: any;
  private unsubscribeAll: Subject<any>;
  constructor(private route: ActivatedRoute, private router: Router, private genesHistoryService: GenesHistoryService,
    private genesDialogService: GenesDialogService,
    private speciesService: SpeciesService, private speciesDialogService: SpeciesDialogService) { 
      this.unsubscribeAll = new Subject();
    }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.ParentSpecies = decodeURIComponent(params['parent']);
      this.ParentSpecies.replace("/", "%2F");
      this.ChildSpecies = decodeURIComponent(params['child']);
      this.ChildSpecies.replace("/", "%2F");
      //console.log(this.ChildSpecies);
      this.genesHistoryService.getLossGenes(this.ChildSpecies, 1, 50).then(response => {
        this.genesLoss = this.genesHistoryService.genesLoss;
        this.genesLossCount = this.genesHistoryService.genesLossCount;
        this.dataSource = new SpeciesDataSourceLoss(this.genesHistoryService, this.paginator, this.sort);

        this.genesHistoryService.getLossGenes(this.ChildSpecies).then(response => {
          this.genesLoss = this.genesHistoryService.genesLoss;
          this.genesLossCount = this.genesHistoryService.genesLossCount;
          this.dataSource = new SpeciesDataSourceLoss(this.genesHistoryService, this.paginator, this.sort);
        });
      });

      this.speciesService.getSpeciesDetail(this.ParentSpecies).then(response => {
        this.ParentspeciesDetail = this.speciesService.speciesDetail;
        //console.log(this.speciesDetail);
      });
      this.speciesService.getSpeciesDetail(this.ChildSpecies).then(response => {
        this.ChildspeciesDetail = this.speciesService.speciesDetail;
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
  download_loss(): void {
    this.exporter = new ExportToCSV();
    this.exporter.exportColumnsToCSV(this.genesLoss, `${this.ParentSpecies} genes lost in ${this.ChildSpecies}.csv`, ["parent_gene_ptn", "event_ptn", "pthr"]);
  }

  openGenePreview(species) {
    this.genesDialogService.openGenePreview(species);
  }

  openChildSpeciesDetail() {
    this.router.navigateByUrl(`species/${this.ChildspeciesDetail.short_name}`);
  }

  openChildSpeciesPreview() {
    this.speciesDialogService.openSpeciesPreview(this.ChildspeciesDetail.short_name);
  }

  openPanther(pthr) {
    window.open(`http://www.pantherdb.org/panther/family.do?clsAccession=${pthr}`);
  }

  changeProxyGenes(value) {
    //console.log(value);
    //this.selected_proxy_species = value;
    this.router.navigateByUrl(`/species/genes/(list:genes/${this.ChildSpecies}/${value})`);
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

export class SpeciesDataSourceLoss extends DataSource<any> {
  private filterChange = new BehaviorSubject('');
  private filteredDataChange = new BehaviorSubject('');

  constructor(
    private speciesDetailsService: GenesHistoryService,
    private matPaginator: MatPaginator,
    private matSort3: MatSort
  ) {
    super();
    this.filteredData = this.speciesDetailsService.genesLoss;
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
      let data = this.speciesDetailsService.genesLoss.slice();
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
        case 'parent_gene_ptn':
          [propertyA, propertyB] = [a.parent_gene_ptn, b.parent_gene_ptn];
          break;
        case 'parent_gene_name':
            [propertyA, propertyB] = [a.parent_gene_name, b.parent_gene_name];
            break;
        case 'event_ptn':
          [propertyA, propertyB] = [a.event_ptn, b.event_ptn];
          break;
        
        /* case 'name':
          [propertyA, propertyB] = [a.name, b.name];
          break; */
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



