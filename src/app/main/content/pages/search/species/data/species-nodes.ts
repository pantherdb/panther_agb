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

export const treeNodes = [{name:"LUCA",short_name:"LUCA",taxon_id:"",children:[{name:"Archaea-Eukaryota",short_name:"Archaea-Eukaryota",taxon_id:"",children:[{name:"Eukaryota",short_name:"Eukaryota",taxon_id:"2759",children:[{name:"Unikonts",short_name:"Unikonts",taxon_id:"",children:[{name:"Opisthokonts",short_name:"Opisthokonts",taxon_id:"33154",children:[{name:"Metazoa-Choanoflagellida",short_name:"Metazoa-Choanoflagellida",taxon_id:"",children:[{name:"Eumetazoa",short_name:"Eumetazoa",taxon_id:"6072",children:[{name:"Bilateria",short_name:"Bilateria",taxon_id:"33213",children:[{name:"Deuterostomia",short_name:"Deuterostomia",taxon_id:"33511",children:[{name:"Chordata",short_name:"Chordata",taxon_id:"7711",children:[{name:"Craniata-Cephalochordata",short_name:"Craniata-Cephalochordata",taxon_id:"",children:[{name:"Euteleostomi",short_name:"Euteleostomi",taxon_id:"117571",children:[{name:"Tetrapoda",short_name:"Tetrapoda",taxon_id:"32523",children:[{name:"Amniota",short_name:"Amniota",taxon_id:"32524",children:[{name:"Mammalia",short_name:"Mammalia",taxon_id:"40674",children:[{name:"Theria",short_name:"Theria",taxon_id:"",children:[{name:"Eutheria",short_name:"Eutheria",taxon_id:"9347",children:[{name:"Euarchontoglires",short_name:"Euarchontoglires",taxon_id:"314146",children:[{name:"Catarrhini",short_name:"Catarrhini",taxon_id:"9526",children:[{name:"Homininae",short_name:"Homininae",taxon_id:"207598",children:[{name:"Homo-Pan",short_name:"Homo-Pan",taxon_id:"",children:[{name:"Homosapiens",short_name:"HUMAN",taxon_id:"9606"},{name:"Pantroglodytes",short_name:"PANTR",taxon_id:"9598"}]},{name:"Gorillagorillagorilla",short_name:"GORGO",taxon_id:"9595"}]},{name:"Macacamulatta",short_name:"MACMU",taxon_id:"9544"}]},{name:"Murinae",short_name:"Murinae",taxon_id:"39107",children:[{name:"Musmusculus",short_name:"MOUSE",taxon_id:"10090"},{name:"Rattusnorvegicus",short_name:"RAT",taxon_id:"10116"}]}]},{name:"Laurasiatheria",short_name:"Laurasiatheria",taxon_id:"314145",children:[{name:"Perissodactyla",short_name:"Perissodactyla",taxon_id:"9787",children:[{name:"Artiodactyla",short_name:"Artiodactyla",taxon_id:"",children:[{name:"Bostaurus",short_name:"BOVIN",taxon_id:"9913"},{name:"Susscrofa",short_name:"PIG",taxon_id:"9823"}]},{name:"Equuscaballus",short_name:"HORSE",taxon_id:"9796"}]},{name:"Carnivora",short_name:"Carnivora",taxon_id:"33554",children:[{name:"Feliscatus",short_name:"FELCA",taxon_id:"9685"},{name:"Canislupusfamiliaris",short_name:"CANLF",taxon_id:"9615"}]}]}]},{name:"Monodelphisdomestica",short_name:"MONDO",taxon_id:"13616"}]},{name:"Ornithorhynchusanatinus",short_name:"ORNAN",taxon_id:"9258"}]},{name:"Sauria",short_name:"Sauria",taxon_id:"32561",children:[{name:"Gallusgallus",short_name:"CHICK",taxon_id:"9031"},{name:"Anoliscarolinensis",short_name:"ANOCA",taxon_id:"28377"}]}]},{name:"Xenopustropicalis",short_name:"XENTR",taxon_id:"8364"}]},{name:"Neopterygii",short_name:"Neopterygii",taxon_id:"41665",children:[{name:"Teleostei",short_name:"Teleostei",taxon_id:"32443",children:[{name:"Oryziaslatipes",short_name:"ORYLA",taxon_id:"8090"},{name:"Daniorerio",short_name:"DANRE",taxon_id:"7955"}]},{name:"lepisosteusoculatus",short_name:"LEPOC",taxon_id:"7918"}]}]},{name:"Branchiostomafloridae",short_name:"BRAFL",taxon_id:"7739"}]},{name:"Cionaintestinalis",short_name:"CIOIN",taxon_id:"7719"}]},{name:"Strongylocentrotuspurpuratus",short_name:"STRPU",taxon_id:"7668"}]},{name:"Protostomia",short_name:"Protostomia",taxon_id:"33317",children:[{name:"Ecdysozoa",short_name:"Ecdysozoa",taxon_id:"1206794",children:[{name:"Rhabditida-Chromadorea",short_name:"Rhabditida-Chromadorea",taxon_id:"",children:[{name:"Caenorhabditis",short_name:"Caenorhabditis",taxon_id:"6237",children:[{name:"Caenorhabditiselegans",short_name:"CAEEL",taxon_id:"6239"},{name:"Caenorhabditisbriggsae",short_name:"CAEBR",taxon_id:"6238"}]},{name:"Pristionchuspacificus",short_name:"PRIPA",taxon_id:"54126"}]},{name:"Arthropoda",short_name:"Arthropoda",taxon_id:"6656",children:[{name:"Hexapoda-Crustacea",short_name:"Hexapoda-Crustacea",taxon_id:"",children:[{name:"Endopterygota",short_name:"Endopterygota",taxon_id:"33392",children:[{name:"Diptera",short_name:"Diptera",taxon_id:"7147",children:[{name:"Drosophilamelanogaster",short_name:"DROME",taxon_id:"7227"},{name:"Anophelesgambiae",short_name:"ANOGA",taxon_id:"7165"}]},{name:"Triboliumcastaneum",short_name:"TRICA",taxon_id:"7070"}]},{name:"Daphniapulex",short_name:"DAPPU",taxon_id:"6669"}]},{name:"Ixodesscapularis",short_name:"IXOSC",taxon_id:"6945"}]}]},{name:"helobdellarobusta",short_name:"HELRO",taxon_id:"6412"}]}]},{name:"Nematostellavectensis",short_name:"NEMVE",taxon_id:"45351"},{name:"Trichoplaxadhaerens",short_name:"TRIAD",taxon_id:"10228"}]},{name:"Monosigabrevicollis",short_name:"MONBE",taxon_id:"81824"}]},{name:"Fungi",short_name:"Fungi",taxon_id:"4751",children:[{name:"Dikarya",short_name:"Dikarya",taxon_id:"451864",children:[{name:"Ascomycota",short_name:"Ascomycota",taxon_id:"4890",children:[{name:"Pezizomycotina-Saccharomycotina",short_name:"Pezizomycotina-Saccharomycotina",taxon_id:"",children:[{name:"Saccharomycetales",short_name:"Saccharomycetales",taxon_id:"4892",children:[{name:"Saccharomycetaceae-Candida",short_name:"Saccharomycetaceae-Candida",taxon_id:"",children:[{name:"Saccharomycetaceae",short_name:"Saccharomycetaceae",taxon_id:"4893",children:[{name:"Saccharomycescerevisiae",short_name:"YEAST",taxon_id:"559292"},{name:"Ashbyagossypii",short_name:"ASHGO",taxon_id:"284811"}]},{name:"Candidaalbicans",short_name:"CANAL",taxon_id:"237561"}]},{name:"Yarrowialipolytica",short_name:"YARLI",taxon_id:"284591"}]},{name:"Pezizomycotina",short_name:"Pezizomycotina",taxon_id:"147538",children:[{name:"Aspergillus",short_name:"Aspergillus",taxon_id:"5052",children:[{name:"Emericellanidulans",short_name:"EMENI",taxon_id:"227321"},{name:"Neosartoryafumigata",short_name:"ASPFU",taxon_id:"330879"}]},{name:"Sordariomycetes-Leotiomycetes",short_name:"Sordariomycetes-Leotiomycetes",taxon_id:"",children:[{name:"Sordariomyceta",short_name:"Sordariomyceta",taxon_id:"715989",children:[{name:"Neurosporacrassa",short_name:"NEUCR",taxon_id:"367110"},{name:"Sclerotiniasclerotiorum",short_name:"SCLS1",taxon_id:"665079"}]},{name:"Phaeosphaerianodorum",short_name:"PHANO",taxon_id:"321614"}]}]}]},{name:"Schizosaccharomycespombe",short_name:"SCHPO",taxon_id:"284812"}]},{name:"Basidiomycota",short_name:"Basidiomycota",taxon_id:"5204",children:[{name:"Cryptococcusneoformans",short_name:"CRYNJ",taxon_id:"214684"},{name:"Ustilagomaydis",short_name:"USTMA",taxon_id:"237631"},{name:"Pucciniagraminis",short_name:"PUCGT",taxon_id:"418459"}]}]},{name:"Batrachochytriumdendrobatidis",short_name:"BATDJ",taxon_id:"684364"}]}]},{name:"Amoebozoa",short_name:"Amoebozoa",taxon_id:"554915",children:[{name:"Entamoebahistolytica",short_name:"ENTHI",taxon_id:"5759"},{name:"Dictyostelium",short_name:"Dictyostelium",taxon_id:"5782",children:[{name:"Dictyosteliumdiscoideum",short_name:"DICDI",taxon_id:"44689"},{name:"Dictyosteliumpurpureum",short_name:"DICPU",taxon_id:"5786"}]}]}]},{name:"Alveolata-Stramenopiles",short_name:"Alveolata-Stramenopiles",taxon_id:"",children:[{name:"Alveolata",short_name:"Alveolata",taxon_id:"33630",children:[{name:"Plasmodiumfalciparum",short_name:"PLAF7",taxon_id:"36329"},{name:"Parameciumtetraurelia",short_name:"PARTE",taxon_id:"5888"}]},{name:"Stramenopiles",short_name:"Stramenopiles",taxon_id:"33634",children:[{name:"Thalassiosirapseudonana",short_name:"THAPS",taxon_id:"35128"},{name:"Phytophthoraramorum",short_name:"PHYRM",taxon_id:"164328"}]}]},{name:"Excavates",short_name:"Excavates",taxon_id:"",children:[{name:"Trypanosomatidae",short_name:"Trypanosomatidae",taxon_id:"5654",children:[{name:"Leishmaniamajor",short_name:"LEIMA",taxon_id:"5664"},{name:"Trypanosomabrucei",short_name:"TRYB2",taxon_id:"185431"}]},{name:"Fornicata-Parabasalids",short_name:"Fornicata-Parabasalids",taxon_id:"",children:[{name:"Giardiaintestinalis",short_name:"GIAIC",taxon_id:"184922"},{name:"Trichomonasvaginalis",short_name:"TRIVA",taxon_id:"5722"}]}]},{name:"Viridiplantae",short_name:"Viridiplantae",taxon_id:"33090",children:[{name:"Chlamydomonasreinhardtii",short_name:"CHLRE",taxon_id:"3055"},{name:"Embryophyta",short_name:"Embryophyta",taxon_id:"3193",children:[{name:"Magnoliophyta",short_name:"Magnoliophyta",taxon_id:"3398",children:[{name:"Poaceae",short_name:"Poaceae",taxon_id:"4479",children:[{name:"Zeamays",short_name:"MAIZE",taxon_id:"4577"},{name:"BEP_clade",children:[{name:"Oryzasativa",short_name:"ORYSJ",taxon_id:"39947"},{name:"Brachypodiumdistachyon",short_name:"BRADI",taxon_id:"15368"}]}]},{name:"Pentapetalae",short_name:"Pentapetalae",taxon_id:"1437201",children:[{name:"Solanumlycopersicum",short_name:"SOLLC",taxon_id:"4081"},{name:"rosids",short_name:"rosids",taxon_id:"71275",children:[{name:"Vitisvinifera",short_name:"VITVI",taxon_id:"29760"},{name:"Arabidopsisthaliana",short_name:"ARATH",taxon_id:"3702"},{name:"fabids",short_name:"fabids",taxon_id:"91835",children:[{name:"Glycinemax",short_name:"SOYBN",taxon_id:"3847"},{name:"Populustrichocarpa",short_name:"POPTR",taxon_id:"3694"}]}]}]}]},{name:"Physcomitrellapatens",short_name:"PHYPA",taxon_id:"3218"}]}]}]},{name:"Archaea",short_name:"Archaea",taxon_id:"2157",children:[{name:"Nitrosopumilusmaritimus",short_name:"NITMS",taxon_id:"436308"},{name:"Korarchaeumcryptofilum",short_name:"KORCO",taxon_id:"374847"},{name:"Thermoprotei",short_name:"Thermoprotei",taxon_id:"183924",children:[{name:"Sulfolobussolfataricus",short_name:"SULSO",taxon_id:"273057"},{name:"Pyrobaculumaerophilum",short_name:"PYRAE",taxon_id:"178306"}]},{name:"Euryarchaeota",short_name:"Euryarchaeota",taxon_id:"28890",children:[{name:"Methanosarcinaacetivorans",short_name:"METAC",taxon_id:"188937"},{name:"Methanocaldococcusjannaschii",short_name:"METJA",taxon_id:"243232"},{name:"Halobacteriumsalinarum",short_name:"HALSA",taxon_id:"64091"},{name:"Thermococcuskodakaraensis",short_name:"THEKO",taxon_id:"69014"}]}]}]},{name:"Eubacteria",short_name:"Eubacteria",taxon_id:"2",children:[{name:"Firmicutes",short_name:"Firmicutes",taxon_id:"1239",children:[{name:"Clostridiumbotulinum",short_name:"CLOBH",taxon_id:"441771"},{name:"Bacilli",short_name:"Bacilli",taxon_id:"91061",children:[{name:"Streptococcuspneumoniae",short_name:"STRR6",taxon_id:"171101"},{name:"Bacillales",short_name:"Bacillales",taxon_id:"1385",children:[{name:"Staphylococcusaureus",short_name:"STAA8",taxon_id:"93061"},{name:"Listeriamonocytogenes",short_name:"LISMO",taxon_id:"169963"},{name:"Bacillus",short_name:"Bacillus",taxon_id:"1386",children:[{name:"Bacillussubtilis",short_name:"BACSU",taxon_id:"224308"},{name:"Bacilluscereus",short_name:"BACCR",taxon_id:"226900"}]}]}]}]},{name:"Actinomycetales",short_name:"Actinomycetales",taxon_id:"2037",children:[{name:"Streptomycescoelicolor",short_name:"STRCO",taxon_id:"100226"},{name:"Mycobacteriumtuberculosis",short_name:"MYCTU",taxon_id:"83332"}]},{name:"mycoplasmagenitalium",short_name:"MYCGE",taxon_id:"243273"},{name:"Thermotogamaritima",short_name:"THEMA",taxon_id:"243274"},{name:"Deinococcusradiodurans",short_name:"DEIRA",taxon_id:"243230"},{name:"Chloroflexusaurantiacus",short_name:"CHLAA",taxon_id:"324602"},{name:"Cyanobacteria",short_name:"Cyanobacteria",taxon_id:"1117",children:[{name:"Gloeobacterviolaceus",short_name:"GLOVI",taxon_id:"251221"},{name:"Synechocystis",short_name:"SYNY3",taxon_id:"1111708"}]},{name:"Leptospirainterrogans",short_name:"LEPIN",taxon_id:"189518"},{name:"Bacteroidesthetaiotaomicron",short_name:"BACTN",taxon_id:"226186"},{name:"Chlamydiatrachomatis",short_name:"CHLTR",taxon_id:"272561"},{name:"Aquifexaeolicus",short_name:"AQUAE",taxon_id:"224324"},{name:"Rhodopirellulabaltica",short_name:"RHOBA",taxon_id:"243090"},{name:"Thermodesulfovibrioyellowstonii",short_name:"THEYD",taxon_id:"289376"},{name:"Dictyoglomusturgidum",short_name:"DICTD",taxon_id:"515635"},{name:"Fusobacteriumnucleatum",short_name:"FUSNN",taxon_id:"190304"},{name:"Proteobacteria",short_name:"Proteobacteria",taxon_id:"1224",children:[{name:"Helicobacterpylori",short_name:"HELPY",taxon_id:"85962"},{name:"Neisseriameningitidisserogroupb",short_name:"NEIMB",taxon_id:"122586"},{name:"Geobactersulfurreducens",short_name:"GEOSL",taxon_id:"243231"},{name:"Bradyrhizobiumdiazoefficiens",short_name:"BRADU",taxon_id:"224911"},{name:"Gammaproteobacteria",short_name:"Gammaproteobacteria",taxon_id:"1236",children:[{name:"Coxiellaburnetii",short_name:"COXBU",taxon_id:"227377"},{name:"Haemophilusinfluenzae",short_name:"HAEIN",taxon_id:"71421"},{name:"Shewanellaoneidensis",short_name:"SHEON",taxon_id:"211586"},{name:"Vibriocholerae",short_name:"VIBCH",taxon_id:"243277"},{name:"Xanthomonascampestris",short_name:"XANCP",taxon_id:"190485"},{name:"Pseudomonasaeruginosa",short_name:"PSEAE",taxon_id:"208964"},{name:"Enterobacteriaceae",short_name:"Enterobacteriaceae",taxon_id:"543",children:[{name:"Salmonellatyphimurium",short_name:"SALTY",taxon_id:"99287"},{name:"Yersiniapestis",short_name:"YERPE",taxon_id:"632"},{name:"Escherichiacoli",short_name:"ECOLI",taxon_id:"83333"}]}]}]}]}]}];

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
            result.push({ id: node.id, label: node.name });
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
    addSpeciesIds(speciesNodes);
    resultNodes = getSpeciesNodes(speciesNodes);
    resultLinks = getSpeciesLinks(1, speciesNodes);

    console.dir(resultNodes);
    console.dir(resultLinks);

    return { links: resultLinks, nodes: resultNodes };
}