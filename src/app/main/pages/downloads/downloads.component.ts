import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss']
})
export class DownloadsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  downloadAll():void {
    // window.location.href="https://s3-us-west-1.amazonaws.com/thomaslab-public/AllGenes.csv.gz";
    window.location.href="https://zenodo.org/record/1443573/files/AllGenes.csv.gz?download=1";
  }
}
