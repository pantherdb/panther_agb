import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NoctuaSharedModule } from '@noctua/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


const routes = [{
  path: '',
  loadChildren: './search/search.module#SearchModule'
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    TranslateModule,
    NoctuaSharedModule,
    NgxDatatableModule,
  ]
})

export class PagesModule {
}
