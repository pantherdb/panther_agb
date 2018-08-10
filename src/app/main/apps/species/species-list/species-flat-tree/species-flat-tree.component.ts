import { Component, OnInit, Injectable, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { BehaviorSubject, Observable, of as observableOf } from 'rxjs';
import { BreadcrumbsService } from '@agb.common/services/breadcrumbs/breadcrumbs.service';

import { Species, SpeciesNode, SpeciesFlatNode } from './../../models/species'
import { SpeciesService } from './../../species.service';


@Component({
  selector: 'app-species-flat-tree',
  templateUrl: './species-flat-tree.component.html',
  styleUrls: ['./species-flat-tree.component.scss'],
})
export class SpeciesFlatTreeComponent implements OnInit {
  @ViewChild('tree') tree;

  speciesList: SpeciesNode[];
  selectedSpecies = null;

  treeControl: FlatTreeControl<SpeciesFlatNode>;
  treeFlattener: MatTreeFlattener<SpeciesNode, SpeciesFlatNode>;
  dataSource: MatTreeFlatDataSource<SpeciesNode, SpeciesFlatNode>;

  timescaleLegend: any = [];

  constructor(private router: Router,
    private speciesService: SpeciesService,
    private breadcrumbsService: BreadcrumbsService) {

    this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel,
      this._isExpandable, this._getChildren);
    this.treeControl = new FlatTreeControl<SpeciesFlatNode>(this._getLevel, this._isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    this.timescaleLegend = speciesService.timescaleLegend;

  }

  ngOnInit() {
    this.speciesService.getSpeciesList().then(response => {
      this.speciesList = response;
      console.dir(this.speciesList);

      this.dataSource.data = this.speciesList
      this.tree.treeControl.expandAll();
    });
  }

  selectSpecies(node) {
    this.selectedSpecies = node;

    this.router.navigate([`species/genes`, {
      outlets: {
        'list': ['genes', `${this.selectedSpecies.short_name}`, 'default species']
      }
    }]);

    /*
    this.breadcrumbsService.setCurrentBreadcrumbs(this.tree.getDescendants(node).map(species => (
      {
        label: species,
        url: '/species/' + species
      })));
      */
  }

  transformer = (node: SpeciesNode, level: number) => {
    return new SpeciesFlatNode(
      node.id,
      node.taxon_id,
      node.short_name,
      node.long_name,
      node.parent_id,
      node.timescale,
      node.timescaleColor,
      node.gene_count,
      !!node.children,
      level);
  }

  private _getLevel = (node: SpeciesFlatNode) => node.level;

  private _isExpandable = (node: SpeciesFlatNode) => node.expandable;

  private _getChildren = (node: SpeciesNode): Observable<SpeciesNode[]> => observableOf(node.children);

  hasChild = (_: number, _nodeData: SpeciesFlatNode) => _nodeData.expandable;
}
