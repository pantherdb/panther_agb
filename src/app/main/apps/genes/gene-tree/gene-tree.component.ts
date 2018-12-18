import { Component, ViewEncapsulation, ElementRef, PipeTransform, Pipe, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-gene-tree',
  templateUrl: './gene-tree.component.html',
  styleUrls: ['./gene-tree.component.scss']
})
export class GeneTreeComponent implements OnInit {
  
  pthr: string;
  ptn: string;
  tree: string;


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.pthr = decodeURIComponent(params['pthr']);
      this.ptn = decodeURIComponent(params['ptn']);
      //this.tree = `http://panthertest5.usc.edu/treeViewer/treeViewer.jsp?book=${this.pthr}&seq=${this.ptn}`
      this.tree = `http://panthertest5.med.usc.edu:8085/treeViewer/treeViewer.jsp?book=${this.pthr}&seq=${this.ptn}`
    });
  }

}
