import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

import 'rxjs/add/operator/map';

import { SpeciesGeneList } from './models/species-gene-list';

@Injectable({
    providedIn: 'root',
})
export class GenesService {
    ancestral_genes: SpeciesGeneList[];
    //proxy_genes: any[];
    onSpeciesChanged: BehaviorSubject<any>;

    constructor(private httpClient: HttpClient) {
        this.onSpeciesChanged = new BehaviorSubject({});
    }


    getGenesBySpecies(species): Promise<SpeciesGeneList[]> {

        const url = `${environment.apiUrl}/genelist/species/${species}`;

        return new Promise<SpeciesGeneList[]>((resolve, reject) => {
            this.httpClient.get<SpeciesGeneList[]>(url)
                .map(res => res['lists'])
                .subscribe((response: any) => {
                    this.ancestral_genes = response;
                    //this.proxy_genes = response.proxy_genes;
                    this.onSpeciesChanged.next(this.ancestral_genes);
                    resolve(response);
                }, reject);
        });
    }
}
