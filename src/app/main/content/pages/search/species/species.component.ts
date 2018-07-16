import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {NodeService} from './services/nodeservice';
import {Tree} from './services/tree';
import { TreeNode, TreeDragDropService } from 'primeng/primeng';
import { SpeciesTree } from './data/species-tree-nodes';

import { BreadcrumbsService } from '@agb.common/services/breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'app-species',
  templateUrl: 'species.component.html',
  styleUrls: ['tree.css','species.component.scss'],
  providers: [TreeDragDropService, NodeService]
})

export class SpeciesComponent implements OnInit {

  @ViewChild('expandingTree')
  expandingTree: Tree;
  
  species: TreeNode[];
  lazySpecies: TreeNode[];
  selectedSpecies: TreeNode;
  loading: boolean;

  constructor(private router: Router,private breadcrumbsService: BreadcrumbsService, private nodeService: NodeService) { }

  ngOnInit() {
    this.loading = true;
    this.species = SpeciesTree;
  }

nodeSelect(event) {
    this.species = event.node.data;
    //console.log(this.species, '--path ', node.path);
    this.router.navigateByUrl(`/species/${this.species}`);

    this.breadcrumbsService.setCurrentBreadcrumbs(event.node.path.map(species => (
      {
        label: species,
        url: '/species/' + species
      })));
}
}
