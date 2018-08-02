export interface Species {
    id: number;
    long_name: string;
    parent_id: number;
    timescale: number;
}

export class SpeciesNode {
    id: number;
    long_name: string;
    parent_id: number;
    timescale: number;
    level: number;
    expandable: boolean;
    children: SpeciesNode[];
}

export class SpeciesFlatNode {
    constructor(
        public id: number,
        public long_name: string,
        public parent_id: number,
        public timescale: number,
        public expandable: boolean,
        public level: number) { }
}
