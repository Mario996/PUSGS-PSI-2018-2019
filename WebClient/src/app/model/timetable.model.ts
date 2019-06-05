import { Line } from './line.model';

enum CityOrIntercity {City = 1, Intercity}

export class Timetable{
    public id: number;
    public cityOrIntercity: CityOrIntercity;
    public line: Line;
    public lineId: number;
    public departures: string;

    constructor(id: number, cityOrIntercity: CityOrIntercity, line: Line, lineId: number, departures: string){

    }
}