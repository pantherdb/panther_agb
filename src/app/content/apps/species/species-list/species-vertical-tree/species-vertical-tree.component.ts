import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TreeNode, TreeModel, TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from 'angular-tree-component';
import { speciesNodes, treeNodes } from '../../data/species-nodes';

import { BreadcrumbsService } from '@agb.common/services/breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'app-species-vertical-tree',
  templateUrl: './species-vertical-tree.component.html',
  styleUrls: ['./species-vertical-tree.component.scss'],
})

export class SpeciesVerticalTreeComponent {

  constructor(private router: Router, private breadcrumbsService: BreadcrumbsService) { }

  @ViewChild('tree') tree;

  species: string;
  taxonId: string;
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
    //this.tree.treeModel.expandAll();
  }

  ngAfterViewInit() {
    // this.tree.treeModel.expandAll();
    //  setTimeout(() => {
    //    this.tree.treeModel.expandAll();
    // }, 10);
    const someNode1 = this.tree.treeModel.getNodeById('LUCA');
    someNode1.expand();
    const someNode2 = this.tree.treeModel.getNodeById('Archaea-Eukaryota');
    someNode2.expand();
    const someNode3 = this.tree.treeModel.getNodeById('Eubacteria');
    someNode3.expand();
    const someNode4 = this.tree.treeModel.getNodeById('Eukaryota');
    someNode4.expand();
    const someNode5 = this.tree.treeModel.getNodeById('Archaea');
    someNode5.expand();

    const firstRoot = this.tree.treeModel.roots[0];
    firstRoot.setActiveAndVisible();
  }

  selectSpecies(node) {
    this.species = node.data.short_name;
    this.taxonId = node.data.taxon_id;
    //console.log(this.species, '--path ', node.path);
    console.log(this.taxonId);

    this.router.navigate([`/species/`, { outlets: { 'genes': [this.species] } }]);
    //  { relativeTo: this.route }););

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
