import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '@agb.common/services/data-loader/list.service';
import { List } from '@agb.common/services/models/List';
import * as _ from 'lodash';

@Component({
  selector: 'app-genes',
  templateUrl: 'genes.component.html',
  styleUrls: ['genes.component.scss'],
})

export class GenesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private listServ: ListService) { }


  ptn: string;
  gene;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.ptn = params['ptn'];
      //console.log(this.ptn);
      this.loadGenes(this.ptn);
    });

  }


  public loadGenes(ptn) {

    //Get all gene list from server and update the lists property
    /* this.listServ.getAllSpecies().subscribe(
        response => this.species = response) */

    this.listServ.getGeneByPtn(ptn).subscribe(
      response => {
        //console.log(response);
        this.gene = response[0];
        //console.log(this.gene);
      });
  }

}
