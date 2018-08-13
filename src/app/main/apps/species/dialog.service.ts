import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MatDialog, MatDialogRef } from '@angular/material';
import { SpeciesDetailDialogComponent } from './species-detail/dialogs/species-detail-dialog/species-detail.component';


import 'rxjs/add/operator/map';


@Injectable()
export class SpeciesDialogService {
    dialogRef: any;

    constructor(private httpClient: HttpClient,
        private _matDialog: MatDialog) {
    }

    openSpeciesPreview(species): void {
        this.dialogRef = this._matDialog.open(SpeciesDetailDialogComponent, {
            panelClass: 'species-detail-dialog',
            data: {
                species: species
            }
        });
        this.dialogRef.afterClosed()
            .subscribe(response => {

            });
    }
}
