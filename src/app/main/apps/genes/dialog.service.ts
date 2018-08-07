import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MatDialog, MatDialogRef } from '@angular/material';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

import { GeneDetailDialogComponent } from './gene-detail/dialogs/gene-detail-dialog/gene-detail.component';
import { GeneDetailComponent } from './gene-detail/gene-detail.component';

import 'rxjs/add/operator/map';

import { SpeciesGeneList } from './models/species-gene-list';

@Injectable()
export class GenesDialogService {
    dialogRef: any;

    constructor(private httpClient: HttpClient,
        private _matDialog: MatDialog) {
    }


    openGenePreview(ptn): void {
        this.dialogRef = this._matDialog.open(GeneDetailDialogComponent, {
            panelClass: 'gene-preview-dialog-component',
            data: {
                ptn: ptn
            }
        });
        this.dialogRef.afterClosed()
            .subscribe(response => {

            });
    }
}
