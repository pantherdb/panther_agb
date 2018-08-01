import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpeciesService } from './../species.service';
import { BreadcrumbsService } from '@agb.common/services/breadcrumbs/breadcrumbs.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Species } from './species';

@Component({
  selector: 'app-species-detail',
  templateUrl: './species-detail.component.html',
  styleUrls: ['./species-detail.component.scss']
})
export class SpeciesDetailComponent implements OnInit {
  @ViewChild(MatSort)
  sort: MatSort;

  species: string;
  SpeciesInfo: any;
  //displayedColumns: string[] = ['proxy_org_long', 'proxy_gene'];
  //dataSource;

  constructor(
    private route: ActivatedRoute,
    private breadcrumbsService: BreadcrumbsService,
    private speciesService: SpeciesService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.species = decodeURIComponent(params['id']);
      this.speciesService.getSpeciesDetail(this.species).then(response => {
        //  this.SpeciesInfo = this.speciesService.SpeciesDetail[0];
        console.log(this.SpeciesInfo);
      });
    });
  }

}
