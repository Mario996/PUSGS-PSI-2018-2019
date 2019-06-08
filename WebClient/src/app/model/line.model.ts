import { Station } from './station.model';
import { Timetable } from './timetable.model';

export class Line {
    public Id: number;
    public LineNumber: number;
    public Stations: Station[]
    public Timetables: Timetable[];

    constructor(id: number, lineNumber: number, stations: Station[], timetables: Timetable[]){
        this.Id = id;
        this.LineNumber = lineNumber;
        this.Stations = stations;
        this.Timetables = timetables;
    }
}