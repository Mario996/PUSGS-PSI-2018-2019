import { Line } from './line.model';

enum CityOrIntercity {City = 1, Intercity}

export class Timetable{
    public Id: number;
    public CityOrIntercity: CityOrIntercity;
    public Line: Line;
    public LineId: number;
    public Departures: string;

    constructor(id: number, cityOrIntercity: CityOrIntercity, line: Line, lineId: number, departures: string){
        this.Id = id;
        this.CityOrIntercity = cityOrIntercity;
        this.Line = line;
        this.LineId = lineId;
        this.Departures = departures;
    }
}