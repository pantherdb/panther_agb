import { Routes } from '@angular/router';

import { AboutComponent } from '../content/about/about.component';
import { GeneComponent } from '../content/gene/gene.component';
import { Replace } from '../content/gene/gene.pipe';
import { GenesComponent } from '../content/genes/genes.component';
import { SpeciesComponent } from '../content/species/species.component';
import { SpeciesHorizontalViewerComponent } from '../content/species/viewers/species-horizontal-viewer/species-horizontal-viewer.component';
import { SpeciesGraphViewerComponent } from '../content/species/viewers/species-graph-viewer/species-graph-viewer.component';
import { SpeciesDetailComponent } from '../content/species-detail/species-detail.component';
import { SpeciesTreeViewerComponent } from '../content/species/species-tree-viewer/species-tree-viewer.component';
import { ContactUsComponent } from '../content/contact-us/contact-us.component';
import { PrivaryPolicyComponent } from '../content/privary-policy/privary-policy.component';
import { DisclaimerComponent } from '../content/disclaimer/disclaimer.component';
import { ReleaseInfoComponent } from '../content/release-info/release-info.component';
import { DownloadsComponent } from '../content/downloads/downloads.component';

export const routes = [{
    path: 'about', component: AboutComponent
}, {
    path: 'contact-us', component: ContactUsComponent
},{
    path: 'privary-policy', component: PrivaryPolicyComponent
},{
    path: 'disclaimer', component: DisclaimerComponent
},{
    path: 'release-info', component: ReleaseInfoComponent
},{
    path: 'downloads', component: DownloadsComponent
},
{ path: 'gene/:ptn', component: GeneComponent },
{
    path: 'species', component: SpeciesComponent,
    children: [
        {
            path: ':id', component: GenesComponent
        }, {
            path: 'species-info/:id', component: SpeciesDetailComponent,
        }
        // {
        //  path: 'species-info/:id', component: SpeciesDetailComponent,
        // }
    ]
}, {
    path: 'species-horizontal-viewer', component: SpeciesHorizontalViewerComponent
}, {
    path: 'species-graph-viewer', component: SpeciesGraphViewerComponent
}, {
    path: 'species-tree-viewer', component: SpeciesTreeViewerComponent
},
{ path: '', redirectTo: 'species', pathMatch: 'full' }
];