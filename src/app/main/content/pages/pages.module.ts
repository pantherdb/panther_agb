import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NoctuaSharedModule } from '@noctua/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AboutComponent } from './about/about.component';


const routes = [{
  path: '',
  loadChildren: './search/search.module#SearchModule'
},{
  path: 'about', component: AboutComponent
},];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    TranslateModule,
    NoctuaSharedModule,
    NgxDatatableModule,
  ],
  declarations: [AboutComponent]
})

export class PagesModule {
}
