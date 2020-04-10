import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { SpeciesService } from '../../species/species.service';
import { GenesService } from '../genes.service';
import { GenesHistoryService } from '../gene-history.service';
import { noctuaAnimations } from '@noctua/animations';
import { GenesDialogService } from './../dialog.service';
import { SpeciesDialogService } from './../../species/dialog.service';

@Component({
  selector: 'app-genome-comparison2',
  templateUrl: './genome-comparison2.component.html',
  styleUrls: ['./genome-comparison2.component.scss'],
  animations: noctuaAnimations
})
export class GenomeComparison2Component implements OnInit {
  genes: any[] = [];
  totalGenesCount: any;
  LossGenesCount: number
  DirectInheritedGenesCount: number;
  DuplicatedGenesCount: number;
  HorizTransGenesCount: number;
  DenovoGenesCount: number;
  totalDescGenesCount: number;

  proxy_species: any[];
  hasProxyGene: boolean;
  noProxyGene: boolean;
  ChildSpecies: string;
  selected_proxy_species: any;
  ParentSpecies: string;
  speciesDetail: any;
  exporter: any;
  genesGained
  private unsubscribeAll: Subject<any>;

  constructor(private route: ActivatedRoute, private router: Router, private genesHistoryService: GenesHistoryService,
    private genesDialogService: GenesDialogService,
    private speciesService: SpeciesService, private speciesDialogService: SpeciesDialogService) {
      this.unsubscribeAll = new Subject();

      this.genesGained = 0;//this.genesService.gained_genes; 
  }

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.ParentSpecies = decodeURIComponent(params['parent']);
      this.ParentSpecies.replace("/", "%2F");
      this.ChildSpecies = decodeURIComponent(params['child']);
      this.genesHistoryService.onSpeciesChanged.subscribe(response => {
        //this.totalGenesCount = this.genesHistoryService.totalGenesCount;
        this.DirectInheritedGenesCount = this.genesHistoryService.genesDirectInheritedCount;
        //console.log(this.genesHistoryService.genesDirectInheritedCount);
        this.DuplicatedGenesCount = this.genesHistoryService.genesInheritedByDupCount;
        this.LossGenesCount = this.genesHistoryService.genesLossCount;
        this.HorizTransGenesCount = this.genesHistoryService.genesGainbyHTCount;
        this.DenovoGenesCount = this.genesHistoryService.genesDenovoCount;
        //console.log(this.DenovoGenesCount);
        //this.totalDescGenesCount = this.genesHistoryService.totalDescGenesCount;
      })
    })
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
    this.router.navigateByUrl(`/species/genes/(list:genes/${this.ParentSpecies}/${value})`);
  }

  onSelect({ selected }) {
    //console.log(selected)
    this.openGenePreview(selected[0].ptn)
  }
  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

}
