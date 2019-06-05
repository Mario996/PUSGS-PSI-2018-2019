import { Line } from './line.model';

export class Station{
    id: number;
    name: string;
    address: string;
    lines: Line[];

    constructor(id: number, name: string, addres: string, lines: Line[]){
        this.id = id;
        this.name = name;
        this.address = addres;
        this.lines = lines;
    }
}