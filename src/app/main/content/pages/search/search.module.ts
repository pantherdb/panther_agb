import { NgModule } from '@angular/core';
//import {BrowserModule} from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { TreeModule } from 'angular-tree-component';
import { TreeviewModule } from 'ngx-treeview';

//import { TreeModule } from './species/tree';
import { TreeModule } from 'primeng/primeng';

import { NgPipesModule } from 'ngx-pipes';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { RouterModule, Routes } from '@angular/router';
import { NoctuaSharedModule } from '@noctua/shared.module';

import { GeneComponent } from './gene/gene.component';
import { Replace } from './gene/gene.pipe';
import { GenesComponent } from './genes/genes.component';
import { SpeciesComponent } from './species/species.component';


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

/* const routes = [
  { path: 'gene/:ptn', component: GeneComponent },
  {
    path: 'species', component: SpeciesComponent,
    children: [{
      path: ':id', component: GenesComponent,
    }]
  },
  { path: '', redirectTo: 'species', pathMatch: 'full' }
]; */

const routes = [
  { path: 'gene/:ptn', component: GeneComponent },
  { path: 'species', component: SpeciesComponent },
  { path: 'species/:id', component: GenesComponent },
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
    TreeviewModule.forRoot(),
    RouterModule.forChild(routes),
  ],
  declarations: [
    GeneComponent,
    SpeciesComponent,
    GenesComponent,
    Replace
  ]
})
export class SearchModule { }
