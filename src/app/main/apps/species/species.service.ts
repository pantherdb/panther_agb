import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';




import 'rxjs/add/operator/map';

import * as _ from 'lodash';

import { Species, SpeciesNode, SpeciesFlatNode } from './models/species'

@Injectable({
    providedIn: 'root',
})
export class SpeciesService {
    species: Species[];
    speciesNodes: SpeciesNode[];
    onSpeciesListChanged: BehaviorSubject<any>;
    onSpeciesDetailChanged: BehaviorSubject<any>;

    constructor(private httpClient: HttpClient) {
        this.onSpeciesListChanged = new BehaviorSubject({});
        this.onSpeciesDetailChanged = new BehaviorSubject({});
    }

    getSpeciesList(): Promise<SpeciesNode[]> {
        const url = `${environment.apiUrl}/genelist/species-list/`;

        return new Promise<SpeciesNode[]>((resolve, reject) => {
            this.httpClient.get<Species[]>(url)
                .map(res => res['lists'])
                .subscribe((response: Species[]) => {
                    this.speciesNodes = this._buildSpeciesTree(response);
                    // this.species = response;
                    this.onSpeciesListChanged.next(this.speciesNodes);
                    resolve(this.speciesNodes);
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



    _buildSpeciesTree(species: Species[]): SpeciesNode[] {
        let getNestedChildren = (arr, parent_id, level) => {
            let out = []
            for (let i in arr) {
                if (arr[i].parent_id == parent_id) {
                    let children = getNestedChildren(arr, arr[i].id, level++)

                    if (children.length) {
                        arr[i].children = children
                    }
                    out.push(arr[i])
                }
            }
            return out
        }

        return getNestedChildren(species, '', 1);
    }


    _addHeirarchyLevel(speciesNodes: Species[]) {
        _.each(speciesNodes, function (speciesNode) {
            let level = 0;
            let parent = speciesNode;
            while (parent) {
                parent = _.find(speciesNodes, { id: parent.parent_id });
                level++;
            }
            // speciesNode.level = level;
        });
    }

}
