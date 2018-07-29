import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Tree } from 'primeng/components/tree/tree';
import { TreeNode, TreeDragDropService } from 'primeng/primeng';
import { SpeciesTree } from '../../data/species-tree-nodes';

import { BreadcrumbsService } from '@agb.common/services/breadcrumbs/breadcrumbs.service';


@Component({
  selector: 'app-species-horizontal-tree',
  templateUrl: './species-horizontal-tree.component.html',
  styleUrls: ['./species-horizontal-tree.component.scss'],
  providers: [TreeDragDropService]
})
export class SpeciesHorizontalTreeComponent implements OnInit {

  @ViewChild('expandingTree')
  expandingTree: Tree;

  species: TreeNode[];
  lazySpecies: TreeNode[];
  selectedSpecies: TreeNode;
  loading: boolean;

  constructor(private router: Router, private breadcrumbsService: BreadcrumbsService) { }

  ngOnInit() {
    this.loading = true;
    this.species = SpeciesTree;
  }

  toggleExpand(node) {
    node.expanded = !node.expanded;
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

