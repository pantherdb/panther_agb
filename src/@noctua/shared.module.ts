import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { NoctuaDirectivesModule } from './directives/directives';
import { NoctuaPipesModule } from './pipes/pipes.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        NgxDatatableModule,
        NoctuaDirectivesModule,
        NoctuaPipesModule
    ],
    exports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        NgxDatatableModule,
        FlexLayoutModule,
        NoctuaDirectivesModule,
        NoctuaPipesModule
    ]
})

export class NoctuaSharedModule { }
