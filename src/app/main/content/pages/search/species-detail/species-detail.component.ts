import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbsService } from '@agb.common/services/breadcrumbs/breadcrumbs.service';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-species-detail',
  templateUrl: './species-detail.component.html',
  styleUrls: ['./species-detail.component.scss']
})
export class SpeciesDetailComponent implements OnInit {
  @ViewChild(MatSort)
  sort: MatSort;

  species: string;
  //displayedColumns: string[] = ['proxy_org_long', 'proxy_gene'];
  //dataSource;

  constructor(
    private route: ActivatedRoute,
    private breadcrumbsService: BreadcrumbsService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.species = decodeURIComponent(params['id']);
      });
    }

}
