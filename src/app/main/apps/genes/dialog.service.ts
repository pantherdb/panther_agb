import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MatDialog, MatDialogRef } from '@angular/material';

import { GeneDetailDialogComponent } from './gene-detail/dialogs/gene-detail-dialog/gene-detail.component';


import 'rxjs/add/operator/map';


@Injectable()
export class GenesDialogService {
    dialogRef: any;

    constructor(private httpClient: HttpClient,
        private _matDialog: MatDialog) {
    }

    openGenePreview(ptn): void {
        this.dialogRef = this._matDialog.open(GeneDetailDialogComponent, {
            panelClass: 'gene-detail-dialog',
            data: {
                ptn: ptn
            }
        });
        this.dialogRef.afterClosed()
            .subscribe(response => {

            });
    }
}
