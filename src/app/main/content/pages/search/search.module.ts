import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreeModule } from 'angular-tree-component';

import { NgPipesModule } from 'ngx-pipes';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { RouterModule, Routes } from '@angular/router';
import { NoctuaSharedModule } from '@noctua/shared.module';

import { GenesComponent } from './genes/genes.component';
import { SpeciesComponent } from './species/species.component';


const routes = [
  { path: 'gene/:ptn', component: GenesComponent },
  {
    path: 'species', component: SpeciesComponent,
    children: [{
      path: ':id', component: GenesComponent,
    }, {
      path: ':ptn', component: GenesComponent, outlet: 'gene'
    }]
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
    TreeModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    GenesComponent,
    SpeciesComponent,
    GenesComponent
  ]
})
export class SearchModule { }
