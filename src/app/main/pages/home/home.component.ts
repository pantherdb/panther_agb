import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { noctuaAnimations } from '@noctua/animations';
import { NoctuaConfigService } from '@noctua/services/config.service';

import { SpeciesService } from './../../apps/species/species.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: noctuaAnimations
})
export class HomeComponent implements OnInit {

  constructor(private noctuaConfigService: NoctuaConfigService,
    private router: Router,
    private speciesService: SpeciesService) {
    this.noctuaConfigService.config = {
      footer: {
        show: true
      }
    };
  }

  ngOnInit() {

  }

  goToNestTree() {
    this.speciesService.setActiveSpecies("LUCA");
    this.router.navigate([`species/genes`, {
      outlets: {
        'list': ['genes', 'LUCA', 'default species']
      }
    }])};

}
