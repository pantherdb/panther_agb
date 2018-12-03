import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gene-tree',
  templateUrl: './gene-tree.component.html',
  styleUrls: ['./gene-tree.component.scss']
})
export class GeneTreeComponent implements OnInit {
  
  pthr: string;
  ptn: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.pthr = decodeURIComponent(params['pthr']);
      this.ptn = decodeURIComponent(params['ptn']);
    });
  }

}
