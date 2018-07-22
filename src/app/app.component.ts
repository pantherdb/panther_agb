import { Component, ElementRef, HostBinding, Inject, OnDestroy, Renderer2, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { Subscription } from 'rxjs';

import { NoctuaConfigService } from '@noctua/services/config.service';
import { TranslateService } from '@ngx-translate/core';
import { NoctuaSplashScreenService } from '@noctua/services/splash-screen.service';
import { NoctuaTranslationLoaderService } from '@noctua/services/translation-loader.service';


@Component({
    selector: 'noctua-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnDestroy {
    onConfigChanged: Subscription;
    noctuaSettings: any;
    navigation: any;

    constructor(
        private translate: TranslateService,
        private noctuaSplashScreen: NoctuaSplashScreenService,
        private noctuaTranslationLoader: NoctuaTranslationLoaderService,
        private _renderer: Renderer2,
        private _elementRef: ElementRef,
        private noctuaConfig: NoctuaConfigService,
        private platform: Platform,
        @Inject(DOCUMENT) private document: any
    ) {
        this.translate.addLangs(['en', 'tr']);
        this.translate.setDefaultLang('en');
        this.noctuaTranslationLoader.loadTranslations();
        this.translate.use('en');
        this.onConfigChanged =
            this.noctuaConfig.onConfigChanged
                .subscribe(
                    (newSettings) => {
                        this.noctuaSettings = newSettings;
                    }
                );

        if (this.platform.ANDROID || this.platform.IOS) {
            this.document.body.className += ' is-mobile';
        }
    }

    ngOnDestroy() {
        this.onConfigChanged.unsubscribe();
    }

    addClass(className: string) {
        this._renderer.addClass(this._elementRef.nativeElement, className);
    }

    removeClass(className: string) {
        this._renderer.removeClass(this._elementRef.nativeElement, className);
    }
}
