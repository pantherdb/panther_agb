import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { SpeciesService } from '../../species/species.service';
import { GenesService } from '../genes.service';
import { noctuaAnimations } from '@noctua/animations';
import { GenesDialogService } from './../dialog.service';
import { SpeciesDialogService } from './../../species/dialog.service';

@Component({
  selector: 'app-genomes-comparison',
  templateUrl: './genomes-comparison.component.html',
  styleUrls: ['./genomes-comparison.component.scss'],
  animations: noctuaAnimations
})
export class GenomesComparisonComponent implements OnInit, OnDestroy {

  genes: any[] = [];
  totalGenesCount: any;
  gainedGenesCount: number
  genesInheritedCount: number;
  lostGenesCount: number;
  notModeledGenesCount: number;
  totalDescGenesCount: number;

  proxy_species: any[];
  hasProxyGene: boolean;
  noProxyGene: boolean;
  ExtSpecies: any;
  selected_proxy_species: any;
  Ancspecies: string;
  speciesDetail: any;
  exporter: any;
  genesGained
  private unsubscribeAll: Subject<any>;


  constructor(private route: ActivatedRoute, private router: Router, private genesService: GenesService,
    private genesDialogService: GenesDialogService,
    private speciesService: SpeciesService, private speciesDialogService: SpeciesDialogService) {
    this.unsubscribeAll = new Subject();

    this.genesGained = 0;//this.genesService.gained_genes;
  }

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.Ancspecies = decodeURIComponent(params['ancestral']);
      this.Ancspecies.replace("/", "%2F");
      this.ExtSpecies = decodeURIComponent(params['extant']);

      /* this.genesService.getGenesBySpecies(this.Ancspecies, this.ExtSpecies, 1, 50).then(response => {
        this.genes = this.genesService.ancestral_genes;

        this.genesService.getGenesBySpecies(this.Ancspecies, this.ExtSpecies).then(response => {
          this.genes = this.genesService.ancestral_genes;
        });
      }); */

      /* this.speciesService.getSpeciesDetail(this.Ancspecies).then(response => {
        this.speciesDetail = this.speciesService.speciesDetail;
        //console.log(this.speciesDetail);
      }); */

      this.genesService.onSpeciesChanged.subscribe(response => {
        this.totalGenesCount = this.genesService.totalGenesCount;
        this.gainedGenesCount = this.genesService.gainedGenesCount;
        this.genesInheritedCount = this.genesService.genesInheritedCount;
        this.lostGenesCount = this.genesService.lostGenesCount;
        this.notModeledGenesCount = this.genesService.notModeledGenesCount;
        this.totalDescGenesCount = this.genesService.totalDescGenesCount;
      })
    });
  }

  openGenePreview(species) {
    this.genesDialogService.openGenePreview(species);
  }

  openSpeciesDetail() {
    this.router.navigateByUrl(`species/${this.speciesDetail.short_name}`);
  }

  openSpeciesPreview() {
    this.speciesDialogService.openSpeciesPreview(this.speciesDetail.short_name);
  }

  changeProxyGenes(value) {
    //console.log(value);
    //this.selected_proxy_species = value;
    this.router.navigateByUrl(`/species/genes/(list:genes/${this.Ancspecies}/${value})`);
  }

  onSelect({ selected }) {
    console.log(selected)
    this.openGenePreview(selected[0].ptn)
  }


  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }
}

