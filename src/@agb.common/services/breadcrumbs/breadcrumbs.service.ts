import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


@Injectable({
    providedIn: 'root',
})

export class BreadcrumbsService {
    private _onBreadcrumbsChanged: BehaviorSubject<any>;
    private _currentBreadcrumbs: string;

    constructor() {
        this._currentBreadcrumbs = null;
        this._onBreadcrumbsChanged = new BehaviorSubject(null);
    }

    get onBreadcrumbsChanged(): Observable<any> {
        return this._onBreadcrumbsChanged.asObservable();
    }

    getCurrentBreadcrumbs(): any {
        return this._currentBreadcrumbs;
    }

    setCurrentBreadcrumbs(key): void {
        this._currentBreadcrumbs = key;
        this._onBreadcrumbsChanged.next(key);
    }

}
