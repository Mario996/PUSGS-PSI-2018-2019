import { Station } from './station.model';
import { Timetable } from './timetable.model';

export class Line {
    id: number;
    lineNumber: number;
    stations: Station[]
    timetables: Timetable[];

    constructor(id: number, lineNumber: number, stations: Station[], timetables: Timetable[]){
        this.id = id;
        this.lineNumber = lineNumber;
        this.stations = stations;
        this.timetables = timetables;
    }
}