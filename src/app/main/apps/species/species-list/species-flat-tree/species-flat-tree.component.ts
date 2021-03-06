import { Component, OnInit, Injectable, ViewChild, ViewChildren, Renderer2, ElementRef } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeNode } from '@angular/material/tree';
import { BehaviorSubject, Observable, of as observableOf } from 'rxjs';
import { BreadcrumbsService } from '@agb.common/services/breadcrumbs/breadcrumbs.service';

import { Species, SpeciesNode, SpeciesFlatNode } from './../../models/species'
import { SpeciesDialogService } from './../../dialog.service';
import { SpeciesService } from './../../species.service';


@Component({
  selector: 'app-species-flat-tree',
  templateUrl: './species-flat-tree.component.html',
  styleUrls: ['./species-flat-tree.component.scss'],
})
export class SpeciesFlatTreeComponent implements OnInit {
  @ViewChild('tree') tree;
  @ViewChildren(MatTreeNode, { read: ElementRef }) treeNodes: ElementRef[];

  activeSpecies: any;
  speciesList: SpeciesNode[];

  treeControl: FlatTreeControl<SpeciesFlatNode>;
  treeFlattener: MatTreeFlattener<SpeciesNode, SpeciesFlatNode>;
  dataSource: MatTreeFlatDataSource<SpeciesNode, SpeciesFlatNode>;

  timescaleLegend: any = [];

  constructor(private router: Router,
    private route: ActivatedRoute,
    private speciesDialogService: SpeciesDialogService,
    private speciesService: SpeciesService,
    private renderer: Renderer2,
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
      //console.dir(this.speciesList);

      this.dataSource.data = this.speciesList;
      this.activeSpecies = this.speciesService.getActiveSpecies();
      this.tree.treeControl.expandAll();
    });
    

    //this.activeSpecies = this.speciesService.getActiveSpecies();
    //console.log(this.activeSpecies);
    //console.log(this.route.snapshot.queryParams);
    /* if (this.activeSpecies) {
      this.router.navigate([`species/genes`, {
        outlets: {
          'list': ['genes', `${this.activeSpecies}`, 'default species']
        }
      }]);
    } */
  }

  selectSpecies(species) {
    this.activeSpecies = species;

    this.router.navigate([`species/genes`, {
      outlets: {
        'list': ['genes', `${species}`, 'default species']
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


  openSpeciesPreview(species) {
    this.speciesDialogService.openSpeciesPreview(species);
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
