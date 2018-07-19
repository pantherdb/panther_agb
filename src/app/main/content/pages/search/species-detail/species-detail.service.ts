import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

import 'rxjs/add/operator/map';

import { Species } from './species';

@Injectable({
    providedIn: 'root',
})
export class SpeciesService {
    SpeciesDetail: Species;
    //proxy_genes: any[];
    //onSpeciesChanged: BehaviorSubject<any>;

    constructor(private httpClient: HttpClient) {
        //this.onSpeciesChanged = new BehaviorSubject({});
    }


    getSpecies(species): Promise<Species> {

        const url = `${environment.apiUrl}/genelist/species-info/${species}`;

        return new Promise<Species>((resolve, reject) => {
            this.httpClient.get<Species>(url)
                .map(res => res['lists'])
                .subscribe((response: any) => {
                    this.SpeciesDetail = response;
                    //this.proxy_genes = response.proxy_genes;
                    //this.onSpeciesChanged.next(this.ancestral_genes);
                    resolve(response);
                }, reject);
        });
    }
}
