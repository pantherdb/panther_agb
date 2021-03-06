import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NoctuaSharedModule } from '@noctua/shared.module';

import { AngularSplitModule } from 'angular-split-ng6';
import { TreeModule as NgxTreeModule } from 'angular-tree-component';
import { TreeModule as PgTreeModule } from 'primeng/primeng';
import { MatTreeModule } from '@angular/material/tree';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxGraphModule } from '@swimlane/ngx-graph';

import { SpeciesDialogService } from './dialog.service';
import { SpeciesDetailDialogComponent } from './species-detail/dialogs/species-detail-dialog/species-detail.component';

import { SpeciesListComponent } from './species-list/species-list.component';
import { SpeciesDetailComponent } from './species-detail/species-detail.component';
import { SpeciesHorizontalTreeComponent } from './species-list/species-horizontal-tree/species-horizontal-tree.component';
import { SpeciesVerticalTreeComponent } from './species-list/species-vertical-tree/species-vertical-tree.component';
//import { SpeciesGraphTreeComponent } from './species-list/species-graph-tree/species-graph-tree.component';
import { SpeciesFlatTreeComponent } from './species-list/species-flat-tree/species-flat-tree.component';
import { SpeciesD3TreeComponent } from './species-list/species-expandable-tree/species-expandable-tree.component';

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
    path: 'expandable-tree', component: SpeciesD3TreeComponent
  }, {
    path: ':id', component: SpeciesDetailComponent
  }];

@NgModule({
  declarations: [
    SpeciesListComponent,
    SpeciesDetailComponent,
    SpeciesDetailDialogComponent,
    SpeciesHorizontalTreeComponent,
    SpeciesVerticalTreeComponent,
    //SpeciesGraphTreeComponent,
    SpeciesFlatTreeComponent,
    SpeciesD3TreeComponent,
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
  ],
  providers: [SpeciesDialogService],
  entryComponents: [
    SpeciesDetailDialogComponent
  ]
})

export class SpeciesModule {
}
