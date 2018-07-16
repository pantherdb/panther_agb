import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
//import { TreeNode, TreeModel, TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from 'angular-tree-component';
import {NodeService} from './nodeservice';
import {Message} from './message';
import {Tree} from './tree';
import {MenuItem} from './menuitem';
import { speciesNodes, treeNodes } from './data/species-nodes';
import { TreeNode, TreeDragDropService } from 'primeng/primeng';
//import {TreeDragDropService} from './treedragdropservice';
//import { TreeNode } from './treenode';

import { BreadcrumbsService } from '@agb.common/services/breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'app-species',
  templateUrl: 'species.component.html',
  styleUrls: ['species.component.scss'],
  providers: [TreeDragDropService, NodeService]
})

export class SpeciesComponent implements OnInit {

  msgs: Message[];

  @ViewChild('expandingTree')
  expandingTree: Tree;
  
  species: TreeNode[];
  lazySpecies: TreeNode[];
  selectedSpecies: TreeNode;
  items: MenuItem[];
  loading: boolean;

  constructor(private router: Router,private breadcrumbsService: BreadcrumbsService, private nodeService: NodeService) { }

  ngOnInit() {
    this.loading = true;
    this.species = [{label:"LUCA",expandedIcon: "fa fa-folder-open",collapsedIcon: "fa fa-folder",expanded: true, children:[{label:"Archaea-Eukaryota",expandedIcon: "fa fa-folder-open",collapsedIcon: "fa fa-folder",expanded: true,children:[{label:"Eukaryota",expanded: true,children:[{label:"Unikonts",expanded: true,children:[{label:"Opisthokonts",expanded: true,children:[{label:"Metazoa-Choanoflagellida",expanded: true,children:[{label:"Eumetazoa",expanded: true,children:[{label:"Bilateria",expanded: true,children:[{label:"Deuterostomia",children:[{label:"Chordata",expanded: true,children:[{label:"Craniata-Cephalochordata",expanded: true,children:[{label:"Euteleostomi",expanded: true,children:[{label:"Tetrapoda",expanded: true,children:[{label:"Amniota",expanded: true,children:[{label:"Mammalia",expanded: true,children:[{label:"Theria",expanded: true,children:[{label:"Eutheria",expanded: true,children:[{label:"Euarchontoglires",expanded: true,children:[{label:"Catarrhini",expanded: true,children:[{label:"Homininae",expanded: true,children:[{label:"Homo-Pan",expanded: true,children:[{label:"Homo sapiens",expanded: true,},{label:"Pan troglodytes",expanded: true,}]},{label:"Gorilla gorilla gorilla",expanded: true,}]},{label:"Macaca mulatta",expanded: true,}]},{label:"Murinae",expanded: true,children:[{label:"Mus musculus",expanded: true,},{label:"Rattus norvegicus",}]}]},{label:"Laurasiatheria",expanded: true,children:[{label:"Perissodactyla",expanded: true,children:[{label:"Artiodactyla",expanded: true,children:[{label:"Bos taurus",},{label:"Sus scrofa",}]},{label:"Equus caballus",}]},{label:"Carnivora",expanded: true,children:[{label:"Felis catus",},{label:"Canis lupus familiaris",}]}]}]},{label:"Monodelphis domestica",}]},{label:"Ornithorhynchus anatinus",}]},{label:"Sauria",expanded: true,children:[{label:"Gallus gallus",},{label:"Anolis carolinensis",}]}]},{label:"Xenopus tropicalis",}]},{label:"Neopterygii",expanded: true,children:[{label:"Teleostei",expanded: true,children:[{label:"Oryzias latipes",},{label:"Danio rerio",}]},{label:"lepisosteus oculatus",}]}]},{label:"Branchiostoma floridae",}]},{label:"Ciona intestinalis",}]},{label:"Strongylocentrotus purpuratus",}]},{label:"Protostomia",children:[{label:"Ecdysozoa",children:[{label:"Rhabditida-Chromadorea",expanded: true,children:[{label:"Caenorhabditis",expanded: true,children:[{label:"Caenorhabditis elegans",},{label:"Caenorhabditis briggsae",}]},{label:"Pristionchus pacificus",}]},{label:"Arthropoda",expanded: true,children:[{label:"Hexapoda-Crustacea",expanded: true,children:[{label:"Endopterygota",expanded: true,children:[{label:"Diptera",expanded: true,children:[{label:"Drosophila melanogaster",},{label:"Anopheles gambiae",}]},{label:"Tribolium castaneum",}]},{label:"Daphnia pulex",}]},{label:"Ixodes scapularis",}]}]},{label:"helobdella robusta",}]}]},{label:"Nematostella vectensis",},{label:"Trichoplax adhaerens",}]},{label:"Monosiga brevicollis",}]},{label:"Fungi",expanded: true,children:[{label:"Dikarya",expanded: true,children:[{label:"Ascomycota",expanded: true,children:[{label:"Pezizomycotina-Saccharomycotina",expanded: true,children:[{label:"Saccharomycetales",expanded: true,children:[{label:"Saccharomycetaceae-Candida",expanded: true,children:[{label:"Saccharomycetaceae",expanded: true,children:[{label:"Saccharomyces cerevisiae",},{label:"Ashbya gossypii",}]},{label:"Candida albicans",}]},{label:"Yarrowia lipolytica",}]},{label:"Pezizomycotina",expanded: true,children:[{label:"Aspergillus",expanded: true,children:[{label:"Emericella nidulans",},{label:"Neosartorya fumigata",}]},{label:"Sordariomycetes-Leotiomycetes",expanded: true,children:[{label:"Sordariomyceta",expanded: true,children:[{label:"Neurospora crassa",},{label:"Sclerotinia sclerotiorum",}]},{label:"Phaeosphaeria nodorum",}]}]}]},{label:"Schizosaccharomyces pombe",}]},{label:"Basidiomycota",expanded: true,children:[{label:"Cryptococcus neoformans",},{label:"Ustilago maydis",},{label:"Puccinia graminis",}]}]},{label:"Batrachochytrium dendrobatidis",}]}]},{label:"Amoebozoa",expanded: true,children:[{label:"Entamoeba histolytica",},{label:"Dictyostelium",expanded: true,children:[{label:"Dictyostelium discoideum",},{label:"Dictyostelium purpureum",}]}]}]},{label:"Alveolata-Stramenopiles",expanded: true,children:[{label:"Alveolata",expanded: true,children:[{label:"Plasmodium falciparum",},{label:"Paramecium tetraurelia",}]},{label:"Stramenopiles",expanded: true,children:[{label:"Thalassiosira pseudonana",},{label:"Phytophthora ramorum",}]}]},{label:"Excavates",expanded: true,children:[{label:"Trypanosomatidae",expanded: true,children:[{label:"Leishmania major",},{label:"Trypanosoma brucei",}]},{label:"Fornicata-Parabasalids",expanded: true,children:[{label:"Giardia intestinalis",},{label:"Trichomonas vaginalis",}]}]},{label:"Viridiplantae",expanded: true,children:[{label:"Chlamydomonas reinhardtii",},{label:"Embryophyta",expanded: true,children:[{label:"Magnoliophyta",expanded: true,children:[{label:"Poaceae",expanded: true,children:[{label:"Zea mays",},{label:"BEP_clade",expanded: true,children:[{label:"Oryza sativa",},{label:"Brachypodium distachyon",}]}]},{label:"Pentapetalae",expanded: true,children:[{label:"Solanum lycopersicum",},{label:"rosids",expanded: true,children:[{label:"Vitis vinifera",},{label:"Arabidopsis thaliana",},{label:"fabids",expanded: true,children:[{label:"Glycine max",},{label:"Populus trichocarpa",}]}]}]}]},{label:"Physcomitrella patens",}]}]}]},{label:"Archaea",expanded: true,children:[{label:"Nitrosopumilus maritimus",},{label:"Korarchaeum cryptofilum",},{label:"Thermoprotei",expanded: true,children:[{label:"Sulfolobus solfataricus",},{label:"Pyrobaculum aerophilum",}]},{label:"Euryarchaeota",expanded: true,children:[{label:"Methanosarcina acetivorans",},{label:"Methanocaldococcus jannaschii",},{label:"Halobacterium salinarum",},{label:"Thermococcus kodakaraensis",}]}]}]},{label:"Eubacteria",expanded: true,children:[{label:"Firmicutes",expanded: true,children:[{label:"Clostridium botulinum",},{label:"Bacilli",expanded: true,children:[{label:"Streptococcus pneumoniae",},{label:"Bacillales",expanded: true,children:[{label:"Staphylococcus aureus",},{label:"Listeria monocytogenes",},{label:"Bacillus",expanded: true,children:[{label:"Bacillus subtilis",},{label:"Bacillus cereus",}]}]}]}]},{label:"Actinomycetales",expanded: true,children:[{label:"Streptomyces coelicolor",},{label:"Mycobacterium tuberculosis",}]},{label:"mycoplasma genitalium",},{label:"Thermotoga maritima",},{label:"Deinococcus radiodurans",},{label:"Chloroflexus aurantiacus",},{label:"Cyanobacteria",expanded: true,children:[{label:"Gloeobacter violaceus",},{label:"Synechocystis",}]},{label:"Leptospira interrogans",},{label:"Bacteroides thetaiotaomicron",},{label:"Chlamydia trachomatis",},{label:"Aquifex aeolicus",},{label:"Rhodopirellula baltica",},{label:"Thermodesulfovibrio yellowstonii",},{label:"Dictyoglomus turgidum",},{label:"Fusobacterium nucleatum",},{label:"Proteobacteria",expanded: true,children:[{label:"Helicobacter pylori",},{label:"Neisseria meningitidis serogroup b",},{label:"Geobacter sulfurreducens",},{label:"Bradyrhizobium diazoefficiens",},{label:"Gammaproteobacteria",expanded: true,children:[{label:"Coxiella burnetii",},{label:"Haemophilus influenzae",},{label:"Shewanella oneidensis",},{label:"Vibrio cholerae",},{label:"Xanthomonas campestris",},{label:"Pseudomonas aeruginosa",},{label:"Enterobacteriaceae",children:[{label:"Salmonella typhimurium",},{label:"Yersinia pestis",},{label:"Escherichia coli",}]}]}]}]}]}];

    this.items = [
        {label: 'View', icon: 'fa fa-search', command: (event) => this.viewFile(this.selectedSpecies)},
        {label: 'Unselect', icon: 'fa fa-close', command: (event) => this.unselectFile()}
    ];
  }
/* nodeSelect(event) {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Node Selected', detail: event.node.label});
} */

nodeSelect(event) {
    this.species = event.node.label;
    //console.log(this.species, '--path ', node.path);
    this.router.navigateByUrl(`/species/${this.species}`);

    this.breadcrumbsService.setCurrentBreadcrumbs(event.node.path.map(species => (
      {
        label: species,
        url: '/species/' + species
      })));
}


nodeUnselect(event) {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Node Unselected', detail: event.node.label});
}

nodeExpandMessage(event) {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Node Expanded', detail: event.node.label});
}

nodeExpand(event) {
    if(event.node) {
        //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
        //this.nodeService.getLazyFiles().then(nodes => event.node.children = nodes);

    }
}

viewFile(file: TreeNode) {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Node Selected with Right Click', detail: file.label});
}

unselectFile() {
    this.selectedSpecies = null;
}

expandAll(){
    this.species.forEach( node => {
        this.expandRecursive(node, true);
    } );
}

collapseAll(){
    this.species.forEach( node => {
        this.expandRecursive(node, false);
    } );
}

private expandRecursive(node:TreeNode, isExpand:boolean){
    node.expanded = isExpand;
    if(node.children){
        node.children.forEach( childNode => {
            this.expandRecursive(childNode, isExpand);
        } );
    }
}
}
