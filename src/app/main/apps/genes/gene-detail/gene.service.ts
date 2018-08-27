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
    gene: any[];
    paint: any[];
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
                    this.gene = response[0];
                    this.onSpeciesChanged.next(this.gene);
                    resolve(response);
                }, reject);
        });
    }

    getPaintByPtn(gene): Promise<any> {
        const url = `${environment.apiUrl}/genelist/gene_go/${gene}`;

        return new Promise<any>((resolve, reject) => {
            this.httpClient.get<any>(url)
                .map(res => res['lists'])
                .subscribe((response: any) => {
                    this.paint = response[0];
                    this.onSpeciesChanged.next(this.gene);
                    resolve(response);
                }, reject);
        });
    }
}
