import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbsService } from '@agb.common/services/breadcrumbs/breadcrumbs.service';
import { GeneReplacePipe } from '@agb.common/pipes/gene-replace.pipe';
import { GeneService } from './gene.service';
import { Gene } from './models/gene';
import * as _ from 'lodash';
import { MatTableDataSource, MatSort } from '@angular/material';

import * as $ from "jquery";

@Component({
  selector: 'app-gene-detail',
  templateUrl: 'gene-detail.component.html',
  styleUrls: ['gene-detail.component.scss']
})

export class GeneDetailComponent implements OnInit {
  @ViewChild(MatSort)
  sort: MatSort;

  ptn: string;
  gene: Gene;
  paint;
  paintIsLoading = true;
  hasProxyGene: boolean;
  displayedColumns: string[] = ['proxy_org_long', 'proxy_gene'];
  dataSource;
  displayedColumns_a: string[] = ['go_accession', 'go_name'];
  dataSource_a;
  /* displayedColumns_ia: string[] = ['go_accession', 'go_name'];
  dataSource_ia; */

  constructor(
    private route: ActivatedRoute,
    private breadcrumbsService: BreadcrumbsService,
    private geneService: GeneService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.ptn = decodeURIComponent(params['ptn']);
      this.geneService.getGeneByPtn(this.ptn).then(response => {
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
      });
      this.geneService.getPaintByPtn(this.ptn).then(response => {
        this.paint = this.geneService.paint;
        //console.log(this.paint);
        //this.paint = this.geneService.paint;
        //this.dataSource_a = new MatTableDataSource(this.paint.direct_paint_annotations);
        this.dataSource_a = new MatTableDataSource(this.paint.paint_annotations);
        this.paintIsLoading = false;
        //console.log(this.paint);
        //this.dataSource_da = new MatTableDataSource(this.paint.direct_paint_annotations);
        //this.dataSource_ia = new MatTableDataSource(this.paint.inherited_paint_annotations);
      });
    });



  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
