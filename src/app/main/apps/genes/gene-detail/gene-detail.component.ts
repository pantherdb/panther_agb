import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbsService } from '@agb.common/services/breadcrumbs/breadcrumbs.service';
import { GeneReplacePipe } from '@agb.common/pipes/gene-replace.pipe';
import { GeneService } from './gene.service';
import { Gene } from './models/gene';
import * as _ from 'lodash';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-gene-detail',
  templateUrl: 'gene-detail.component.html',
  styleUrls: ['gene-detail.component.scss']
})

export class GeneDetailComponent implements OnInit {
  @ViewChild(MatSort)
  sort: MatSort;

  ptn: string;
  gene; Gene;
  hasProxyGene: boolean;
  displayedColumns: string[] = ['proxy_org_long', 'proxy_gene'];
  dataSource;
  displayedColumns_da: string[] = ['go_accession', 'go_name'];
  dataSource_da;
  displayedColumns_ia: string[] = ['go_accession', 'go_name'];
  dataSource_ia;

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
        this.dataSource_da = new MatTableDataSource(this.gene.direct_paint_annotations);
        this.dataSource_ia = new MatTableDataSource(this.gene.inherited_paint_annotations);

        this.breadcrumbsService.setCurrentBreadcrumbs([{
          label: this.gene.ptn,
          url: 'gene/' + this.gene.ptn
        }]);
      });
    });

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
