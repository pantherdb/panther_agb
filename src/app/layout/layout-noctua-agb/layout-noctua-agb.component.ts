import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NoctuaConfigService } from '@noctua/services/config.service';

@Component({
    selector: 'layout-noctua-agb',
    templateUrl: './layout-noctua-agb.component.html',
    styleUrls: ['./layout-noctua-agb.component.scss'],
    encapsulation: ViewEncapsulation.None
}

) export class LayoutNoctuaAgbComponent implements OnInit, OnDestroy {
    noctuaConfig: any;
    navigation: any;
    private _unsubscribeAll: Subject<any>;

    constructor(private _noctuaConfigService: NoctuaConfigService) {
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        this._noctuaConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.noctuaConfig = config;
            });
    }
    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}