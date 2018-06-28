import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

import 'rxjs/add/operator/map'
import { Gene } from './models/gene';

@Injectable({
    providedIn: 'root',
})
export class GeneService {
    genes: any[];
    onSpeciesChanged: BehaviorSubject<any>;

    constructor(private httpClient: HttpClient) {
        this.onSpeciesChanged = new BehaviorSubject({});
    }


    getGeneByPtn(gene): Promise<Gene> {
        const url = `${environment.apiUrl}/genelist/gene/${gene}`;

        return new Promise<Gene>((resolve, reject) => {
            this.httpClient.get<Gene>(url)
                .map(res => res['lists'])
                .subscribe((response: any) => {
                    this.genes = response[0].genes;
                    this.onSpeciesChanged.next(this.genes);
                    resolve(response);
                }, reject);
        });
    }
}
