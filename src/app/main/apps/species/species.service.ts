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
    colors: string[] = [
        'red',
        'yellow',
        'blue',
        'purple',
        'green'
    ];
    timescaleLegend: any = [];
    species: Species[];
    speciesNodes: SpeciesNode[];
    speciesDetail: any;
    onSpeciesListChanged: BehaviorSubject<any>;
    onSpeciesDetailChanged: BehaviorSubject<any>;

    constructor(private httpClient: HttpClient) {
        this.onSpeciesListChanged = new BehaviorSubject({});
        this.onSpeciesDetailChanged = new BehaviorSubject({});

        this._buildTimescaleLegend();
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

    getTimescaleColor(timescale?: number): string {
        let range = 5000 / this.colors.length;
        let bucket = 0
        // let bucket = timescale / range;
        if (isNaN(range)) {
            return this.colors[bucket];
        }
        for (let i = 1; i++; i <= this.colors.length) {
            if (timescale < (i * range)) {
                bucket = i - 1;
                break;
            }
        }
        return this.colors[bucket];
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

    _buildTimescaleLegend() {
        let range = 5000 / this.colors.length;
        this.timescaleLegend = []

        for (let i = 0; i <= this.colors.length; i++) {
            this.timescaleLegend.push(
                {
                    color: this.colors[i];
                    range: range * (i) + " - " + range * (i + 1)
                }
            )

        }
    }

    _addSpeciesColor(species: Species[]) {
        const self = this;
        _.each(species, function (speciesNode) {
            speciesNode.timescaleColor = self.getTimescaleColor(speciesNode.timescale);
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
