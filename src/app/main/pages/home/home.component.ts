import { Component, OnInit } from '@angular/core';

import { noctuaAnimations } from '@noctua/animations';
import { NoctuaConfigService } from '@noctua/services/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: noctuaAnimations]
})
export class HomeComponent implements OnInit {

  constructor(private noctuaConfigService: NoctuaConfigService) {
    this.noctuaConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        toolbar: {
          hidden: true
        },
        footer: {
          hidden: true
        }
      }
    };
  }

  ngOnInit() {

  }

}
