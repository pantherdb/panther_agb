import { id } from './id';
import * as tasks from './turbine.json';
import { speciesNodes, treeNodes } from './../data/species-nodes';

export const countries = [
    'Abkhazia', 'Afghanistan', 'Akrotiri and Dhekelia', 'Aland', 'Albania',
    'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla',
    'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Ascension Island',
    'Australia', 'Austria', 'Azerbaijan', 'Bahamas, The', 'Bahrain', 'Bangladesh',
    'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan',
    'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei',
    'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada',
    'Cape Verde', 'Cayman Islands', 'Central Africa Republic', 'Chad', 'Chile',
    'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros',
    'Congo', 'Cook Islands', 'Costa Rica', 'Cote d\'lvoire', 'Croatia', 'Cuba',
    'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica',
    'Dominican Republic', 'East Timor Ecuador', 'Egypt', 'El Salvador',
    'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands',
    'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'Gabon',
    'Cambia, The', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece',
    'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guemsey', 'Guinea',
    'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary',
    'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man',
    'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan',
    'Kenya', 'Kiribati', 'Korea, N', 'Korea, S', 'Kosovo', 'Kuwait', 'Kyrgyzstan',
    'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein',
    'Lithuania', 'Luxembourg', 'Macao', 'Macedonia', 'Madagascar', 'Malawi',
    'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania',
    'Mauritius', 'Mayotte', 'Mexico', 'Micronesia', 'Moldova', 'Monaco',
    'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar',
    'Nagorno-Karabakh', 'Namibia', 'Nauru', 'Nepal', 'Netherlands',
    'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger',
    'Nigeria', 'Niue', 'Norfolk Island', 'Northern Cyprus',
    'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau',
    'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines',
    'Pitcaim Islands', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Romania',
    'Russia', 'Rwanda', 'Sahrawi Arab Democratic Republic', 'Saint-Barthelemy',
    'Saint Helena', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin',
    'Saint Pierre and Miquelon', 'Saint Vincent and Grenadines', 'Samos',
    'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia',
    'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia',
    'Solomon Islands', 'Somalia', 'Somaliland', 'South Africa', 'South Ossetia',
    'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard', 'Swaziland', 'Sweden',
    'Switzerland', 'Syria', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo',
    'Tokelau', 'Tonga', 'Transnistria', 'Trinidad and Tobago', 'Tristan da Cunha',
    'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu',
    'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom',
    'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City',
    'Venezuela', 'Vietnam', 'Virgin Islands, British', 'Virgin Islands, U.S.',
    'Wallis and Futuna', 'Yemen', 'Zambia', 'Zimbabwe'
];

export function generateGraph(nodeCount: number) {
    const nodes = [];
    const links = [];
    for (let i = 0; i < nodeCount; i++) {
        const country = countries[Math.floor(Math.random() * countries.length)];
        nodes.push({
            id: id(),
            value: country,
        });
        for (let j = 0; j < nodes.length - 1; j++) {
            if (Math.random() < 0.03) {
                links.push({
                    source: nodes[i].id,
                    target: nodes[j].id,
                });
            }
        }
    }
    return { links, nodes };
}

export function generateHierarchialGraph2() {



    const nodes = [{
        id: 'start',
        label: 'start'
    }, {
        id: '11',
        label: 'Query ThreatConnect',
        rank: 'first'
    }, {
        id: '2',
        label: 'Query XForce',
        rank: 'first'
    }, {
        id: '3',
        label: 'Format Results'
    }, {
        id: '4',
        label: 'Search Splunk'
    }, {
        id: '5',
        label: 'Block LDAP'
    }, {
        id: '6',
        label: 'Email Results'
    }];

    const links = [{
        source: 'start',
        target: '11'
    }, {
        source: 'start',
        target: '2'
    }, {
        source: '11',
        target: '3'
    }, {
        source: '2',
        target: '4'
    }, {
        source: '2',
        target: '6'
    }, {
        source: '3',
        target: '5'
    }];

    return { links, nodes };
}

export function generateHierarchialGraph() {
    let resultNodes = [];
    let resultLinks = [];

    function addSpeciesIds(nodes) {
        _.each(nodes, function (node) {
            node.id = id();
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
    //console.dir(speciesNodes)

    console.dir(resultNodes);
    console.dir(resultLinks);

    return { links: resultLinks, nodes: resultNodes };
}

export function getTurbineData() {
    const nodes = [];
    const links = [];



    return { nodes, links };
}