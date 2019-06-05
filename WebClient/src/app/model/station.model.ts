import { Line } from './line.model';

export class Station{
    public id: number;
    public name: string;
    public address: string;
    public lines: Line[];

    constructor(id: number, name: string, addres: string, lines: Line[]){
        this.id = id;
        this.name = name;
        this.address = addres;
        this.lines = lines;
    }
}