/* export interface SpeciesGeneList {
    ptn: string;
    name: string;
    species: string;
    sequence: string;
    event: string;
    proxy_genes:{
        proxy_org_short: string;
        proxy_org_long: string;
        proxy_gene: string;
    };
} */

export interface SpeciesGeneList {
    ptn: string;
    name: string;
    pthr:string
    proxy_gene?:string;
    proxy_gene_ptn?: string;
    ancestor_species?:any[];
    all_desendant_gene_ptn_in_proxy_species?: string;
}
