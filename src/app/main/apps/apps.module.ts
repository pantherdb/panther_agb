import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NoctuaSharedModule } from '@noctua/shared.module';

const routes = [{
  path: 'genes',
  loadChildren: './genes/genes.module#GenesModule'
}, {
  path: 'species',
  loadChildren: './species/species.module#SpeciesModule'
}];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild(routes),
    TranslateModule,
    NoctuaSharedModule,
  ]

})

export class AppsModule {
}
