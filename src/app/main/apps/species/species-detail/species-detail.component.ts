import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  speciesDetail: any;
  //displayedColumns: string[] = ['proxy_org_long', 'proxy_gene'];
  //dataSource;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private breadcrumbsService: BreadcrumbsService,
    private speciesService: SpeciesService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.species = decodeURIComponent(params['id']);
      this.speciesService.getSpeciesDetail(this.species).then(response => {
        this.speciesDetail = this.speciesService.speciesDetail;
        //this.speciesService.activeSpecies = this.species;
        //console.log(this.speciesDetail);
      });
    });
  }

  goToGeneList(){
    this.router.navigate([`species/genes`, {
      outlets: {
        'list': ['genes', `${this.species}`, 'default species']
      }
    }]);
    this.speciesService.setActiveSpecies(this.species);
  }

}
