import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NoctuaSharedModule } from '@noctua/shared.module';

import { GeneListComponent } from './gene-list/gene-list.component';
import { GeneDetailComponent } from './gene-detail/gene-detail.component';

const routes = [{
  path: ':species/:proxySpecies', component: GeneListComponent
}, {
  path: ':ptn', component: GeneDetailComponent
}];

@NgModule({
  declarations: [
    GeneListComponent,
    GeneDetailComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    TranslateModule,
    NoctuaSharedModule
  ]
})

export class GenesModule {
}
