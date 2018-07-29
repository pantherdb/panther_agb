import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NoctuaSharedModule } from '@noctua/shared.module';

import { ContentModule } from 'app/layout/components/content/content.module';
import { NoctuaFooterModule } from 'app/layout/components/footer/footer.module';
import { QuickPanelModule } from 'app/layout/components/quick-panel/quick-panel.module';
import { NoctuaToolbarModule } from 'app/layout/components/toolbar/toolbar.module';

import { LayoutNoctuaAgbComponent } from 'app/layout/layout-noctua-agb/layout-noctua-agb.component';

@NgModule({
    declarations: [
        LayoutNoctuaAgbComponent
    ],
    imports: [
        RouterModule,
        NoctuaSharedModule,
        ContentModule,
        NoctuaFooterModule,
        QuickPanelModule,
        NoctuaToolbarModule
    ],
    exports: [
        LayoutNoctuaAgbComponent
    ]
})
export class LayoutNoctuaAgbModule {
}




