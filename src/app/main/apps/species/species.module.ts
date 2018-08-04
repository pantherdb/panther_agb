import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NoctuaSharedModule } from '@noctua/shared.module';

import { AngularSplitModule } from 'angular-split';
import { TreeModule as NgxTreeModule } from 'angular-tree-component';
import { TreeModule as PgTreeModule } from 'primeng/primeng';
import { MatTreeModule } from '@angular/material/tree';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxGraphModule } from '@swimlane/ngx-graph';

import { SpeciesListComponent } from './species-list/species-list.component';
import { SpeciesDetailComponent } from './species-detail/species-detail.component';
import { SpeciesHorizontalTreeComponent } from './species-list/species-horizontal-tree/species-horizontal-tree.component';
import { SpeciesVerticalTreeComponent } from './species-list/species-vertical-tree/species-vertical-tree.component';
import { SpeciesGraphTreeComponent } from './species-list/species-graph-tree/species-graph-tree.component';
import { SpeciesFlatTreeComponent } from './species-list/species-flat-tree/species-flat-tree.component';

const routes = [
  {
    path: '', component: SpeciesListComponent,
    children: [{
      path: '', component: SpeciesFlatTreeComponent,
    }]
  }, {
    path: 'genes', component: SpeciesListComponent,
    children: [{
      path: '', component: SpeciesFlatTreeComponent,
    }, {
      path: ':id', loadChildren: './../genes/genes.module#GenesModule', outlet: 'list'
    }]
  }, {
    path: 'vertical-tree', component: SpeciesVerticalTreeComponent
  }, {
    path: 'horizontal-tree', component: SpeciesHorizontalTreeComponent
  }, {
    path: 'graph-tree', component: SpeciesGraphTreeComponent
  }, {
    path: ':id', component: SpeciesDetailComponent
  }];

@NgModule({
  declarations: [
    SpeciesListComponent,
    SpeciesDetailComponent,
    SpeciesHorizontalTreeComponent,
    SpeciesVerticalTreeComponent,
    SpeciesGraphTreeComponent,
    SpeciesFlatTreeComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    TranslateModule,
    NoctuaSharedModule,
    AngularSplitModule,
    NgxTreeModule,
    MatTreeModule,
    PgTreeModule,
    NgxChartsModule,
    NgxGraphModule,
  ]
})

export class SpeciesModule {
}
