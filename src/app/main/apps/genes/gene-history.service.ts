import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import 'rxjs/add/operator/map';

import { SpeciesGeneList } from './models/species-gene-list';

@Injectable({
    providedIn: 'root',
})
export class GenesHistoryService {
    genesDirectInherited:SpeciesGeneList[];
    genesLoss: SpeciesGeneList[];
    genesDenovo: SpeciesGeneList[];
    genesGainbyHT: SpeciesGeneList[];
    genesInheritedByDup: SpeciesGeneList[];
    
    genesInheritedCount: number;
    genesDirectInheritedCount: number;
    genesLossCount: number;
    genesDenovoCount: number;
    genesGainbyHTCount: number;
    genesInheritedByDupCount: number;
    
    onSpeciesChanged: BehaviorSubject<any>;

    constructor(
        private httpClient: HttpClient,
    ) {
        this.onSpeciesChanged = new BehaviorSubject({});
    }

    getDirectInheritedGenes(pspecies, cspecies, page?: number, limit: number = 20): Promise<SpeciesGeneList[]> {
        pspecies.replace("/", "%2F");
        cspecies.replace("/", "%2F");
        const url = page ?
            `${environment.apiUrl}/genelist/direct-inherited/${pspecies}/${cspecies}/?page=${page}&limit=${limit}` :
            `${environment.apiUrl}/genelist/direct-inherited/${pspecies}/${cspecies}`;

        return new Promise<SpeciesGeneList[]>((resolve, reject) => {
            this.httpClient.get<SpeciesGeneList[]>(url)
                .subscribe((response: any) => {
                    //console.log(response);
                    this.genesDirectInherited = response['lists'];
                    this.genesDirectInheritedCount = this.genesDirectInherited.length;
                    this.onSpeciesChanged.next(this.genesDirectInherited);
                    resolve(response);
                }, reject);
        });
    }

    getLossGenes(cspecies, page?: number, limit: number = 20): Promise<SpeciesGeneList[]> {
        //pspecies.replace("/", "%2F");
        cspecies.replace("/", "%2F");
        const url = page ?
            `${environment.apiUrl}/genelist/loss/${cspecies}/?page=${page}&limit=${limit}` :
            `${environment.apiUrl}/genelist/loss/${cspecies}`;

        return new Promise<SpeciesGeneList[]>((resolve, reject) => {
            this.httpClient.get<SpeciesGeneList[]>(url)
                .subscribe((response: any) => {
                    //console.log(response);
                    this.genesLoss = response['lists'];
                    this.genesLossCount = this.genesLoss.length;
                    this.onSpeciesChanged.next(this.genesLoss);
                    resolve(response);
                }, reject);
        });
    }

    getDuplicatedGenes(pspecies, cspecies, page?: number, limit: number = 20): Promise<SpeciesGeneList[]> {
        pspecies.replace("/", "%2F");
        cspecies.replace("/", "%2F");
        const url = page ?
            `${environment.apiUrl}/genelist/duplication-inherited/${pspecies}/${cspecies}/?page=${page}&limit=${limit}` :
            `${environment.apiUrl}/genelist/duplication-inherited/${pspecies}/${cspecies}`;

        return new Promise<SpeciesGeneList[]>((resolve, reject) => {
            this.httpClient.get<SpeciesGeneList[]>(url)
                .subscribe((response: any) => {
                    //console.log(response);
                    this.genesInheritedByDup = response['lists'];
                    this.genesInheritedByDupCount = this.genesInheritedByDup.length;
                    this.onSpeciesChanged.next(this.genesInheritedByDup);
                    resolve(response);
                }, reject);
        });
    }

    getHorizTransGenes(cspecies, page?: number, limit: number = 20): Promise<SpeciesGeneList[]> {
        //pspecies.replace("/", "%2F");
        cspecies.replace("/", "%2F");
        const url = page ?
            `${environment.apiUrl}/genelist/horizontal-transfer/${cspecies}/?page=${page}&limit=${limit}` :
            `${environment.apiUrl}/genelist/horizontal-transfer/${cspecies}`;

        return new Promise<SpeciesGeneList[]>((resolve, reject) => {
            this.httpClient.get<SpeciesGeneList[]>(url)
                .subscribe((response: any) => {
                    //console.log(response);
                    this.genesGainbyHT = response['lists'];
                    this.genesGainbyHTCount = this.genesGainbyHT.length;
                    this.onSpeciesChanged.next(this.genesGainbyHT);
                    resolve(response);
                }, reject);
        });
    }

    getDenovoGenes(cspecies, page?: number, limit: number = 20): Promise<SpeciesGeneList[]> {
        //pspecies.replace("/", "%2F");
        cspecies.replace("/", "%2F");
        const url = page ?
            `${environment.apiUrl}/genelist/denovo/${cspecies}/?page=${page}&limit=${limit}` :
            `${environment.apiUrl}/genelist/denovo/${cspecies}`;

        return new Promise<SpeciesGeneList[]>((resolve, reject) => {
            this.httpClient.get<SpeciesGeneList[]>(url)
                .subscribe((response: any) => {
                    //console.log(response);
                    this.genesDenovo = response['lists'];
                    this.genesDenovoCount = this.genesDenovo.length;
                    this.onSpeciesChanged.next(this.genesDenovo);
                    resolve(response);
                }, reject);
        });
    }
}
