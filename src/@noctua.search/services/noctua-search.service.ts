import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { map, filter, reduce, catchError, retry, tap } from 'rxjs/operators';

import { NoctuaUtils } from '@noctua/utils/noctua-utils';

@Injectable({
    providedIn: 'root'
})
export class NoctuaSearchService {
    curieUtil: any;
    cams: any[] = [];
    onCamsChanged: BehaviorSubject<any>;

    constructor(private httpClient: HttpClient) {
        this.onCamsChanged = new BehaviorSubject({});

    }

    search(searchCriteria) {
        if (searchCriteria.species) {

        }
    }
}
