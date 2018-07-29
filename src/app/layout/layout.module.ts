import { NgModule } from '@angular/core';

import { LayoutNoctuaAgbModule } from 'app/layout/layout-noctua-agb/layout-noctua-agb.module';


@NgModule({
    imports: [
        LayoutNoctuaAgbModule
    ],
    exports: [
        LayoutNoctuaAgbModule
    ]
})
export class LayoutModule {
}
