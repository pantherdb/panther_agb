import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BreadcrumbsService } from '@agb.common/services/breadcrumbs/breadcrumbs.service';

import { NoctuaConfigService } from '@noctua/services/config.service';

import { filter, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'noctua-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})

export class NoctuaToolbarComponent {
    languages: any;
    selectedLanguage: any;
    showLoadingBar: boolean;
    navigation: any;
    breadcrumbs: any;

    constructor(
        private router: Router,
        private noctuaConfig: NoctuaConfigService,
        private translate: TranslateService,
        private breadcrumbsService: BreadcrumbsService
    ) {
        this.languages = [{
            'id': 'en',
            'title': 'English',
            'flag': 'us'
        }];

        this.selectedLanguage = this.languages[0];

        router.events.subscribe(
            (event) => {
                if (event instanceof NavigationStart) {
                    this.showLoadingBar = true;
                }
                if (event instanceof NavigationEnd) {
                    this.showLoadingBar = false;
                }
            });

        this.breadcrumbsService.onBreadcrumbsChanged
            .pipe(filter(value => value !== null))
            .subscribe(() => {
                this.breadcrumbs = this.breadcrumbsService.getCurrentBreadcrumbs();
                console.log(this.breadcrumbs, 'oooo')
            });
    }

    setLanguage(lang) {
        this.selectedLanguage = lang;
        this.translate.use(lang.id);
    }
}
