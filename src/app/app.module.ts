import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';
import { MatSidenavModule } from '@angular/material';
import { NoctuaContentModule } from './content/content.module';
import { NoctuaToolbarModule } from './toolbar/toolbar.module';
import { NoctuaModule } from '@noctua/noctua.module';
import { NoctuaSharedModule } from '@noctua/shared.module';
import { noctuaConfig } from './noctua-config';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

import { GeneReplacePipe } from '@agb.common/pipes/gene-replace.pipe';

import { PagesModule } from './content/pages/pages.module';
import { AppsModule } from './content/apps/apps.module';

const appRoutes: Routes = [
    {
        path: '**',
        redirectTo: 'search'
    }
];

@NgModule({
    declarations: [
        GeneReplacePipe,
        AppComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        TranslateModule.forRoot(),

        // Noctua Main and Shared modules
        NoctuaModule.forRoot(noctuaConfig),
        NoctuaSharedModule,
        NoctuaContentModule,
        NoctuaToolbarModule,
        RouterModule,
        MatSidenavModule,

        //Noctua App
        PagesModule,
        AppsModule
    ],
    exports: [
        GeneReplacePipe
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
