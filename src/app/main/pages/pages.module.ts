import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NoctuaSharedModule } from '@noctua/shared.module';

import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { ReleaseInfoComponent } from './release-info/release-info.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { HomeComponent } from './home/home.component';

const routes = [{
  path: '', component: HomeComponent
}, {
  path: 'about', component: AboutComponent
}, {
  path: 'contact-us', component: ContactUsComponent
}, {
  path: 'privacy-policy', component: PrivacyPolicyComponent
}, {
  path: 'disclaimer', component: DisclaimerComponent
}, {
  path: 'release-info', component: ReleaseInfoComponent
}, {
  path: 'downloads', component: DownloadsComponent
}];

@NgModule({
  declarations: [
    AboutComponent,
    ContactUsComponent,
    PrivacyPolicyComponent,
    DisclaimerComponent,
    ReleaseInfoComponent,
    DownloadsComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    TranslateModule,
    NoctuaSharedModule
  ]
})

export class PagesModule {
}
