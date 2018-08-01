import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { TreeNode, TreeModel, TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from 'angular-tree-component';

import { BreadcrumbsService } from '@agb.common/services/breadcrumbs/breadcrumbs.service';

import { Species } from './../../models/species'
import { SpeciesService } from './../../species.service';

@Component({
  selector: 'app-species-flat-tree',
  templateUrl: './species-flat-tree.component.html',
  styleUrls: ['./species-flat-tree.component.scss']
})
export class SpeciesFlatTreeComponent implements OnInit {
  speciesList: Species[];

  constructor(private router: Router,
    private speciesService: SpeciesService,
    private breadcrumbsService: BreadcrumbsService) { }

  ngOnInit() {
    this.speciesService.getSpeciesList().then(response => {
      this.speciesList = <Species[]>response;
      console.dir(this.speciesList)
    });
  }

  selectSpecies(node) {
    // this.species = node.data.short_name;
    this.router.navigate([`species/species`, {
      outlets: {
        //   'list': ['species', `${this.species}`]
      }
    }]);
    //  { relativeTo: this.route }););

    this.breadcrumbsService.setCurrentBreadcrumbs(node.path.map(species => (
      {
        label: species,
        url: '/species/' + species
      })));
  }

}
