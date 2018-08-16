import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { v4 as uuid } from 'uuid';
import * as shape from 'd3-shape';
import { Subject } from 'rxjs';
import { colorSets } from './color-sets';
import chartGroups from './chart-types';
import { generateSpeciesGraph } from '../../data/species-nodes';

@Component({
  selector: 'app-species-graph-tree',
  templateUrl: './species-graph-tree.component.html',
  styleUrls: ['./species-graph-tree.component.scss']
})
export class SpeciesGraphTreeComponent implements OnInit {

  chartType = 'directed-graph';
  chartTypeGroups: any;
  chart: any;
  graph: { links: any[]; nodes: any[] };
  hierarchialGraph: { links: any[]; nodes: any[] };

  view: any[];
  width = 700;
  height = 300;
  fitContainer = true;
  autoZoom = true;
  panOnZoom = true;
  enableZoom = true;
  autoCenter = false;

  // observables
  update$: Subject<any> = new Subject();
  center$: Subject<any> = new Subject();
  zoomToFit$: Subject<any> = new Subject();

  // options
  showLegend = false;
  orientation = 'LR'; // LR, RL, TB, BT
  orientations: any[] = [
    {
      label: 'Left to Right',
      value: 'LR'
    }, {
      label: 'Right to Left',
      value: 'RL'
    }, {
      label: 'Top to Bottom',
      value: 'TB'
    }, {
      label: 'Bottom to Top',
      value: 'BT'
    }
  ];

  // line interpolation
  curveType = 'Linear';
  curve: any = shape.curveLinear;
  interpolationTypes = [
    'Bundle',
    'Cardinal',
    'Catmull Rom',
    'Linear',
    'Monotone X',
    'Monotone Y',
    'Natural',
    'Step',
    'Step After',
    'Step Before'
  ];

  colorSchemes: any;
  colorScheme: any;
  schemeType = 'ordinal';
  selectedColorScheme: string;
  dataVisable: any;
  realTimeData: any;
  //zoomLevel = 0.06643847827763708;
  zoomLevel: any;
  panOffsetX;
  panOffsetY;

  constructor(private router: Router) {
    this.colorSchemes = colorSets;
    this.hierarchialGraph = generateSpeciesGraph();

    this.setColorScheme('picnic');
    this.setInterpolationType('Bundle');
  }

  ngOnInit() {

    setInterval(this.updateData.bind(this), 1000);

    if (!this.fitContainer) {
      this.applyDimensions();
    }
  }

  selectSpecies(speciesLabel) {
    this.router.navigateByUrl(`/species/${speciesLabel}`);
  }

  updateData() {

  }

  applyDimensions() {
    this.view = [this.width, this.height];
  }

  toggleEnableZoom(enableZoom: boolean) {
    this.enableZoom = enableZoom;
  }

  toggleFitContainer(fitContainer: boolean, autoZoom: boolean, autoCenter: boolean): void {
    this.fitContainer = fitContainer;
    this.autoZoom = autoZoom;
    this.autoCenter = autoCenter;

    if (this.fitContainer) {
      this.view = undefined;
    } else {
      this.applyDimensions();
    }
  }


  select(data) {
    this.selectSpecies(data.short_label)
  }

  setColorScheme(name) {
    this.selectedColorScheme = name;
    this.colorScheme = this.colorSchemes.find(s => s.name === name);
  }

  setInterpolationType(curveType) {
    this.curveType = curveType;
    if (curveType === 'Bundle') {
      this.curve = shape.curveBundle.beta(1);
    }
    if (curveType === 'Cardinal') {
      this.curve = shape.curveCardinal;
    }
    if (curveType === 'Catmull Rom') {
      this.curve = shape.curveCatmullRom;
    }
    if (curveType === 'Linear') {
      this.curve = shape.curveLinear;
    }
    if (curveType === 'Monotone X') {
      this.curve = shape.curveMonotoneX;
    }
    if (curveType === 'Monotone Y') {
      this.curve = shape.curveMonotoneY;
    }
    if (curveType === 'Natural') {
      this.curve = shape.curveNatural;
    }
    if (curveType === 'Step') {
      this.curve = shape.curveStep;
    }
    if (curveType === 'Step After') {
      this.curve = shape.curveStepAfter;
    }
    if (curveType === 'Step Before') {
      this.curve = shape.curveStepBefore;
    }
  }

  onLegendLabelClick(entry) {
    console.log('Legend clicked', entry);
  }

  toggleExpand(node) {
    console.log('toggle expand', node);
  }

  updateChart() {
    this.update$.next(true);
  }

  zoomToFit() {
    this.zoomToFit$.next(true);
  }

  center() {
    this.center$.next(true);
  }

}
