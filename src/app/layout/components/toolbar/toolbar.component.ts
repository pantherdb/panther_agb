import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';

import { NoctuaConfigService } from '@noctua/services/config.service';
import { BreadcrumbsService } from '@agb.common/services/breadcrumbs/breadcrumbs.service';


@Component({
    selector: 'noctua-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})

export class NoctuaToolbarComponent implements OnInit, OnDestroy {
    breadcrumbs: any;
    selectedLanguage: any;
    showLoadingBar: boolean;

    private _unsubscribeAll: Subject<any>;

    constructor(
        private _noctuaConfigService: NoctuaConfigService,
        private _breadcrumbsService: BreadcrumbsService,
        private _router: Router,
        private _translateService: TranslateService
    ) {
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        this._router.events
            .pipe(
                filter((event) => event instanceof NavigationStart),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe((event) => {
                this.showLoadingBar = true;
            });

        this._router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd)
            )
            .subscribe((event) => {
                this.showLoadingBar = false;
            });

        this._breadcrumbsService.onBreadcrumbsChanged
            .pipe(filter(value => value !== null))
            .subscribe(() => {
                this.breadcrumbs = this._breadcrumbsService.getCurrentBreadcrumbs();
            });
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    search(value): void {
        console.log(value);
    }
}
