import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NoctuaSharedModule } from '@noctua/shared.module';

import { TreeModule as NgxTreeModule } from 'angular-tree-component';
import { TreeModule as PgTreeModule } from 'primeng/primeng';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxGraphModule } from '@swimlane/ngx-graph';

import { SpeciesDetailComponent } from './species-detail/species-detail.component';
import { SpeciesHorizontalTreeComponent } from './species-list/species-horizontal-tree/species-horizontal-tree.component';
import { SpeciesVerticalTreeComponent } from './species-list/species-vertical-tree/species-vertical-tree.component';
import { SpeciesGraphTreeComponent } from './species-list/species-graph-tree/species-graph-tree.component';

const routes = [
  {
    path: ':id', component: SpeciesDetailComponent,
  }, {
    path: 'view/species-vertical-tree', component: SpeciesVerticalTreeComponent
  }, {
    path: 'species-horizontal-tree', component: SpeciesHorizontalTreeComponent
  }, {
    path: 'species-graph-tree', component: SpeciesGraphTreeComponent
  },
  { path: '', redirectTo: 'species', pathMatch: 'full' }];


@NgModule({
  declarations: [
    SpeciesDetailComponent,
    SpeciesHorizontalTreeComponent,
    SpeciesVerticalTreeComponent,
    SpeciesGraphTreeComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    TranslateModule,
    NoctuaSharedModule,
    NgxTreeModule,
    PgTreeModule,
    NgxChartsModule,
    NgxGraphModule,
  ]
})

export class SpeciesModule {
}
