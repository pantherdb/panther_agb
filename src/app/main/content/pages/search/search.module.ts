import { NgModule } from '@angular/core';
//import {BrowserModule} from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { TreeModule } from 'angular-tree-component';
import { TreeviewModule } from 'ngx-treeview';

import { NgPipesModule } from 'ngx-pipes';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { RouterModule, Routes } from '@angular/router';
import { NoctuaSharedModule } from '@noctua/shared.module';

import { GeneComponent } from './gene/gene.component';
import { Replace } from './gene/gene.pipe';
import { GenesComponent } from './genes/genes.component';
import { SpeciesComponent } from './species/species.component';
import { SpeciesViewerComponent } from './species/species-viewer/species-viewer.component';


/* const routes = [
  { path: 'gene/:ptn', component: GenesComponent },
  {
    path: 'species', component: SpeciesComponent,
    children: [{
      path: ':id', component: GenesComponent,
    }, {
      path: ':ptn', component: GeneComponent, outlet: 'gene'
    }]
  },
  { path: '', redirectTo: 'species', pathMatch: 'full' }
]; */

const routes = [
  { path: 'gene/:ptn', component: GeneComponent },
  {
    path: 'species', component: SpeciesComponent,
    children: [{
      path: ':id', component: GenesComponent,
    }]
  }, {
    path: 'species-viewer', component: SpeciesViewerComponent
  },
  { path: '', redirectTo: 'species', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    //BrowserModule,
    NoctuaSharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgPipesModule,
    NgxPaginationModule,
    NgxDatatableModule,
    TreeModule,
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
    SpeciesViewerComponent
  ]
})
export class SearchModule { }
