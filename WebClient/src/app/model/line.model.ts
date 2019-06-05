import { Station } from './station.model';
import { Timetable } from './timetable.model';

export class Line {
    public id: number;
    public lineNumber: number;
    public stations: Station[]
    public timetables: Timetable[];

    constructor(id: number, lineNumber: number, stations: Station[], timetables: Timetable[]){
        this.id = id;
        this.lineNumber = lineNumber;
        this.stations = stations;
        this.timetables = timetables;
    }
}