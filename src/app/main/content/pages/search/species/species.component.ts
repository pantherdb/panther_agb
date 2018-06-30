import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TreeNode, TreeModel, TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from 'angular-tree-component';
import { speciesNodes, treeNodes } from './data/species-nodes';

import { BreadcrumbsService } from '@agb.common/services/breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'app-species',
  templateUrl: 'species.component.html',
  styleUrls: ['species.component.scss'],
})

export class SpeciesComponent {

  constructor(private router: Router, private breadcrumbsService: BreadcrumbsService) { }

  @ViewChild('tree') tree;

  species: string;
  //nodes: any = speciesNodes;
  nodes: any = treeNodes;
  encodeURIComponent = encodeURIComponent;


  actionMapping: IActionMapping = {
    mouse: {
      contextMenu: (tree, node, $event) => {
        $event.preventDefault();
        alert(`context menu for ${node.data.name}`);
      },
      dblClick: (tree, node, $event) => {
        if (node.hasChildren) {
          TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
        }
      },
      click: (tree, node, $event) => {
        $event.shiftKey
          ? TREE_ACTIONS.TOGGLE_ACTIVE_MULTI(tree, node, $event)
          : TREE_ACTIONS.TOGGLE_ACTIVE(tree, node, $event);
      }
    },
    keys: {
      [KEYS.ENTER]: (tree, node, $event) => alert(`This is ${node.data.name}`)
    }
  };

  speciesTreeOptions: ITreeOptions = {
    isExpandedField: 'expanded',
    idField: 'short_name',
    actionMapping: this.actionMapping,
    nodeHeight: 23,
    // useVirtualScroll: true,
    animateExpand: true,
    animateSpeed: 30,
    animateAcceleration: 1.2,
    scrollOnActivate: true,
    scrollContainer: document.body.parentElement
  };

  onInitialized(tree) {
    // this.tree.treeModel.expandAll();
  }

  ngAfterViewInit() {
    // this.tree.treeModel.expandAll();
    //  setTimeout(() => {
    //    this.tree.treeModel.expandAll();
    // }, 10);
  }

  selectSpecies(node) {
    this.species = node.data.short_name;
    console.log(this.species, '--path ', node.path);
    this.router.navigateByUrl(`/species/${this.species}`);

    this.breadcrumbsService.setCurrentBreadcrumbs(node.path.map(species => (
      {
        label: species,
        url: '/species/' + species
      })));
  }

  childrenCount(node: TreeNode): string {
    return node && node.children ? `(${node.children.length})` : '';
  }

  filterNodes(text, tree) {
    tree.treeModel.filterNodes(text);
  }

  activateSubSub(tree) {
    // tree.treeModel.getNodeBy((node) => node.data.name === 'subsub')
    tree.treeModel.getNodeById(1001)
      .setActiveAndVisible();
  }

  onEvent(event) {
    //  console.log(event);
  }
}
