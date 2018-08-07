import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NoctuaSharedModule } from '@noctua/shared.module';

//import 
import { GeneListComponent } from './gene-list/gene-list.component';
import { GeneDetailComponent } from './gene-detail/gene-detail.component';
import { GeneDetailDialogComponent } from './gene-detail/dialogs/gene-detail-dialog/gene-detail.component';

import { GenesDialogService } from './dialog.service';
const routes = [{
  path: ':id', component: GeneListComponent
}, {
  path: ':ptn', component: GeneDetailComponent
}];

@NgModule({
  declarations: [
    GeneListComponent,
    GeneDetailComponent,
    GeneDetailDialogComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    TranslateModule,
    NoctuaSharedModule,
  ],
  providers: [GenesDialogService],
  entryComponents: [
    GeneDetailDialogComponent
  ]
})

export class GenesModule {
}
