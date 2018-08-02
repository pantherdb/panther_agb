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

  speciesList: Species[];
  treeControl: FlatTreeControl<SpeciesFlatNode>;
  treeFlattener: MatTreeFlattener<SpeciesNode, SpeciesFlatNode>;
  dataSource: MatTreeFlatDataSource<SpeciesNode, SpeciesFlatNode>;

  constructor(private router: Router,
    private speciesService: SpeciesService,
    private breadcrumbsService: BreadcrumbsService) {

    this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel,
      this._isExpandable, this._getChildren);
    this.treeControl = new FlatTreeControl<SpeciesFlatNode>(this._getLevel, this._isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  }

  ngOnInit() {
    this.speciesService.getSpeciesList().then(response => {
      this.speciesList = <SpeciesNode[]>response;
      console.dir(this.speciesList);

      this.dataSource.data = response
      this.tree.treeControl.expandAll();
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

  transformer = (node: SpeciesNode, level: number) => {
    return new SpeciesFlatNode(
      node.id,
      node.long_name,
      node.parent_id,
      node.timescale,
      !!node.children,
      level);
  }

  private _getLevel = (node: SpeciesFlatNode) => node.level;

  private _isExpandable = (node: SpeciesFlatNode) => node.expandable;

  private _getChildren = (node: SpeciesNode): Observable<SpeciesNode[]> => observableOf(node.children);

  hasChild = (_: number, _nodeData: SpeciesFlatNode) => _nodeData.expandable;
}
