import { Component, OnInit, Input, OnDestroy, ViewChild, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatMenuTrigger } from '@angular/material';
import { Subject } from 'rxjs';
import { GeneReplacePipe } from '@agb.common/pipes/gene-replace.pipe';
//import { Gene } from './../../models/gene';
import * as _ from 'lodash';

import { Router } from '@angular/router';
import { SpeciesService } from './../../../species.service';
import { BreadcrumbsService } from '@agb.common/services/breadcrumbs/breadcrumbs.service';
import { SpeciesFlatTreeComponent } from './../../../species-list/species-flat-tree/species-flat-tree.component';

@Component({
  selector: 'app-species-detail',
  templateUrl: './species-detail.component.html',
  styleUrls: ['./species-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SpeciesDetailDialogComponent implements OnInit, OnDestroy {
  private _unsubscribeAll: Subject<any>;
  
  //@Input() speciesGeneList: SpeciesFlatTreeComponent;
  species: string;
  speciesDetail: any = {};
  constructor(
    private router: Router,
    private _matDialogRef: MatDialogRef<SpeciesDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _matDialog: MatDialog,
    private speciesService: SpeciesService) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {
    this.species = this._data.species;
    this.speciesService.setActiveSpecies(this.species);
    this.speciesService.getSpeciesDetail(this.species).then(response => {
      this.speciesDetail = this.speciesService.speciesDetail;
      //console.log(this.speciesDetail);
    });

  }

  goToGeneList(){
    
    this.router.navigate([`species/genes`, {
      outlets: {
        'list': ['genes', `${this.species}`, 'default species']
      }
    }]);
    this.close();
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