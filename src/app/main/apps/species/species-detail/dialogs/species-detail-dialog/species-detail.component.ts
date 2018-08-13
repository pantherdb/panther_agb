import { Component, OnInit, OnDestroy, ViewChild, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatMenuTrigger } from '@angular/material';
import { Subject } from 'rxjs';
import { GeneReplacePipe } from '@agb.common/pipes/gene-replace.pipe';
//import { Gene } from './../../models/gene';
import * as _ from 'lodash';

import { ActivatedRoute } from '@angular/router';
import { SpeciesService } from './../../../species.service';
import { BreadcrumbsService } from '@agb.common/services/breadcrumbs/breadcrumbs.service';
//import { Species } from './species';

@Component({
  selector: 'app-species-detail',
  templateUrl: './species-detail.component.html',
  styleUrls: ['./species-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SpeciesDetailDialogComponent implements OnInit, OnDestroy {
  private _unsubscribeAll: Subject<any>;

  species: string;
  speciesDetail: any = {};
  constructor(
    private _matDialogRef: MatDialogRef<SpeciesDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _matDialog: MatDialog,
    private speciesService: SpeciesService) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {
    this.species = this._data.species
    this.speciesService.getSpeciesDetail(this.species).then(response => {
      this.speciesDetail = this.speciesService.speciesDetail;
      //console.log(this.SpeciesInfo);
    });

  }

  close() {
    this._matDialogRef.close();
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}