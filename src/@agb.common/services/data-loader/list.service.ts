import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { List, SpeciesGeneList } from '../models/List'

import 'rxjs/add/operator/map';


@Injectable({
    providedIn: 'root',
})

export class ListService {

    constructor(private http: HttpClient) { }

    private serverApi = 'http://68.181.125.145:3000';

    /* public getListsBySpecies(species):Observable<List[]> {

        let URI = `${this.serverApi}/genelist/species/${species}`;
        //let URI = 'http://localhost:3000/genelist/species/Eukaryota';
        //console.log(this.http.get(URI));
        return this.http.get(URI)
            .map(res => res.json())
            .map(res => <List[]>res.lists);
    } */

    public getListsBySpecies(species): Observable<SpeciesGeneList[]> {

        let URI = `${this.serverApi}/genelist/species/${species}`;
        return this.http.get<SpeciesGeneList[]>(URI)
            .map(res => res['lists']);

    }

    public getAllSpecies() {

        let URI = `${this.serverApi}/genelist/species`;
        //let URI = 'http://localhost:3000/genelist/species';
        //console.log(this.http.get(URI));
        /* console.log(this.http.get(URI)
        .map(res => res.json())
        .map(res => res.lists)); */
        return this.http.get(URI);
        // .map(res => res.json())
        // .map(res => res.lists);
    }

    public getGeneByPtn(gene): Observable<List[]> {

        let URI = `${this.serverApi}/genelist/gene/${gene}`;
        return this.http.get<List[]>(URI);
        // .map(res => res.json())
        // .map(res => <List[]>res.lists);
    }

    public getAllGenes() {

        let URI = `${this.serverApi}/genelist`;
        //let URI = 'http://localhost:3000/genelist/species';
        //console.log(this.http.get(URI));
        /* console.log(this.http.get(URI)
        .map(res => res.json())
        .map(res => res.lists)); */
        return this.http.get(URI)
        //.map(res => res.json())
        //  .map(res => <List[]>res.lists);
    }
}