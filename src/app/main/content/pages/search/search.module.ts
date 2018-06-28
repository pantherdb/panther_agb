import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreeModule } from 'angular-tree-component';

import { NgPipesModule } from 'ngx-pipes';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { RouterModule, Routes } from '@angular/router';
import { NoctuaSharedModule } from '@noctua/shared.module';

import { GeneDetailsComponent } from './gene-details/gene-details.component';
import { SpeciesComponent } from './species/species.component';
import { SpeciesDetailComponent } from './species-detail/species-detail.component';


const routes = [
  { path: 'gene/:ptn', component: GeneDetailsComponent },
  {
    path: 'species', component: SpeciesComponent,
    children: [{
      path: ':id', component: SpeciesDetailComponent,
    }, {
      path: ':ptn', component: GeneDetailsComponent, outlet: 'gene'
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
    GeneDetailsComponent,
    SpeciesComponent,
    SpeciesDetailComponent
  ]
})
export class SearchModule { }
