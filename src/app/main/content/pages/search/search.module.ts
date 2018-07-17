import { NgModule } from '@angular/core';
//import {BrowserModule} from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreeModule as NgxTreeModule } from 'angular-tree-component';
import { TreeModule as PgTreeModule } from 'primeng/primeng';

import { TreeviewModule } from 'ngx-treeview';



import { NgPipesModule } from 'ngx-pipes';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxGraphModule } from '@swimlane/ngx-graph';

import { RouterModule, Routes } from '@angular/router';
import { NoctuaSharedModule } from '@noctua/shared.module';

import { GeneComponent } from './gene/gene.component';
import { Replace } from './gene/gene.pipe';
import { GenesComponent } from './genes/genes.component';
import { SpeciesComponent } from './species/species.component';
import { SpeciesHorizontalViewerComponent } from './species/viewers/species-horizontal-viewer/species-horizontal-viewer.component';
import { SpeciesGraphViewerComponent } from './species/viewers/species-graph-viewer/species-graph-viewer.component';


const routes = [
  { path: 'gene/:ptn', component: GeneComponent },
  {
    path: 'species', component: SpeciesComponent,
    children: [
      {
        path: ':id', component: GenesComponent
      },
      // {
      //  path: 'species-info/:id', component: SpeciesDetailComponent,
      // }
    ]
  },
  {
    path: 'species-horizontal-viewer', component: SpeciesHorizontalViewerComponent
  },
  {
    path: 'species-graph-viewer', component: SpeciesGraphViewerComponent
  },
  { path: '', redirectTo: 'species', pathMatch: 'full' }
];


@NgModule({
  imports: [
    CommonModule,
    NoctuaSharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgPipesModule,
    NgxPaginationModule,
    NgxDatatableModule,
    NgxTreeModule,
    PgTreeModule,
    NgxChartsModule,
    NgxGraphModule,
    TreeviewModule.forRoot(),
    RouterModule.forChild(routes),
  ],
  declarations: [
    GeneComponent,
    SpeciesComponent,
    GenesComponent,
    Replace,
    SpeciesHorizontalViewerComponent,
    SpeciesGraphViewerComponent
  ]
})
export class SearchModule { }
