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
    genesDirectInherited:SpeciesGeneList[];
    genesLoss: SpeciesGeneList[];
    genesDenovo: SpeciesGeneList[];
    genesGainbyHT: SpeciesGeneList[];
    genesInheritedByDup: SpeciesGeneList[];
    totalDescPtns: String[];
    totalGenes: any;

    totalGenesCount: number;
    gainedGenesCount: number
    genesInheritedCount: number;
    genesDirectInheritedCount: number;
    genesLossCount: number;
    genesDenovoCount: number;
    genesGainbyHTCount: number;
    genesInheritedByDupCount: number;
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
            `${environment.apiUrl}/genelist/loss/$${cspecies}`;

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
}
