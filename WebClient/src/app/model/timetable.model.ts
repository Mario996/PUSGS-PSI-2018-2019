import { Line } from './line.model';

enum CityOrIntercity {City = 1, Intercity}

export class Timetable{
    public Id: number;
    public CityOrIntercity: CityOrIntercity;
    public DayOfTheWeek: string;
    public Line: Line;
    public LineId: number;
    public Departures: string;

    constructor(id: number, cityOrIntercity: CityOrIntercity, day: string, line: Line, lineId: number, departures: string){
        this.Id = id;
        this.CityOrIntercity = cityOrIntercity;
        this.DayOfTheWeek = day;
        this.LineId = lineId;
        this.Line = line;
        this.Departures = departures;
    }
}