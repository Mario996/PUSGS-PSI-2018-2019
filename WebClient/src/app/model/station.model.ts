import { Line } from './line.model';

export class Station{
    public Id: number;
    public Name: string;
    public Address: string;
    public Longitude: number;
    public Latitude: number;
    public Lines: Line[];

    constructor(id: number, name: string, addres: string, longitude: number, latitude: number, lines: Line[]){
        this.Id = id;
        this.Name = name;
        this.Address = addres;
        this.Longitude = longitude;
        this.Latitude = latitude;
        this.Lines = lines;
    }
}