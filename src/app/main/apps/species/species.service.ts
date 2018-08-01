import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

import 'rxjs/add/operator/map';

import { Species } from './models/species';

@Injectable({
    providedIn: 'root',
})
export class SpeciesService {
    species: Species[];
    onSpeciesListChanged: BehaviorSubject<any>;
    onSpeciesDetailChanged: BehaviorSubject<any>;

    constructor(private httpClient: HttpClient) {
        this.onSpeciesListChanged = new BehaviorSubject({});
        this.onSpeciesDetailChanged = new BehaviorSubject({});
    }

    getSpeciesList(): Promise<Species[]> {
        const url = `${environment.apiUrl}/genelist/species-list/`;

        return new Promise<Species[]>((resolve, reject) => {
            this.httpClient.get<Species[]>(url)
                .map(res => res['lists'])
                .subscribe((response: Species[]) => {
                    this.species = response;
                    //this.proxy_genes = response.proxy_genes;
                    this.onSpeciesListChanged.next(this.species);
                    resolve(response);
                }, reject);
        });
    }

    getSpeciesDetail(species): Promise<Species> {

        const url = `${environment.apiUrl}/genelist/species-info/${species}`;

        return new Promise<Species>((resolve, reject) => {
            this.httpClient.get<Species>(url)
                .map(res => res['lists'])
                .subscribe((response: any) => {
                    // this.speciesDetail = response;
                    // this.onSpeciesDetailChanged.next(this.species);
                    resolve(response);
                }, reject);
        });
    }
}
