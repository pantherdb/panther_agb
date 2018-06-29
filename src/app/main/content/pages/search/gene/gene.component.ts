import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneService } from './gene.service';
import { Gene } from './models/gene';
import * as _ from 'lodash';

@Component({
  selector: 'app-genes',
  templateUrl: 'gene.component.html',
  styleUrls: ['gene.component.scss'],
})

export class GeneComponent implements OnInit {

  ptn: string;
  gene; Gene;

  constructor(
    private route: ActivatedRoute,
    private geneService: GeneService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.ptn = decodeURIComponent(params['ptn']);
      this.geneService.getGeneByPtn(this.ptn).then(response => {
        this.gene = this.geneService.gene;
      });
    });
  }
}
