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
import { GeneTreeComponent, SafePipe } from './gene-tree/gene-tree.component';
import { GenomeComparison2Component } from './genome-comparison2/genome-comparison2.component';
import { DirectInheritedGenesTableComponent } from './genome-comparison2/direct-inherited-genes-table/direct-inherited-genes-table.component';
import { LossGenesTableComponent } from './genome-comparison2/loss-genes-table/loss-genes-table.component';
import { DuplicatedGenesTableComponent } from './genome-comparison2/duplicated-genes-table/duplicated-genes-table.component';
import { HorizTransferedGenesTableComponent } from './genome-comparison2/horiz-transfered-genes-table/horiz-transfered-genes-table.component';
import { DenovoGenesTableComponent } from './genome-comparison2/denovo-genes-table/denovo-genes-table.component';

const routes = [{
  path: ':species/:proxySpecies', component: GeneListComponent
}, {
  path: ':ptn', component: GeneDetailComponent
}, {
  path: 'genome-comparison/:extant/:ancestral', component: GenomesComparisonComponent
}, {
  path: 'genome-history/:parent/:child', component: GenomeComparison2Component
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
    GeneTreeComponent,
    SafePipe,
    GenomeComparison2Component,
    DirectInheritedGenesTableComponent,
    LossGenesTableComponent,
    DuplicatedGenesTableComponent,
    HorizTransferedGenesTableComponent,
    DenovoGenesTableComponent
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
