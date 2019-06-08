import { Line } from './line.model';

export class Station{
    public Id: number;
    public Name: string;
    public Address: string;
    public Lines: Line[];

    constructor(id: number, name: string, addres: string, lines: Line[]){
        this.Id = id;
        this.Name = name;
        this.Address = addres;
        this.Lines = lines;
    }
}