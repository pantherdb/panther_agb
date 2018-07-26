import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NoctuaSharedModule } from '@noctua/shared.module';
import { NoctuaContentComponent } from './content.component';
//import { PagesModule } from './pages/pages.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { TreeviewModule } from 'ngx-treeview';

import { NgPipesModule } from 'ngx-pipes';
import { NgxPaginationModule } from 'ngx-pagination';






@NgModule({
    declarations: [
        NoctuaContentComponent,
    ],
    imports: [
        RouterModule,
        //PagesModule,
        NoctuaSharedModule,
        //RouterModule.forChild(routes),
        TranslateModule,
        NgxDatatableModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgPipesModule,
        NgxPaginationModule,
        TreeviewModule.forRoot(),
    ],
    exports: [
        //PagesModule,
        NoctuaContentComponent
    ]
})
export class NoctuaContentModule {
}
