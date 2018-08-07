import * as _ from 'lodash';
import { v4 as uuid } from 'uuid';

export const speciesNodes = [
    {
        name: 'LUCA',
        exapanded: true,
        children: [
            {
                name: 'Archaea-Eukaryota',
                children: [
                    {
                        name: 'Eukaryota',
                        children: [
                            {
                                name: 'Unikonts',
                                children: [
                                    {
                                        name: 'Opisthokonts',
                                        children: [
                                            {
                                                name: 'Metazoa-Choanoflagellida',
                                                children: [
                                                    {
                                                        name: 'Eumetazoa',
                                                        children: [
                                                            {
                                                                name: 'Bilateria',
                                                                children: [
                                                                    {
                                                                        name: 'Deuterostomia',
                                                                        children: [
                                                                            {
                                                                                name: 'Chordata',
                                                                                children: [
                                                                                    {
                                                                                        name: 'Craniata-Cephalochordata',
                                                                                        children: [
                                                                                            {
                                                                                                name: 'Euteleostomi',
                                                                                                children: [
                                                                                                    {
                                                                                                        name: 'Tetrapoda',
                                                                                                        children: [
                                                                                                            {
                                                                                                                name: 'Amniota',
                                                                                                                children: [
                                                                                                                    {
                                                                                                                        name: 'Mammalia',
                                                                                                                        children: [
                                                                                                                            {
                                                                                                                                name: 'Theria',
                                                                                                                                children: [
                                                                                                                                    {
                                                                                                                                        name: 'Eutheria',
                                                                                                                                        children: [
                                                                                                                                            {
                                                                                                                                                name: 'Euarchontoglires',
                                                                                                                                                children: [
                                                                                                                                                    {
                                                                                                                                                        name: 'Catarrhini',
                                                                                                                                                        children: [
                                                                                                                                                            {
                                                                                                                                                                name: 'Homininae',
                                                                                                                                                                children: [
                                                                                                                                                                    {
                                                                                                                                                                        name: 'Homo-Pan',
                                                                                                                                                                        children: [
                                                                                                                                                                            {
                                                                                                                                                                                name: 'HUMAN'
                                                                                                                                                                            },
                                                                                                                                                                            {
                                                                                                                                                                                name: 'PANTR'
                                                                                                                                                                            }
                                                                                                                                                                        ]
                                                                                                                                                                    },
                                                                                                                                                                    {
                                                                                                                                                                        name: 'GORGO'
                                                                                                                                                                    }
                                                                                                                                                                ]
                                                                                                                                                            },
                                                                                                                                                            {
                                                                                                                                                                name: 'MACMU'
                                                                                                                                                            }
                                                                                                                                                        ]
                                                                                                                                                    },
                                                                                                                                                    {
                                                                                                                                                        name: 'Murinae',
                                                                                                                                                        children: [
                                                                                                                                                            {
                                                                                                                                                                name: 'MOUSE'
                                                                                                                                                            },
                                                                                                                                                            {
                                                                                                                                                                name: 'RAT'
                                                                                                                                                            }
                                                                                                                                                        ]
                                                                                                                                                    }
                                                                                                                                                ]
                                                                                                                                            },
                                                                                                                                            {
                                                                                                                                                name: 'Laurasiatheria',
                                                                                                                                                children: [
                                                                                                                                                    {
                                                                                                                                                        name: 'Perissodactyla',
                                                                                                                                                        children: [
                                                                                                                                                            {
                                                                                                                                                                name: 'Artiodactyla',
                                                                                                                                                                children: [
                                                                                                                                                                    {
                                                                                                                                                                        name: 'BOVIN'
                                                                                                                                                                    },
                                                                                                                                                                    {
                                                                                                                                                                        name: 'PIG'
                                                                                                                                                                    }
                                                                                                                                                                ]
                                                                                                                                                            },
                                                                                                                                                            {
                                                                                                                                                                name: 'HORSE'
                                                                                                                                                            }
                                                                                                                                                        ]
                                                                                                                                                    },
                                                                                                                                                    {
                                                                                                                                                        name: 'Carnivora',
                                                                                                                                                        children: [
                                                                                                                                                            {
                                                                                                                                                                name: 'FELCA'
                                                                                                                                                            },
                                                                                                                                                            {
                                                                                                                                                                name: 'CANLF'
                                                                                                                                                            }
                                                                                                                                                        ]
                                                                                                                                                    }
                                                                                                                                                ]
                                                                                                                                            }
                                                                                                                                        ]
                                                                                                                                    },
                                                                                                                                    {
                                                                                                                                        name: 'MONDO'
                                                                                                                                    }
                                                                                                                                ]
                                                                                                                            },
                                                                                                                            {
                                                                                                                                name: 'ORNAN'
                                                                                                                            }
                                                                                                                        ]
                                                                                                                    },
                                                                                                                    {
                                                                                                                        name: 'Sauria',
                                                                                                                        children: [
                                                                                                                            {
                                                                                                                                name: 'CHICK'
                                                                                                                            },
                                                                                                                            {
                                                                                                                                name: 'ANOCA'
                                                                                                                            }
                                                                                                                        ]
                                                                                                                    }
                                                                                                                ]
                                                                                                            },
                                                                                                            {
                                                                                                                name: 'XENTR'
                                                                                                            }
                                                                                                        ]
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'Neopterygii',
                                                                                                        children: [
                                                                                                            {
                                                                                                                name: 'Teleostei',
                                                                                                                children: [
                                                                                                                    {
                                                                                                                        name: 'ORYLA'
                                                                                                                    },
                                                                                                                    {
                                                                                                                        name: 'DANRE'
                                                                                                                    }
                                                                                                                ]
                                                                                                            },
                                                                                                            {
                                                                                                                name: 'LEPOC'
                                                                                                            }
                                                                                                        ]
                                                                                                    }
                                                                                                ]
                                                                                            },
                                                                                            {
                                                                                                name: 'BRAFL'
                                                                                            }
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        name: 'CIOIN'
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                name: 'STRPU'
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        name: 'Protostomia',
                                                                        children: [
                                                                            {
                                                                                name: 'Ecdysozoa',
                                                                                children: [
                                                                                    {
                                                                                        name: 'Rhabditida-Chromadorea',
                                                                                        children: [
                                                                                            {
                                                                                                name: 'Caenorhabditis',
                                                                                                children: [
                                                                                                    {
                                                                                                        name: 'CAEEL'
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'CAEBR'
                                                                                                    }
                                                                                                ]
                                                                                            },
                                                                                            {
                                                                                                name: 'PRIPA'
                                                                                            }
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        name: 'Arthropoda',
                                                                                        children: [
                                                                                            {
                                                                                                name: 'Hexapoda-Crustacea',
                                                                                                children: [
                                                                                                    {
                                                                                                        name: 'Endopterygota',
                                                                                                        children: [
                                                                                                            {
                                                                                                                name: 'Diptera',
                                                                                                                children: [
                                                                                                                    {
                                                                                                                        name: 'DROME'
                                                                                                                    },
                                                                                                                    {
                                                                                                                        name: 'ANOGA'
                                                                                                                    }
                                                                                                                ]
                                                                                                            },
                                                                                                            {
                                                                                                                name: 'TRICA'
                                                                                                            }
                                                                                                        ]
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'DAPPU'
                                                                                                    }
                                                                                                ]
                                                                                            },
                                                                                            {
                                                                                                name: 'IXOSC'
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                name: 'HELRO'
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                name: 'NEMVE'
                                                            },
                                                            {
                                                                name: 'TRIAD'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        name: 'MONBE'
                                                    }
                                                ]
                                            },
                                            {
                                                name: 'Fungi',
                                                children: [
                                                    {
                                                        name: 'Dikarya',
                                                        children: [
                                                            {
                                                                name: 'Ascomycota',
                                                                children: [
                                                                    {
                                                                        name: 'Pezizomycotina-Saccharomycotina',
                                                                        children: [
                                                                            {
                                                                                name: 'Saccharomycetales',
                                                                                children: [
                                                                                    {
                                                                                        name: 'Saccharomycetaceae-Candida',
                                                                                        children: [
                                                                                            {
                                                                                                name: 'Saccharomycetaceae',
                                                                                                children: [
                                                                                                    {
                                                                                                        name: 'YEAST'
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'ASHGO'
                                                                                                    }
                                                                                                ]
                                                                                            },
                                                                                            {
                                                                                                name: 'CANAL'
                                                                                            }
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        name: 'YARLI'
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                name: 'Pezizomycotina',
                                                                                children: [
                                                                                    {
                                                                                        name: 'Aspergillus',
                                                                                        children: [
                                                                                            {
                                                                                                name: 'EMENI'
                                                                                            },
                                                                                            {
                                                                                                name: 'ASPFU'
                                                                                            }
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        name: 'Sordariomycetes-Leotiomycetes',
                                                                                        children: [
                                                                                            {
                                                                                                name: 'Sordariomyceta',
                                                                                                children: [
                                                                                                    {
                                                                                                        name: 'NEUCR'
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'SCLS1'
                                                                                                    }
                                                                                                ]
                                                                                            },
                                                                                            {
                                                                                                name: 'PHANO'
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        name: 'SCHPO'
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                name: 'Basidiomycota',
                                                                children: [
                                                                    {
                                                                        name: 'CRYNJ'
                                                                    },
                                                                    {
                                                                        name: 'USTMA'
                                                                    },
                                                                    {
                                                                        name: 'PUCGT'
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        name: 'BATDJ'
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        name: 'Amoebozoa',
                                        children: [
                                            {
                                                name: 'ENTHI'
                                            },
                                            {
                                                name: 'Dictyostelium',
                                                children: [
                                                    {
                                                        name: 'DICDI'
                                                    },
                                                    {
                                                        name: 'DICPU'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                name: 'Alveolata-Stramenopiles',
                                children: [
                                    {
                                        name: 'Alveolata',
                                        children: [
                                            {
                                                name: 'PLAF7'
                                            },
                                            {
                                                name: 'PARTE'
                                            }
                                        ]
                                    },
                                    {
                                        name: 'Stramenopiles',
                                        children: [
                                            {
                                                name: 'THAPS'
                                            },
                                            {
                                                name: 'PHYRM'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                name: 'Excavates',
                                children: [
                                    {
                                        name: 'Trypanosomatidae',
                                        children: [
                                            {
                                                name: 'LEIMA'
                                            },
                                            {
                                                name: 'TRYB2'
                                            }
                                        ]
                                    },
                                    {
                                        name: 'Fornicata-Parabasalids',
                                        children: [
                                            {
                                                name: 'GIAIC'
                                            },
                                            {
                                                name: 'TRIVA'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                name: 'Viridiplantae',
                                children: [
                                    {
                                        name: 'CHLRE'
                                    },
                                    {
                                        name: 'Embryophyta',
                                        children: [
                                            {
                                                name: 'Magnoliophyta',
                                                children: [
                                                    {
                                                        name: 'Poaceae',
                                                        children: [
                                                            {
                                                                name: 'MAIZE'
                                                            },
                                                            {
                                                                name: 'BEP_clade',
                                                                children: [
                                                                    {
                                                                        name: 'ORYSJ'
                                                                    },
                                                                    {
                                                                        name: 'BRADI'
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        name: 'Pentapetalae',
                                                        children: [
                                                            {
                                                                name: 'SOLLC'
                                                            },
                                                            {
                                                                name: 'rosids',
                                                                children: [
                                                                    {
                                                                        name: 'VITVI'
                                                                    },
                                                                    {
                                                                        name: 'ARATH'
                                                                    },
                                                                    {
                                                                        name: 'fabids',
                                                                        children: [
                                                                            {
                                                                                name: 'SOYBN'
                                                                            },
                                                                            {
                                                                                name: 'POPTR'
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                name: 'PHYPA'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'Archaea',
                        children: [
                            {
                                name: 'NITMS'
                            },
                            {
                                name: 'KORCO'
                            },
                            {
                                name: 'Thermoprotei',
                                children: [
                                    {
                                        name: 'SULSO'
                                    },
                                    {
                                        name: 'PYRAE'
                                    }
                                ]
                            },
                            {
                                name: 'Euryarchaeota',
                                children: [
                                    {
                                        name: 'METAC'
                                    },
                                    {
                                        name: 'METJA'
                                    },
                                    {
                                        name: 'HALSA'
                                    },
                                    {
                                        name: 'THEKO'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Eubacteria',
                exapanded: true,
                children: [
                    {
                        name: 'Firmicutes',
                        exapanded: true,
                        children: [
                            {
                                name: 'CLOBH'
                            },
                            {
                                name: 'Bacilli',
                                children: [
                                    {
                                        name: 'STRR6'
                                    },
                                    {
                                        name: 'Bacillales',
                                        children: [
                                            {
                                                name: 'STAA8'
                                            },
                                            {
                                                name: 'LISMO'
                                            },
                                            {
                                                name: 'Bacillus',
                                                children: [
                                                    {
                                                        name: 'BACSU'
                                                    },
                                                    {
                                                        name: 'BACCR'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'Actinomycetales',
                        children: [
                            {
                                name: 'STRCO'
                            },
                            {
                                name: 'MYCTU'
                            }
                        ]
                    },
                    {
                        name: 'MYCGE'
                    },
                    {
                        name: 'THEMA'
                    },
                    {
                        name: 'DEIRA'
                    },
                    {
                        name: 'CHLAA'
                    },
                    {
                        name: 'Cyanobacteria',
                        children: [
                            {
                                name: 'GLOVI'
                            },
                            {
                                name: 'SYNY3'
                            }
                        ]
                    },
                    {
                        name: 'LEPIN'
                    },
                    {
                        name: 'BACTN'
                    },
                    {
                        name: 'CHLTR'
                    },
                    {
                        name: 'AQUAE'
                    },
                    {
                        name: 'RHOBA'
                    },
                    {
                        name: 'THEYD'
                    },
                    {
                        name: 'DICTD'
                    },
                    {
                        name: 'FUSNN'
                    },
                    {
                        name: 'Proteobacteria',
                        children: [
                            {
                                name: 'HELPY'
                            },
                            {
                                name: 'NEIMB'
                            },
                            {
                                name: 'GEOSL'
                            },
                            {
                                name: 'BRADU'
                            },
                            {
                                name: 'Gammaproteobacteria',
                                children: [
                                    {
                                        name: 'COXBU'
                                    },
                                    {
                                        name: 'HAEIN'
                                    },
                                    {
                                        name: 'SHEON'
                                    },
                                    {
                                        name: 'VIBCH'
                                    },
                                    {
                                        name: 'XANCP'
                                    },
                                    {
                                        name: 'PSEAE'
                                    },
                                    {
                                        name: 'Enterobacteriaceae',
                                        children: [
                                            {
                                                name: 'SALTY'
                                            },
                                            {
                                                name: 'YERPE'
                                            },
                                            {
                                                name: 'ECOLI'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

export const speciesTree = [{label:"LUCA",data:"LUCA",expanded:true,children:[{label:"Archaea-Eukaryota",data:"Archaea-Eukaryota",expanded:true,children:[{label:"Eukaryota",data:"Eukaryota",expanded:true,children:[{label:"Unikonts",data:"Unikonts",expanded:true,children:[{label:"Opisthokonts",data:"Opisthokonts",expanded:true,children:[{label:"Metazoa-Choanoflagellida",data:"Metazoa-Choanoflagellida",expanded:true,children:[{label:"Eumetazoa",data:"Eumetazoa",expanded:true,children:[{label:"Bilateria",data:"Bilateria",expanded:true,children:[{label:"Deuterostomia",data:"Deuterostomia",expanded:true,children:[{label:"Chordata",data:"Chordata",expanded:true,children:[{label:"Craniata-Cephalochordata",data:"Craniata-Cephalochordata",expanded:true,children:[{label:"Euteleostomi",data:"Euteleostomi",expanded:true,children:[{label:"Tetrapoda",data:"Tetrapoda",expanded:true,children:[{label:"Amniota",data:"Amniota",expanded:true,children:[{label:"Mammalia",data:"Mammalia",expanded:true,children:[{label:"Theria",data:"Theria",expanded:true,children:[{label:"Eutheria",data:"Eutheria",expanded:true,children:[{label:"Euarchontoglires",data:"Euarchontoglires",expanded:true,children:[{label:"Catarrhini",data:"Catarrhini",expanded:true,children:[{label:"Homininae",data:"Homininae",expanded:true,children:[{label:"Homo-Pan",data:"Homo-Pan",expanded:true,children:[{label:"Homo sapiens",data:"HUMAN",leaf:true},{label:"Pan troglodytes",data:"PANTR",leaf:true}]},{label:"Gorilla gorilla gorilla",data:"GORGO",leaf:true}]},{label:"Macaca mulatta",data:"MACMU",leaf:true}]},{label:"Murinae",data:"Murinae",expanded:true,children:[{label:"Mus musculus",data:"MOUSE",leaf:true},{label:"Rattus norvegicus",data:"RAT",leaf:true}]}]},{label:"Laurasiatheria",data:"Laurasiatheria",expanded:true,children:[{label:"Perissodactyla",data:"Perissodactyla",expanded:true,children:[{label:"Artiodactyla",data:"Artiodactyla",expanded:true,children:[{label:"Bos taurus",data:"BOVIN",leaf:true},{label:"Sus scrofa",data:"PIG",leaf:true}]},{label:"Equus caballus",data:"HORSE",leaf:true}]},{label:"Carnivora",data:"Carnivora",expanded:true,children:[{label:"Felis catus",data:"FELCA",leaf:true},{label:"Canis lupus familiaris",data:"CANLF",leaf:true}]}]}]},{label:"Monodelphis domestica",data:"MONDO",leaf:true}]},{label:"Ornithorhynchus anatinus",data:"ORNAN",leaf:true}]},{label:"Sauria",data:"Sauria",expanded:true,children:[{label:"Gallus gallus",data:"CHICK",leaf:true},{label:"Anolis carolinensis",data:"ANOCA",leaf:true}]}]},{label:"Xenopus tropicalis",data:"XENTR",leaf:true}]},{label:"Neopterygii",data:"Neopterygii",expanded:true,children:[{label:"Teleostei",data:"Teleostei",expanded:true,children:[{label:"Oryzias latipes",data:"ORYLA",leaf:true},{label:"Danio rerio",data:"DANRE",leaf:true}]},{label:"lepisosteus oculatus",data:"LEPOC",leaf:true}]}]},{label:"Branchiostoma floridae",data:"BRAFL",leaf:true}]},{label:"Ciona intestinalis",data:"CIOIN",leaf:true}]},{label:"Strongylocentrotus purpuratus",data:"STRPU",leaf:true}]},{label:"Protostomia",data:"Protostomia",expanded:true,children:[{label:"Ecdysozoa",data:"Ecdysozoa",expanded:true,children:[{label:"Rhabditida-Chromadorea",data:"Rhabditida-Chromadorea",expanded:true,children:[{label:"Caenorhabditis",data:"Caenorhabditis",expanded:true,children:[{label:"Caenorhabditis elegans",data:"CAEEL",leaf:true},{label:"Caenorhabditis briggsae",data:"CAEBR",leaf:true}]},{label:"Pristionchus pacificus",data:"PRIPA",leaf:true}]},{label:"Arthropoda",data:"Arthropoda",expanded:true,children:[{label:"Hexapoda-Crustacea",data:"Hexapoda-Crustacea",expanded:true,children:[{label:"Endopterygota",data:"Endopterygota",expanded:true,children:[{label:"Diptera",data:"Diptera",expanded:true,children:[{label:"Drosophila melanogaster",data:"DROME",leaf:true},{label:"Anopheles gambiae",data:"ANOGA",leaf:true}]},{label:"Tribolium castaneum",data:"TRICA",leaf:true}]},{label:"Daphnia pulex",data:"DAPPU",leaf:true}]},{label:"Ixodes scapularis",data:"IXOSC",leaf:true}]}]},{label:"helobdella robusta",data:"HELRO",leaf:true}]}]},{label:"Nematostella vectensis",data:"NEMVE",leaf:true},{label:"Trichoplax adhaerens",data:"TRIAD",leaf:true}]},{label:"Monosiga brevicollis",data:"MONBE",leaf:true}]},{label:"Fungi",data:"Fungi",expanded:true,children:[{label:"Dikarya",data:"Dikarya",expanded:true,children:[{label:"Ascomycota",data:"Ascomycota",expanded:true,children:[{label:"Pezizomycotina-Saccharomycotina",data:"Pezizomycotina-Saccharomycotina",expanded:true,children:[{label:"Saccharomycetales",data:"Saccharomycetales",expanded:true,children:[{label:"Saccharomycetaceae-Candida",data:"Saccharomycetaceae-Candida",expanded:true,children:[{label:"Saccharomycetaceae",data:"Saccharomycetaceae",expanded:true,children:[{label:"Saccharomyces cerevisiae",data:"YEAST",leaf:true},{label:"Ashbya gossypii",data:"ASHGO",leaf:true}]},{label:"Candida albicans",data:"CANAL",leaf:true}]},{label:"Yarrowia lipolytica",data:"YARLI",leaf:true}]},{label:"Pezizomycotina",data:"Pezizomycotina",expanded:true,children:[{label:"Aspergillus",data:"Aspergillus",expanded:true,children:[{label:"Emericella nidulans",data:"EMENI",leaf:true},{label:"Neosartorya fumigata",data:"ASPFU",leaf:true}]},{label:"Sordariomycetes-Leotiomycetes",data:"Sordariomycetes-Leotiomycetes",expanded:true,children:[{label:"Sordariomyceta",data:"Sordariomyceta",expanded:true,children:[{label:"Neurospora crassa",data:"NEUCR",leaf:true},{label:"Sclerotinia sclerotiorum",data:"SCLS1",leaf:true}]},{label:"Phaeosphaeria nodorum",data:"PHANO",leaf:true}]}]}]},{label:"Schizosaccharomyces pombe",data:"SCHPO",leaf:true}]},{label:"Basidiomycota",data:"Basidiomycota",expanded:true,children:[{label:"Cryptococcus neoformans",data:"CRYNJ",leaf:true},{label:"Ustilago maydis",data:"USTMA",leaf:true},{label:"Puccinia graminis",data:"PUCGT",leaf:true}]}]},{label:"Batrachochytrium dendrobatidis",data:"BATDJ",leaf:true}]}]},{label:"Amoebozoa",data:"Amoebozoa",expanded:true,children:[{label:"Entamoeba histolytica",data:"ENTHI",leaf:true},{label:"Dictyostelium",data:"Dictyostelium",expanded:true,children:[{label:"Dictyostelium discoideum",data:"DICDI",leaf:true},{label:"Dictyostelium purpureum",data:"DICPU",leaf:true}]}]}]},{label:"Alveolata-Stramenopiles",data:"Alveolata-Stramenopiles",expanded:true,children:[{label:"Alveolata",data:"Alveolata",expanded:true,children:[{label:"Plasmodium falciparum",data:"PLAF7",leaf:true},{label:"Paramecium tetraurelia",data:"PARTE",leaf:true}]},{label:"Stramenopiles",data:"Stramenopiles",expanded:true,children:[{label:"Thalassiosira pseudonana",data:"THAPS",leaf:true},{label:"Phytophthora ramorum",data:"PHYRM",leaf:true}]}]},{label:"Excavates",data:"Excavates",expanded:true,children:[{label:"Trypanosomatidae",data:"Trypanosomatidae",expanded:true,children:[{label:"Leishmania major",data:"LEIMA",leaf:true},{label:"Trypanosoma brucei",data:"TRYB2",leaf:true}]},{label:"Fornicata-Parabasalids",data:"Fornicata-Parabasalids",expanded:true,children:[{label:"Giardia intestinalis",data:"GIAIC",leaf:true},{label:"Trichomonas vaginalis",data:"TRIVA",leaf:true}]}]},{label:"Viridiplantae",data:"Viridiplantae",expanded:true,children:[{label:"Chlamydomonas reinhardtii",data:"CHLRE",leaf:true},{label:"Embryophyta",data:"Embryophyta",expanded:true,children:[{label:"Magnoliophyta",data:"Magnoliophyta",expanded:true,children:[{label:"Poaceae",data:"Poaceae",expanded:true,children:[{label:"Zea mays",data:"MAIZE",leaf:true},{label:"BEP_clade",expanded:true,children:[{label:"Oryza sativa",data:"ORYSJ",leaf:true},{label:"Brachypodium distachyon",data:"BRADI",leaf:true}]}]},{label:"Pentapetalae",data:"Pentapetalae",expanded:true,children:[{label:"Solanum lycopersicum",data:"SOLLC",leaf:true},{label:"rosids",data:"rosids",expanded:true,children:[{label:"Vitis vinifera",data:"VITVI",leaf:true},{label:"Arabidopsis thaliana",data:"ARATH",leaf:true},{label:"fabids",data:"fabids",expanded:true,children:[{label:"Glycine max",data:"SOYBN",leaf:true},{label:"Populus trichocarpa",data:"POPTR",leaf:true}]}]}]}]},{label:"Physcomitrella patens",data:"PHYPA",leaf:true}]}]}]},{label:"Archaea",data:"Archaea",expanded:true,children:[{label:"Nitrosopumilus maritimus",data:"NITMS",leaf:true},{label:"Korarchaeum cryptofilum",data:"KORCO",leaf:true},{label:"Thermoprotei",data:"Thermoprotei",expanded:true,children:[{label:"Sulfolobus solfataricus",data:"SULSO",leaf:true},{label:"Pyrobaculum aerophilum",data:"PYRAE",leaf:true}]},{label:"Euryarchaeota",data:"Euryarchaeota",expanded:true,children:[{label:"Methanosarcina acetivorans",data:"METAC",leaf:true},{label:"Methanocaldococcus jannaschii",data:"METJA",leaf:true},{label:"Halobacterium salinarum",data:"HALSA",leaf:true},{label:"Thermococcus kodakaraensis",data:"THEKO",leaf:true}]}]}]},{label:"Eubacteria",data:"Eubacteria",expanded:true,children:[{label:"Firmicutes",data:"Firmicutes",expanded:true,children:[{label:"Clostridium botulinum",data:"CLOBH",leaf:true},{label:"Bacilli",data:"Bacilli",expanded:true,children:[{label:"Streptococcus pneumoniae",data:"STRR6",leaf:true},{label:"Bacillales",data:"Bacillales",expanded:true,children:[{label:"Staphylococcus aureus",data:"STAA8",leaf:true},{label:"Listeria monocytogenes",data:"LISMO",leaf:true},{label:"Bacillus",data:"Bacillus",expanded:true,children:[{label:"Bacillus subtilis",data:"BACSU",leaf:true},{label:"Bacillus cereus",data:"BACCR",leaf:true}]}]}]}]},{label:"Actinomycetales",data:"Actinomycetales",expanded:true,children:[{label:"Streptomyces coelicolor",data:"STRCO",leaf:true},{label:"Mycobacterium tuberculosis",data:"MYCTU",leaf:true}]},{label:"mycoplasma genitalium",data:"MYCGE",leaf:true},{label:"Thermotoga maritima",data:"THEMA",leaf:true},{label:"Deinococcus radiodurans",data:"DEIRA",leaf:true},{label:"Chloroflexus aurantiacus",data:"CHLAA",leaf:true},{label:"Cyanobacteria",data:"Cyanobacteria",expanded:true,children:[{label:"Gloeobacter violaceus",data:"GLOVI",leaf:true},{label:"Synechocystis",data:"SYNY3",leaf:true}]},{label:"Leptospira interrogans",data:"LEPIN",leaf:true},{label:"Bacteroides thetaiotaomicron",data:"BACTN",leaf:true},{label:"Chlamydia trachomatis",data:"CHLTR",leaf:true},{label:"Aquifex aeolicus",data:"AQUAE",leaf:true},{label:"Rhodopirellula baltica",data:"RHOBA",leaf:true},{label:"Thermodesulfovibrio yellowstonii",data:"THEYD",leaf:true},{label:"Dictyoglomus turgidum",data:"DICTD",leaf:true},{label:"Fusobacterium nucleatum",data:"FUSNN",leaf:true},{label:"Proteobacteria",data:"Proteobacteria",expanded:true,children:[{label:"Helicobacter pylori",data:"HELPY",leaf:true},{label:"Neisseria meningitidis serogroup b",data:"NEIMB",leaf:true},{label:"Geobacter sulfurreducens",data:"GEOSL",leaf:true},{label:"Bradyrhizobium diazoefficiens",data:"BRADU",leaf:true},{label:"Gammaproteobacteria",data:"Gammaproteobacteria",expanded:true,children:[{label:"Coxiella burnetii",data:"COXBU",leaf:true},{label:"Haemophilus influenzae",data:"HAEIN",leaf:true},{label:"Shewanella oneidensis",data:"SHEON",leaf:true},{label:"Vibrio cholerae",data:"VIBCH",leaf:true},{label:"Xanthomonas campestris",data:"XANCP",leaf:true},{label:"Pseudomonas aeruginosa",data:"PSEAE",leaf:true},{label:"Enterobacteriaceae",data:"Enterobacteriaceae",expanded:true,children:[{label:"Salmonella typhimurium",data:"SALTY",leaf:true},{label:"Yersinia pestis",data:"YERPE",leaf:true},{label:"Escherichia coli",data:"ECOLI",leaf:true}]}]}]}]}]}];

export const treeNodes = [{name:"LUCA",short_name:"LUCA",taxon_id:"",children:[{name:"Archaea-Eukaryota",short_name:"Archaea-Eukaryota",taxon_id:"",children:[{name:"Eukaryota",short_name:"Eukaryota",taxon_id:"2759",children:[{name:"Unikonts",short_name:"Unikonts",taxon_id:"",children:[{name:"Opisthokonts",short_name:"Opisthokonts",taxon_id:"33154",children:[{name:"Metazoa-Choanoflagellida",short_name:"Metazoa-Choanoflagellida",taxon_id:"",children:[{name:"Eumetazoa",short_name:"Eumetazoa",taxon_id:"6072",children:[{name:"Bilateria",short_name:"Bilateria",taxon_id:"33213",children:[{name:"Deuterostomia",short_name:"Deuterostomia",taxon_id:"33511",children:[{name:"Chordata",short_name:"Chordata",taxon_id:"7711",children:[{name:"Craniata-Cephalochordata",short_name:"Craniata-Cephalochordata",taxon_id:"",children:[{name:"Euteleostomi",short_name:"Euteleostomi",taxon_id:"117571",children:[{name:"Tetrapoda",short_name:"Tetrapoda",taxon_id:"32523",children:[{name:"Amniota",short_name:"Amniota",taxon_id:"32524",children:[{name:"Mammalia",short_name:"Mammalia",taxon_id:"40674",children:[{name:"Theria",short_name:"Theria",taxon_id:"",children:[{name:"Eutheria",short_name:"Eutheria",taxon_id:"9347",children:[{name:"Euarchontoglires",short_name:"Euarchontoglires",taxon_id:"314146",children:[{name:"Catarrhini",short_name:"Catarrhini",taxon_id:"9526",children:[{name:"Homininae",short_name:"Homininae",taxon_id:"207598",children:[{name:"Homo-Pan",short_name:"Homo-Pan",taxon_id:"",children:[{name:"Homo sapiens",short_name:"HUMAN",taxon_id:"9606"},{name:"Pan troglodytes",short_name:"PANTR",taxon_id:"9598"}]},{name:"Gorilla gorilla gorilla",short_name:"GORGO",taxon_id:"9595"}]},{name:"Macaca mulatta",short_name:"MACMU",taxon_id:"9544"}]},{name:"Murinae",short_name:"Murinae",taxon_id:"39107",children:[{name:"Mus musculus",short_name:"MOUSE",taxon_id:"10090"},{name:"Rattus norvegicus",short_name:"RAT",taxon_id:"10116"}]}]},{name:"Laurasiatheria",short_name:"Laurasiatheria",taxon_id:"314145",children:[{name:"Perissodactyla",short_name:"Perissodactyla",taxon_id:"9787",children:[{name:"Artiodactyla",short_name:"Artiodactyla",taxon_id:"",children:[{name:"Bos taurus",short_name:"BOVIN",taxon_id:"9913"},{name:"Sus scrofa",short_name:"PIG",taxon_id:"9823"}]},{name:"Equus caballus",short_name:"HORSE",taxon_id:"9796"}]},{name:"Carnivora",short_name:"Carnivora",taxon_id:"33554",children:[{name:"Felis catus",short_name:"FELCA",taxon_id:"9685"},{name:"Canis lupus familiaris",short_name:"CANLF",taxon_id:"9615"}]}]}]},{name:"Monodelphis domestica",short_name:"MONDO",taxon_id:"13616"}]},{name:"Ornithorhynchus anatinus",short_name:"ORNAN",taxon_id:"9258"}]},{name:"Sauria",short_name:"Sauria",taxon_id:"32561",children:[{name:"Gallus gallus",short_name:"CHICK",taxon_id:"9031"},{name:"Anolis carolinensis",short_name:"ANOCA",taxon_id:"28377"}]}]},{name:"Xenopus tropicalis",short_name:"XENTR",taxon_id:"8364"}]},{name:"Neopterygii",short_name:"Neopterygii",taxon_id:"41665",children:[{name:"Teleostei",short_name:"Teleostei",taxon_id:"32443",children:[{name:"Oryzias latipes",short_name:"ORYLA",taxon_id:"8090"},{name:"Danio rerio",short_name:"DANRE",taxon_id:"7955"}]},{name:"lepisosteus oculatus",short_name:"LEPOC",taxon_id:"7918"}]}]},{name:"Branchiostoma floridae",short_name:"BRAFL",taxon_id:"7739"}]},{name:"Ciona intestinalis",short_name:"CIOIN",taxon_id:"7719"}]},{name:"Strongylocentrotus purpuratus",short_name:"STRPU",taxon_id:"7668"}]},{name:"Protostomia",short_name:"Protostomia",taxon_id:"33317",children:[{name:"Ecdysozoa",short_name:"Ecdysozoa",taxon_id:"1206794",children:[{name:"Rhabditida-Chromadorea",short_name:"Rhabditida-Chromadorea",taxon_id:"",children:[{name:"Caenorhabditis",short_name:"Caenorhabditis",taxon_id:"6237",children:[{name:"Caenorhabditis elegans",short_name:"CAEEL",taxon_id:"6239"},{name:"Caenorhabditis briggsae",short_name:"CAEBR",taxon_id:"6238"}]},{name:"Pristionchus pacificus",short_name:"PRIPA",taxon_id:"54126"}]},{name:"Arthropoda",short_name:"Arthropoda",taxon_id:"6656",children:[{name:"Hexapoda-Crustacea",short_name:"Hexapoda-Crustacea",taxon_id:"",children:[{name:"Endopterygota",short_name:"Endopterygota",taxon_id:"33392",children:[{name:"Diptera",short_name:"Diptera",taxon_id:"7147",children:[{name:"Drosophila melanogaster",short_name:"DROME",taxon_id:"7227"},{name:"Anopheles gambiae",short_name:"ANOGA",taxon_id:"7165"}]},{name:"Tribolium castaneum",short_name:"TRICA",taxon_id:"7070"}]},{name:"Daphnia pulex",short_name:"DAPPU",taxon_id:"6669"}]},{name:"Ixodes scapularis",short_name:"IXOSC",taxon_id:"6945"}]}]},{name:"helobdella robusta",short_name:"HELRO",taxon_id:"6412"}]}]},{name:"Nematostella vectensis",short_name:"NEMVE",taxon_id:"45351"},{name:"Trichoplax adhaerens",short_name:"TRIAD",taxon_id:"10228"}]},{name:"Monosiga brevicollis",short_name:"MONBE",taxon_id:"81824"}]},{name:"Fungi",short_name:"Fungi",taxon_id:"4751",children:[{name:"Dikarya",short_name:"Dikarya",taxon_id:"451864",children:[{name:"Ascomycota",short_name:"Ascomycota",taxon_id:"4890",children:[{name:"Pezizomycotina-Saccharomycotina",short_name:"Pezizomycotina-Saccharomycotina",taxon_id:"",children:[{name:"Saccharomycetales",short_name:"Saccharomycetales",taxon_id:"4892",children:[{name:"Saccharomycetaceae-Candida",short_name:"Saccharomycetaceae-Candida",taxon_id:"",children:[{name:"Saccharomycetaceae",short_name:"Saccharomycetaceae",taxon_id:"4893",children:[{name:"Saccharomyces cerevisiae",short_name:"YEAST",taxon_id:"559292"},{name:"Ashbya gossypii",short_name:"ASHGO",taxon_id:"284811"}]},{name:"Candida albicans",short_name:"CANAL",taxon_id:"237561"}]},{name:"Yarrowia lipolytica",short_name:"YARLI",taxon_id:"284591"}]},{name:"Pezizomycotina",short_name:"Pezizomycotina",taxon_id:"147538",children:[{name:"Aspergillus",short_name:"Aspergillus",taxon_id:"5052",children:[{name:"Emericella nidulans",short_name:"EMENI",taxon_id:"227321"},{name:"Neosartorya fumigata",short_name:"ASPFU",taxon_id:"330879"}]},{name:"Sordariomycetes-Leotiomycetes",short_name:"Sordariomycetes-Leotiomycetes",taxon_id:"",children:[{name:"Sordariomyceta",short_name:"Sordariomyceta",taxon_id:"715989",children:[{name:"Neurospora crassa",short_name:"NEUCR",taxon_id:"367110"},{name:"Sclerotinia sclerotiorum",short_name:"SCLS1",taxon_id:"665079"}]},{name:"Phaeosphaeria nodorum",short_name:"PHANO",taxon_id:"321614"}]}]}]},{name:"Schizosaccharomyces pombe",short_name:"SCHPO",taxon_id:"284812"}]},{name:"Basidiomycota",short_name:"Basidiomycota",taxon_id:"5204",children:[{name:"Cryptococcus neoformans",short_name:"CRYNJ",taxon_id:"214684"},{name:"Ustilago maydis",short_name:"USTMA",taxon_id:"237631"},{name:"Puccinia graminis",short_name:"PUCGT",taxon_id:"418459"}]}]},{name:"Batrachochytrium dendrobatidis",short_name:"BATDJ",taxon_id:"684364"}]}]},{name:"Amoebozoa",short_name:"Amoebozoa",taxon_id:"554915",children:[{name:"Entamoeba histolytica",short_name:"ENTHI",taxon_id:"5759"},{name:"Dictyostelium",short_name:"Dictyostelium",taxon_id:"5782",children:[{name:"Dictyostelium discoideum",short_name:"DICDI",taxon_id:"44689"},{name:"Dictyostelium purpureum",short_name:"DICPU",taxon_id:"5786"}]}]}]},{name:"Alveolata-Stramenopiles",short_name:"Alveolata-Stramenopiles",taxon_id:"",children:[{name:"Alveolata",short_name:"Alveolata",taxon_id:"33630",children:[{name:"Plasmodium falciparum",short_name:"PLAF7",taxon_id:"36329"},{name:"Paramecium tetraurelia",short_name:"PARTE",taxon_id:"5888"}]},{name:"Stramenopiles",short_name:"Stramenopiles",taxon_id:"33634",children:[{name:"Thalassiosira pseudonana",short_name:"THAPS",taxon_id:"35128"},{name:"Phytophthora ramorum",short_name:"PHYRM",taxon_id:"164328"}]}]},{name:"Excavates",short_name:"Excavates",taxon_id:"",children:[{name:"Trypanosomatidae",short_name:"Trypanosomatidae",taxon_id:"5654",children:[{name:"Leishmania major",short_name:"LEIMA",taxon_id:"5664"},{name:"Trypanosoma brucei",short_name:"TRYB2",taxon_id:"185431"}]},{name:"Fornicata-Parabasalids",short_name:"Fornicata-Parabasalids",taxon_id:"",children:[{name:"Giardia intestinalis",short_name:"GIAIC",taxon_id:"184922"},{name:"Trichomonas vaginalis",short_name:"TRIVA",taxon_id:"5722"}]}]},{name:"Viridiplantae",short_name:"Viridiplantae",taxon_id:"33090",children:[{name:"Chlamydomonas reinhardtii",short_name:"CHLRE",taxon_id:"3055"},{name:"Embryophyta",short_name:"Embryophyta",taxon_id:"3193",children:[{name:"Magnoliophyta",short_name:"Magnoliophyta",taxon_id:"3398",children:[{name:"Poaceae",short_name:"Poaceae",taxon_id:"4479",children:[{name:"Zea mays",short_name:"MAIZE",taxon_id:"4577"},{name:"BEP_clade",children:[{name:"Oryza sativa",short_name:"ORYSJ",taxon_id:"39947"},{name:"Brachypodium distachyon",short_name:"BRADI",taxon_id:"15368"}]}]},{name:"Pentapetalae",short_name:"Pentapetalae",taxon_id:"1437201",children:[{name:"Solanum lycopersicum",short_name:"SOLLC",taxon_id:"4081"},{name:"rosids",short_name:"rosids",taxon_id:"71275",children:[{name:"Vitis vinifera",short_name:"VITVI",taxon_id:"29760"},{name:"Arabidopsis thaliana",short_name:"ARATH",taxon_id:"3702"},{name:"fabids",short_name:"fabids",taxon_id:"91835",children:[{name:"Glycine max",short_name:"SOYBN",taxon_id:"3847"},{name:"Populus trichocarpa",short_name:"POPTR",taxon_id:"3694"}]}]}]}]},{name:"Physcomitrella patens",short_name:"PHYPA",taxon_id:"3218"}]}]}]},{name:"Archaea",short_name:"Archaea",taxon_id:"2157",children:[{name:"Nitrosopumilus maritimus",short_name:"NITMS",taxon_id:"436308"},{name:"Korarchaeum cryptofilum",short_name:"KORCO",taxon_id:"374847"},{name:"Thermoprotei",short_name:"Thermoprotei",taxon_id:"183924",children:[{name:"Sulfolobus solfataricus",short_name:"SULSO",taxon_id:"273057"},{name:"Pyrobaculum aerophilum",short_name:"PYRAE",taxon_id:"178306"}]},{name:"Euryarchaeota",short_name:"Euryarchaeota",taxon_id:"28890",children:[{name:"Methanosarcina acetivorans",short_name:"METAC",taxon_id:"188937"},{name:"Methanocaldococcus jannaschii",short_name:"METJA",taxon_id:"243232"},{name:"Halobacterium salinarum",short_name:"HALSA",taxon_id:"64091"},{name:"Thermococcus kodakaraensis",short_name:"THEKO",taxon_id:"69014"}]}]}]},{name:"Eubacteria",short_name:"Eubacteria",taxon_id:"2",children:[{name:"Firmicutes",short_name:"Firmicutes",taxon_id:"1239",children:[{name:"Clostridium botulinum",short_name:"CLOBH",taxon_id:"441771"},{name:"Bacilli",short_name:"Bacilli",taxon_id:"91061",children:[{name:"Streptococcus pneumoniae",short_name:"STRR6",taxon_id:"171101"},{name:"Bacillales",short_name:"Bacillales",taxon_id:"1385",children:[{name:"Staphylococcus aureus",short_name:"STAA8",taxon_id:"93061"},{name:"Listeria monocytogenes",short_name:"LISMO",taxon_id:"169963"},{name:"Bacillus",short_name:"Bacillus",taxon_id:"1386",children:[{name:"Bacillus subtilis",short_name:"BACSU",taxon_id:"224308"},{name:"Bacillus cereus",short_name:"BACCR",taxon_id:"226900"}]}]}]}]},{name:"Actinomycetales",short_name:"Actinomycetales",taxon_id:"2037",children:[{name:"Streptomyces coelicolor",short_name:"STRCO",taxon_id:"100226"},{name:"Mycobacterium tuberculosis",short_name:"MYCTU",taxon_id:"83332"}]},{name:"mycoplasma genitalium",short_name:"MYCGE",taxon_id:"243273"},{name:"Thermotoga maritima",short_name:"THEMA",taxon_id:"243274"},{name:"Deinococcus radiodurans",short_name:"DEIRA",taxon_id:"243230"},{name:"Chloroflexus aurantiacus",short_name:"CHLAA",taxon_id:"324602"},{name:"Cyanobacteria",short_name:"Cyanobacteria",taxon_id:"1117",children:[{name:"Gloeobacter violaceus",short_name:"GLOVI",taxon_id:"251221"},{name:"Synechocystis",short_name:"SYNY3",taxon_id:"1111708"}]},{name:"Leptospira interrogans",short_name:"LEPIN",taxon_id:"189518"},{name:"Bacteroides thetaiotaomicron",short_name:"BACTN",taxon_id:"226186"},{name:"Chlamydia trachomatis",short_name:"CHLTR",taxon_id:"272561"},{name:"Aquifex aeolicus",short_name:"AQUAE",taxon_id:"224324"},{name:"Rhodopirellula baltica",short_name:"RHOBA",taxon_id:"243090"},{name:"Thermodesulfovibrio yellowstonii",short_name:"THEYD",taxon_id:"289376"},{name:"Dictyoglomus turgidum",short_name:"DICTD",taxon_id:"515635"},{name:"Fusobacterium nucleatum",short_name:"FUSNN",taxon_id:"190304"},{name:"Proteobacteria",short_name:"Proteobacteria",taxon_id:"1224",children:[{name:"Helicobacter pylori",short_name:"HELPY",taxon_id:"85962"},{name:"Neisseria meningitidis serogroup b",short_name:"NEIMB",taxon_id:"122586"},{name:"Geobacter sulfurreducens",short_name:"GEOSL",taxon_id:"243231"},{name:"Bradyrhizobium diazoefficiens",short_name:"BRADU",taxon_id:"224911"},{name:"Gammaproteobacteria",short_name:"Gammaproteobacteria",taxon_id:"1236",children:[{name:"Coxiella burnetii",short_name:"COXBU",taxon_id:"227377"},{name:"Haemophilus influenzae",short_name:"HAEIN",taxon_id:"71421"},{name:"Shewanella oneidensis",short_name:"SHEON",taxon_id:"211586"},{name:"Vibrio cholerae",short_name:"VIBCH",taxon_id:"243277"},{name:"Xanthomonas campestris",short_name:"XANCP",taxon_id:"190485"},{name:"Pseudomonas aeruginosa",short_name:"PSEAE",taxon_id:"208964"},{name:"Enterobacteriaceae",short_name:"Enterobacteriaceae",taxon_id:"543",children:[{name:"Salmonella typhimurium",short_name:"SALTY",taxon_id:"99287"},{name:"Yersinia pestis",short_name:"YERPE",taxon_id:"632"},{name:"Escherichia coli",short_name:"ECOLI",taxon_id:"83333"}]}]}]}]}]}];

export function generateSpeciesGraph() {
    let resultNodes = [];
    let resultLinks = [];

    function addSpeciesIds(nodes) {
        _.each(nodes, function (node) {
            node.id = uuid();
            node.children && addSpeciesIds(node.children)
        });
    }

    function getSpeciesNodes(nodes) {
        let result = [];
        _.each(nodes, function (node) {
            result.push({ id: node.id, label: node.label, short_label: node.data });
            node.children && (result = _.union(result, getSpeciesNodes(node.children)))
        });
        return result;
    }

    function getSpeciesLinks(parentId, nodes) {
        let result = [];
        _.each(nodes, function (node) {
            result.push({ source: parentId, target: node.id });
            node.children && (result = _.union(result, getSpeciesLinks(node.id, node.children)))
        });
        return result;
    }
    addSpeciesIds(speciesTree);
    resultNodes = getSpeciesNodes(speciesTree);
    resultLinks = getSpeciesLinks(1, speciesTree);

    console.dir(resultNodes);
    console.dir(resultLinks);

    return { links: resultLinks, nodes: resultNodes };
}