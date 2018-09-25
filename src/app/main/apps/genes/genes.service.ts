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
        //const url2 = `${environment.apiUrl}/genelist/species/${proxySpecies}/default species`;

        return new Promise<SpeciesGeneList[]>((resolve, reject) => {
            this.httpClient.get<SpeciesGeneList[]>(url)
                //.map(res => res['lists'])
                .subscribe((response: any) => {
                    this.ancestral_genes = response['lists'];
                    this.pass_genes = this.ancestral_genes.filter(gene=>gene.proxy_gene != 'NOT_AVAILABLE');
                    this.lost_genes = this.ancestral_genes.filter(gene=>gene.proxy_gene == 'NOT_AVAILABLE');
                    //console.log(this.ancestral_genes);
                    this.totalGenes = response['total'];
                    //this.proxy_genes = response.proxy_genes;
                    /* this.httpClient2.get<SpeciesGeneList[]>(url2)
                    .subscribe((response: any) => {
                        console.log(response);
                        this.total_extant_genes = response['lists'];
                        console.log(this.total_extant_genes);
                        this.gained_genes = this.total_extant_genes.filter(gene=>{
                            var anc_prox_ptns = this.ancestral_genes.map(x => x.proxy_gene_ptn);
                            return (!(anc_prox_ptns.includes(gene.ptn))) && (gene.pthr != 'NOT_AVAILABLE');
                        } );
                        console.log(this.gained_genes);
                    }); */

                    this.onSpeciesChanged.next(this.ancestral_genes);
                    resolve(response);
                }, reject);
        });
    }

    /* getAncGenesInheritedByExSpes(Anspecies, ExtSpecies, page?: number, limit: number = 20): Promise<SpeciesGeneList[]> {
        const url = page ?
            `${environment.apiUrl}/genelist/species/${Anspecies}/${ExtSpecies}/?page=${page}&limit=${limit}` :
            `${environment.apiUrl}/genelist/species/${Anspecies}/${ExtSpecies}`;

        return new Promise<SpeciesGeneList[]>((resolve, reject) => {
            this.httpClient.get<SpeciesGeneList[]>(url)
                //.map(res => res['lists'])
                .subscribe((response: any) => {
                    this.ancestral_genes = response['lists'];
                    this.totalGenes = response['total'];
                    //this.proxy_genes = response.proxy_genes;
                    this.onSpeciesChanged.next(this.ancestral_genes);
                    resolve(response);
                }, reject);
        });
    } */

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
