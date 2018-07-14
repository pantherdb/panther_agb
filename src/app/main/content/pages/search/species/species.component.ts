import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
//import { TreeNode, TreeModel, TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from 'angular-tree-component';
import {NodeService} from './nodeservice';
import {Message} from './message';
import {Tree} from './tree';
import { speciesNodes, treeNodes } from './data/species-nodes';
//import { TreeNode, TreeDragDropService } from 'primeng/primeng';
import {TreeDragDropService} from './treedragdropservice';
import { TreeNode } from './treenode';

import { BreadcrumbsService } from '@agb.common/services/breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'app-species',
  templateUrl: 'species.component.html',
  styleUrls: ['species.component.scss'],
  providers: [TreeDragDropService]
})

export class SpeciesComponent implements OnInit {

  msgs: Message[];

  @ViewChild('expandingTree')
  expandingTree: Tree;
  
  species: TreeNode[];
  selectedSpecies: TreeNode;

  constructor(private nodeService: NodeService) { }

  ngOnInit() {
    this.species = [{label:"LUCA",children:[{label:"Archaea-Eukaryota",children:[{label:"Eukaryota",children:[{label:"Unikonts",children:[{label:"Opisthokonts",children:[{label:"Metazoa-Choanoflagellida",children:[{label:"Eumetazoa",children:[{label:"Bilateria",children:[{label:"Deuterostomia",children:[{label:"Chordata",children:[{label:"Craniata-Cephalochordata",children:[{label:"Euteleostomi",children:[{label:"Tetrapoda",children:[{label:"Amniota",children:[{label:"Mammalia",children:[{label:"Theria",children:[{label:"Eutheria",children:[{label:"Euarchontoglires",children:[{label:"Catarrhini",children:[{label:"Homininae",children:[{label:"Homo-Pan",short_label:"Homo-Pan",children:[{label:"Homo sapiens",},{label:"Pan troglodytes",}]},{label:"Gorilla gorilla gorilla",}]},{label:"Macaca mulatta",}]},{label:"Murinae",children:[{label:"Mus musculus",},{label:"Rattus norvegicus",}]}]},{label:"Laurasiatheria",children:[{label:"Perissodactyla",children:[{label:"Artiodactyla",children:[{label:"Bos taurus",},{label:"Sus scrofa",}]},{label:"Equus caballus",}]},{label:"Carnivora",children:[{label:"Felis catus",},{label:"Canis lupus familiaris",}]}]}]},{label:"Monodelphis domestica",}]},{label:"Ornithorhynchus anatinus",}]},{label:"Sauria",children:[{label:"Gallus gallus",},{label:"Anolis carolinensis",}]}]},{label:"Xenopus tropicalis",}]},{label:"Neopterygii",children:[{label:"Teleostei",children:[{label:"Oryzias latipes",},{label:"Danio rerio",}]},{label:"lepisosteus oculatus",}]}]},{label:"Branchiostoma floridae",}]},{label:"Ciona intestinalis",}]},{label:"Strongylocentrotus purpuratus",}]},{label:"Protostomia",children:[{label:"Ecdysozoa",children:[{label:"Rhabditida-Chromadorea",short_label:"Rhabditida-Chromadorea",children:[{label:"Caenorhabditis",children:[{label:"Caenorhabditis elegans",},{label:"Caenorhabditis briggsae",}]},{label:"Pristionchus pacificus",}]},{label:"Arthropoda",children:[{label:"Hexapoda-Crustacea",short_label:"Hexapoda-Crustacea",children:[{label:"Endopterygota",children:[{label:"Diptera",children:[{label:"Drosophila melanogaster",},{label:"Anopheles gambiae",}]},{label:"Tribolium castaneum",}]},{label:"Daphnia pulex",}]},{label:"Ixodes scapularis",}]}]},{label:"helobdella robusta",}]}]},{label:"Nematostella vectensis",},{label:"Trichoplax adhaerens",}]},{label:"Monosiga brevicollis",}]},{label:"Fungi",children:[{label:"Dikarya",children:[{label:"Ascomycota",children:[{label:"Pezizomycotina-Saccharomycotina",short_label:"Pezizomycotina-Saccharomycotina",children:[{label:"Saccharomycetales",children:[{label:"Saccharomycetaceae-Candida",short_label:"Saccharomycetaceae-Candida",children:[{label:"Saccharomycetaceae",children:[{label:"Saccharomyces cerevisiae",},{label:"Ashbya gossypii",}]},{label:"Candida albicans",}]},{label:"Yarrowia lipolytica",}]},{label:"Pezizomycotina",children:[{label:"Aspergillus",children:[{label:"Emericella nidulans",},{label:"Neosartorya fumigata",}]},{label:"Sordariomycetes-Leotiomycetes",short_label:"Sordariomycetes-Leotiomycetes",children:[{label:"Sordariomyceta",children:[{label:"Neurospora crassa",},{label:"Sclerotinia sclerotiorum",}]},{label:"Phaeosphaeria nodorum",}]}]}]},{label:"Schizosaccharomyces pombe",}]},{label:"Basidiomycota",children:[{label:"Cryptococcus neoformans",},{label:"Ustilago maydis",},{label:"Puccinia graminis",}]}]},{label:"Batrachochytrium dendrobatidis",}]}]},{label:"Amoebozoa",children:[{label:"Entamoeba histolytica",},{label:"Dictyostelium",children:[{label:"Dictyostelium discoideum",},{label:"Dictyostelium purpureum",}]}]}]},{label:"Alveolata-Stramenopiles",children:[{label:"Alveolata",children:[{label:"Plasmodium falciparum",},{label:"Paramecium tetraurelia",}]},{label:"Stramenopiles",children:[{label:"Thalassiosira pseudonana",},{label:"Phytophthora ramorum",}]}]},{label:"Excavates",children:[{label:"Trypanosomatidae",children:[{label:"Leishmania major",},{label:"Trypanosoma brucei",}]},{label:"Fornicata-Parabasalids",short_label:"Fornicata-Parabasalids",children:[{label:"Giardia intestinalis",},{label:"Trichomonas vaginalis",}]}]},{label:"Viridiplantae",children:[{label:"Chlamydomonas reinhardtii",},{label:"Embryophyta",children:[{label:"Magnoliophyta",children:[{label:"Poaceae",children:[{label:"Zea mays",},{label:"BEP_clade",children:[{label:"Oryza sativa",},{label:"Brachypodium distachyon",}]}]},{label:"Pentapetalae",children:[{label:"Solanum lycopersicum",},{label:"rosids",children:[{label:"Vitis vinifera",},{label:"Arabidopsis thaliana",},{label:"fabids",children:[{label:"Glycine max",},{label:"Populus trichocarpa",}]}]}]}]},{label:"Physcomitrella patens",}]}]}]},{label:"Archaea",children:[{label:"Nitrosopumilus maritimus",},{label:"Korarchaeum cryptofilum",},{label:"Thermoprotei",children:[{label:"Sulfolobus solfataricus",},{label:"Pyrobaculum aerophilum",}]},{label:"Euryarchaeota",children:[{label:"Methanosarcina acetivorans",},{label:"Methanocaldococcus jannaschii",},{label:"Halobacterium salinarum",},{label:"Thermococcus kodakaraensis",}]}]}]},{label:"Eubacteria",children:[{label:"Firmicutes",children:[{label:"Clostridium botulinum",},{label:"Bacilli",children:[{label:"Streptococcus pneumoniae",},{label:"Bacillales",children:[{label:"Staphylococcus aureus",},{label:"Listeria monocytogenes",},{label:"Bacillus",children:[{label:"Bacillus subtilis",},{label:"Bacillus cereus",}]}]}]}]},{label:"Actinomycetales",children:[{label:"Streptomyces coelicolor",},{label:"Mycobacterium tuberculosis",}]},{label:"mycoplasma genitalium",},{label:"Thermotoga maritima",},{label:"Deinococcus radiodurans",},{label:"Chloroflexus aurantiacus",},{label:"Cyanobacteria",children:[{label:"Gloeobacter violaceus",},{label:"Synechocystis",}]},{label:"Leptospira interrogans",},{label:"Bacteroides thetaiotaomicron",},{label:"Chlamydia trachomatis",},{label:"Aquifex aeolicus",},{label:"Rhodopirellula baltica",},{label:"Thermodesulfovibrio yellowstonii",},{label:"Dictyoglomus turgidum",},{label:"Fusobacterium nucleatum",},{label:"Proteobacteria",children:[{label:"Helicobacter pylori",},{label:"Neisseria meningitidis serogroup b",},{label:"Geobacter sulfurreducens",},{label:"Bradyrhizobium diazoefficiens",},{label:"Gammaproteobacteria",children:[{label:"Coxiella burnetii",},{label:"Haemophilus influenzae",},{label:"Shewanella oneidensis",},{label:"Vibrio cholerae",},{label:"Xanthomonas campestris",},{label:"Pseudomonas aeruginosa",},{label:"Enterobacteriaceae",children:[{label:"Salmonella typhimurium",},{label:"Yersinia pestis",},{label:"Escherichia coli",}]}]}]}]}]}];
  }
  nodeSelect(event) {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Node Selected', detail: event.node.label});
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
        this.nodeService.getLazyFiles().then(nodes => event.node.children = nodes);
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
