import { Component, OnInit, OnDestroy, ViewChild, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatMenuTrigger } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbsService } from '@agb.common/services/breadcrumbs/breadcrumbs.service';
import { Subject } from 'rxjs';
import { GeneReplacePipe } from '@agb.common/pipes/gene-replace.pipe';
import { GeneService } from './../../gene.service';
import { Gene } from './../../models/gene';
import * as _ from 'lodash';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'gene-detail-dialog',
  templateUrl: './gene-detail.component.html',
  styleUrls: ['./gene-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class GeneDetailDialogComponent implements OnInit, OnDestroy {
  private _unsubscribeAll: Subject<any>;

  @ViewChild(MatSort)
  sort: MatSort;

  //ptn: string;
  //gene; Gene;
  //displayedColumns: string[] = ['proxy_org_long', 'proxy_gene'];
  //dataSource;

  ptn: string;
  gene; Gene;
  paint;
  paintIsLoading = true;
  hasProxyGene: boolean;
  displayedColumns: string[] = ['proxy_org_long', 'proxy_gene'];
  dataSource;
  displayedColumns_da: string[] = ['go_accession', 'go_name'];
  dataSource_da;
  displayedColumns_ia: string[] = ['go_accession', 'go_name'];
  dataSource_ia;

  constructor(
    private _matDialogRef: MatDialogRef<GeneDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _matDialog: MatDialog,
    private route: ActivatedRoute,
    private breadcrumbsService: BreadcrumbsService,
    private geneService: GeneService) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {
    this.ptn = this._data.ptn
    this.geneService.getGeneByPtn(this.ptn).then(response => {
      //this.gene = this.geneService.gene;
      //this.gene.sequence = this.gene.sequence.replace(/\./g, '');
      //this.gene.sequence = this.gene.sequence.replace(/\_/g, '');  
      //this.dataSource = new MatTableDataSource(this.gene.proxy_genes);
      //this.dataSource.sort = this.sort;

      this.gene = this.geneService.gene;
      this.gene.sequence = this.gene.sequence.replace(/\./g, '');
      this.gene.sequence = this.gene.sequence.replace(/\_/g, '');
      this.gene.sequence = this.gene.sequence.replace(/\-/g, '');
      //console.log(this.gene.proxy_genes);
      this.hasProxyGene = (this.gene.proxy_genes.length > 0);   
      this.dataSource = new MatTableDataSource(this.gene.proxy_genes);
      this.dataSource.sort = this.sort;
      //this.dataSource_da = new MatTableDataSource(this.gene.direct_paint_annotations);
      //this.dataSource_ia = new MatTableDataSource(this.gene.inherited_paint_annotations);

      this.breadcrumbsService.setCurrentBreadcrumbs([{
        label: this.gene.ptn,
        url: 'gene/' + this.gene.ptn
      }]);
      this.geneService.getPaintByPtn(this.ptn).then(response => {
        this.paint = this.geneService.paint;
        this.paintIsLoading = false;
        //console.log(this.paint);
        this.dataSource_da = new MatTableDataSource(this.paint.direct_paint_annotations);
        this.dataSource_ia = new MatTableDataSource(this.paint.inherited_paint_annotations);
      });
    });

  }

  close() {
    this._matDialogRef.close();
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
