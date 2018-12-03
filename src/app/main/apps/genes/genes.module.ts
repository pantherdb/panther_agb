import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NoctuaSharedModule } from '@noctua/shared.module';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import 
import { GeneListComponent } from './gene-list/gene-list.component';
import { GeneDetailComponent } from './gene-detail/gene-detail.component';
import { GeneDetailDialogComponent } from './gene-detail/dialogs/gene-detail-dialog/gene-detail.component';

import { GenesDialogService } from './dialog.service';
import { SpeciesDialogService } from './../species/dialog.service';
import { GenomesComparisonComponent } from './genomes-comparison/genomes-comparison.component';
import { Replace } from './genomes-comparison/replace.pipe';
import { GeneLossTableComponent } from './genomes-comparison/genomes-comaprison-tables/gene-loss-table/gene-loss-table.component';
import { GeneGainedTableComponent } from './genomes-comparison/genomes-comaprison-tables/gene-gained-table/gene-gained-table.component';
import { GeneInheritedTableComponent } from './genomes-comparison/genomes-comaprison-tables/gene-inherited-table/gene-inherited-table.component';
import { GeneUnmodeledTableComponent } from './genomes-comparison/genomes-comaprison-tables/gene-unmodeled-table/gene-unmodeled-table.component';
import { GeneTreeComponent } from './gene-tree/gene-tree.component';

const routes = [{
  path: ':species/:proxySpecies', component: GeneListComponent
}, {
  path: ':ptn', component: GeneDetailComponent
}, {
  path: 'genome-comparison/:extant/:ancestral', component: GenomesComparisonComponent
}, {
  path: 'gene-tree/:pthr/:ptn', component: GeneTreeComponent
}];

@NgModule({
  declarations: [
    GeneListComponent,
    GeneDetailComponent,
    GeneDetailDialogComponent,
    GenomesComparisonComponent,
    Replace,
    GeneLossTableComponent,
    GeneGainedTableComponent,
    GeneInheritedTableComponent,
    GeneUnmodeledTableComponent,
    GeneTreeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    TranslateModule,
    NoctuaSharedModule,
    //BrowserAnimationsModule
  ],
  providers: [
    GenesDialogService,
    SpeciesDialogService
  ],
  entryComponents: [
    GeneDetailDialogComponent
  ]
})

export class GenesModule {
}
