import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbsService } from '@agb.common/services/breadcrumbs/breadcrumbs.service';
import { GeneService } from './gene.service';
import { Gene } from './models/gene';
import * as _ from 'lodash';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-genes',
  templateUrl: 'gene.component.html',
  styleUrls: ['gene.component.scss'],
})

export class GeneComponent implements OnInit {
  @ViewChild(MatSort)
  sort: MatSort;

  ptn: string;
  gene; Gene;
  displayedColumns: string[] = ['proxy_org_long', 'proxy_gene'];
  dataSource;

  constructor(
    private route: ActivatedRoute,
    private breadcrumbsService: BreadcrumbsService,
    private geneService: GeneService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.ptn = decodeURIComponent(params['ptn']);
      this.geneService.getGeneByPtn(this.ptn).then(response => {
        this.gene = this.geneService.gene;
        this.dataSource = new MatTableDataSource(this.gene.proxy_genes);
        this.dataSource.sort = this.sort;

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