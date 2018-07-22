import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { NoctuaModule } from '@noctua/noctua.module';
import { NoctuaSharedModule } from '@noctua/shared.module';
import { noctuaConfig } from './noctua-config';
import { AppComponent } from './app.component';
import { NoctuaMainModule } from './main/main.module';
//import { PagesModule } from './main/content/pages/pages.module';

const appRoutes: Routes = [
    {
        path: '**',
        redirectTo: 'search'
    }
];

@NgModule({
    declarations: [
        AppComponent
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
        NoctuaMainModule,
        //PagesModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
