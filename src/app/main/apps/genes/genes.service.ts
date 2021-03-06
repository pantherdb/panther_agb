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
    ancestralGenes: SpeciesGeneList[];
    genesInherited: SpeciesGeneList[];
    descGenePtns: String[];
    genesLost: SpeciesGeneList[];
    genesGained: SpeciesGeneList[];
    genesNotReconstructed: SpeciesGeneList[];
    totalDescPtns: String[];
    totalGenes: any;

    totalGenesCount: number;
    gainedGenesCount: number
    genesInheritedCount: number;
    lostGenesCount: number;
    notModeledGenesCount: number;
    totalDescGenesCount: number;

    proxy_species: any[];
    onSpeciesChanged: BehaviorSubject<any>;

    constructor(
        private httpClient: HttpClient,
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
                .subscribe((response: any) => {
                    this.ancestralGenes = response['lists'];
                    //this.genesInherited = this.ancestral_genes.filter(gene=>gene.proxy_gene != 'NOT_AVAILABLE');
                    //this.genesLost = this.ancestral_genes.filter(gene=>gene.proxy_gene == 'NOT_AVAILABLE');
                    this.totalGenes = response['total'];
                    this.totalGenesCount = this.totalGenes.length;

                    this.onSpeciesChanged.next(this.ancestralGenes);
                    resolve(response);
                }, reject);
        });
    }

    getGeneGains(ext_species, anc_species, page?: number, limit: number = 20): Promise<SpeciesGeneList[]> {
        const url = page ?
            `${environment.apiUrl}/genelist/gene-gain/${anc_species}/${ext_species}/?page=${page}&limit=${limit}` :
            `${environment.apiUrl}/genelist/gene-gain/${anc_species}/${ext_species}`;

        return new Promise<SpeciesGeneList[]>((resolve, reject) => {
            this.httpClient.get<SpeciesGeneList[]>(url)
                .subscribe((response: any) => {
                    //console.log(response);
                    this.genesGained = response['lists'];
                    this.gainedGenesCount = this.genesGained.length;
                    this.onSpeciesChanged.next(this.genesGained);
                    resolve(response);
                }, reject);
        });
    }

    getGeneLoss(anc_species, ext_species, page?: number, limit: number = 20): Promise<SpeciesGeneList[]> {
        const url = page ?
            `${environment.apiUrl}/genelist/gene-loss/${anc_species}/${ext_species}/?page=${page}&limit=${limit}` :
            `${environment.apiUrl}/genelist/gene-loss/${anc_species}/${ext_species}`;

        return new Promise<SpeciesGeneList[]>((resolve, reject) => {
            this.httpClient.get<SpeciesGeneList[]>(url)
                .subscribe((response: any) => {
                    //console.log(response);
                    this.genesLost = response['lists'];
                    this.lostGenesCount = this.genesLost.length;
                    this.onSpeciesChanged.next(this.genesLost);
                    resolve(response);
                }, reject);
        });
    }

    getGenePassed(anc_species, ext_species, page?: number, limit: number = 20): Promise<SpeciesGeneList[]> {
        const url = page ?
            `${environment.apiUrl}/genelist/gene-pass/${anc_species}/${ext_species}/?page=${page}&limit=${limit}` :
            `${environment.apiUrl}/genelist/gene-pass/${anc_species}/${ext_species}`;

        return new Promise<SpeciesGeneList[]>((resolve, reject) => {
            this.httpClient.get<SpeciesGeneList[]>(url)
                .subscribe((response: any) => {
                    //console.log(response);
                    this.genesInherited = response['lists'];
                    this.genesInheritedCount = this.genesInherited.length;
                    //this.totalDescGenesCount = this.genesInherited.map(gene=>gene['all_desendant_gene_ptn_in_proxy_species'].split(',')).flat().length;
                    this.totalDescGenesCount = this.genesInherited.map(gene=>gene['descent_ptns'].split(',')).reduce((acc, val) => acc.concat(val)).length;
                    //this.descGenePtns = this.genesInherited.map(gene=>gene['all_desendant_gene_ptn_in_proxy_species'].replace(/\,/g,'<br>'));
                    this.genesInherited.forEach((gene, idx, arr)=>{
                        arr[idx]['descent_ptns'] = gene['descent_ptns'].replace(/\,/g,'<br>');
                        arr[idx]['descent_gnames'] = gene['descent_gnames'].replace(/\,/g,'<br>');
                        arr[idx]['descent_longIds'] = gene['descent_longIds'].replace(/\,/g,'<br>');
                    });
                    //console.log(this.genesInherited);
                    //console.log(this.totalDescGenesCount);
                    this.onSpeciesChanged.next(this.genesLost);
                    resolve(response);
                }, reject);
        });
    }

    getGeneNotModeled(ext_species, page?: number, limit: number = 20): Promise<SpeciesGeneList[]> {
        const url = page ?
            `${environment.apiUrl}/genelist/gene-no-model/${ext_species}/?page=${page}&limit=${limit}` :
            `${environment.apiUrl}/genelist/gene-no-model/${ext_species}`;

        return new Promise<SpeciesGeneList[]>((resolve, reject) => {
            this.httpClient.get<SpeciesGeneList[]>(url)
                .subscribe((response: any) => {
                    //console.log(response);
                    this.genesNotReconstructed = response['lists'];
                    this.notModeledGenesCount = this.genesNotReconstructed.length;
                    this.onSpeciesChanged.next(this.genesLost);
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
                    resolve(response);
                }, reject);
        });
    }
}
