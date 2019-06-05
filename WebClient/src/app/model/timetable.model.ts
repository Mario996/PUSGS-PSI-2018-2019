import { Line } from './line.model';

enum CityOrIntercity {City = 1, Intercity}

export class Timetable{
    id: number;
    cityOrIntercity: CityOrIntercity;
    line: Line;
    lineId: number;
    departures: string;

    constructor(id: number, cityOrIntercity: CityOrIntercity, line: Line, lineId: number, departures: string){

    }
}