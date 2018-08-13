import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';




import 'rxjs/add/operator/map';

import * as _ from 'lodash';

import { Species, SpeciesNode, SpeciesFlatNode } from './models/species'

@Injectable({
    providedIn: 'root',
})
export class SpeciesService {
    timescaleLegend: any = [
        {
            color: 'blue',
            min: 0,
            max: 10,
            label: '1 - 10'
        }, {
            color: 'orange',
            min: 10,
            max: 1000,
            label: '10 - 1000'
        }, {
            color: 'purple',
            min: 1000,
            max: 2000,
            label: '1000 - 2000'
        }, {
            color: '#e91e63',
            min: 2000,
            max: 3500,
            label: '2000 - 3500'
        }, {
            color: 'red',
            min: 3500,
            max: 10000,
            label: '3500+'
        }
    ];
    species: Species[];
    speciesNodes: SpeciesNode[];
    speciesDetail: any;
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
                    this.species = response;
                    this._addSpeciesColor(this.species);
                    this.speciesNodes = this._buildSpeciesTree(this.species);
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
                    this.speciesDetail = response[0];
                    // this.onSpeciesDetailChanged.next(this.species);
                    resolve(response);
                }, reject);
        });
    }

    private _buildTimescaleColor(timescale?: number): string {
        let bucket = 0;
        timescale = Number(timescale);

        if (isNaN(timescale)) {
            return this.timescaleLegend[bucket];
        }

        for (let i = 0; i < this.timescaleLegend.length; i++) {
            if (timescale < this.timescaleLegend[i].max) {
                bucket = i;
                break;
            }
        }
        return this.timescaleLegend[bucket];
    }

    private _addSpeciesColor(species: Species[]) {
        const self = this;
        _.each(species, function (speciesNode) {
            speciesNode.timescaleColor = self._buildTimescaleColor(speciesNode.timescale);
        });
    }

    private _buildSpeciesTree(species: Species[]): SpeciesNode[] {
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


    private _addHeirarchyLevel(speciesNodes: Species[]) {
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
