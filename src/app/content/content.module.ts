import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NoctuaSharedModule } from '@noctua/shared.module';
import { NoctuaContentComponent } from './content.component';
//import { PagesModule } from './pages/pages.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreeModule as NgxTreeModule } from 'angular-tree-component';
import { TreeModule as PgTreeModule } from 'primeng/primeng';

import { TreeviewModule } from 'ngx-treeview';

import { NgPipesModule } from 'ngx-pipes';
import { NgxPaginationModule } from 'ngx-pagination';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxGraphModule } from '@swimlane/ngx-graph';


import { AboutComponent } from './about/about.component';
import { GeneComponent } from './gene/gene.component';
import { Replace } from './gene/gene.pipe';
import { GenesComponent } from './genes/genes.component';
import { SpeciesComponent } from './species/species.component';
import { SpeciesHorizontalViewerComponent } from './species/viewers/species-horizontal-viewer/species-horizontal-viewer.component';
import { SpeciesGraphViewerComponent } from './species/viewers/species-graph-viewer/species-graph-viewer.component';
import { SpeciesDetailComponent } from './species-detail/species-detail.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PrivaryPolicyComponent } from './privary-policy/privary-policy.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { ReleaseInfoComponent } from './release-info/release-info.component';
import { DownloadsComponent } from './downloads/downloads.component';


@NgModule({
    declarations: [
        NoctuaContentComponent,
        AboutComponent,
        GeneComponent,
        SpeciesComponent,
        GenesComponent,
        Replace,
        SpeciesHorizontalViewerComponent,
        SpeciesGraphViewerComponent,
        SpeciesDetailComponent,
        ContactUsComponent,
        PrivaryPolicyComponent,
        DisclaimerComponent,
        ReleaseInfoComponent,
        DownloadsComponent
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
        NgxTreeModule,
        PgTreeModule,
        NgxChartsModule,
        NgxGraphModule,
        TreeviewModule.forRoot(),
    ],
    exports: [
        //PagesModule,
        NoctuaContentComponent
    ]
})
export class NoctuaContentModule {
}
