import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import 'rxjs/add/operator/map';

import { SpeciesGeneList } from './models/species-gene-list';

@Injectable({
    providedIn: 'root',
})
export class GenesService {
    ancestral_genes: SpeciesGeneList[];
    pass_genes: SpeciesGeneList[];
    lost_genes: SpeciesGeneList[];
    total_extant_genes: SpeciesGeneList[];
    gained_genes: SpeciesGeneList[];
    totalGenes: any;
    gained_totalGenes: any;
    proxy_species: any[];
    //proxy_genes: any[];
    onSpeciesChanged: BehaviorSubject<any>;

    constructor(
        private httpClient: HttpClient,
        //private httpClient2: HttpClient
        ) {
        this.onSpeciesChanged = new BehaviorSubject({});
    }


    getGenesBySpecies(species, proxySpecies, page?: number, limit: number = 20): Promise<SpeciesGeneList[]> {
        const url = page ?
            `${environment.apiUrl}/genelist/species/${species}/${proxySpecies}/?page=${page}&limit=${limit}` :
            `${environment.apiUrl}/genelist/species/${species}/${proxySpecies}`;
        const url2 = `${environment.apiUrl}/genelist/species/${proxySpecies}/default species`;

        return new Promise<SpeciesGeneList[]>((resolve, reject) => {
            this.httpClient.get<SpeciesGeneList[]>(url)
                //.map(res => res['lists'])
                .subscribe((response: any) => {
                    this.ancestral_genes = response['lists'];
                    this.pass_genes = this.ancestral_genes.filter(gene=>gene.proxy_gene != 'NOT_AVAILABLE');
                    this.lost_genes = this.ancestral_genes.filter(gene=>gene.proxy_gene == 'NOT_AVAILABLE');
                    this.totalGenes = response['total'];

                    this.onSpeciesChanged.next(this.ancestral_genes);
                    resolve(response);
                }, reject);
        });
    }

    getGeneGains(ext_species, anc_species, page?: number, limit: number = 20): Promise<SpeciesGeneList[]> {
        const url = page ?
            `${environment.apiUrl}/genelist/gene-gain/${ext_species}/${anc_species}/?page=${page}&limit=${limit}` :
            `${environment.apiUrl}/genelist/gene-gain/${ext_species}/${anc_species}`;

        return new Promise<SpeciesGeneList[]>((resolve, reject) => {
            this.httpClient.get<SpeciesGeneList[]>(url)
                .subscribe((response: any) => {
                    //console.log(response);
                    this.gained_genes = response['lists'];
                    this.onSpeciesChanged.next(this.gained_genes);
                    resolve(response);
                }, reject);
        });
    }

    getProxySpecies(species): Promise<any[]> {

        const url = `${environment.apiUrl}/genelist/proxy_species/${species}`;

        return new Promise<any[]>((resolve, reject) => {
            this.httpClient.get<any[]>(url)
                .map(res => res['lists'])
                .subscribe((response: any) => {
                    this.proxy_species = response;
                    //this.proxy_species.push('default');
                    //console.log(this.proxy_species);
                    //this.proxy_genes = response.proxy_genes;
                    //this.onSpeciesChanged.next(this.ancestral_genes);
                    resolve(response);
                }, reject);
        });
    }
}
