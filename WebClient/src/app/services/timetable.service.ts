import { Timetable } from '../model/timetable.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TimetableService {
    public timetables: Timetable[];

    constructor(private http: HttpClient) { }

    getTimetables() {
        return this.http.get("http://localhost:52295/api/timetables");
    }
    
    addTimetable(timetable: Timetable){
        return this.http.post("http://localhost:52295/api/timetables", timetable);        
    }
    
    editTimetable(index: number, timetable: Timetable){
        return this.http.put("http://localhost:52295/api/timetables/" + index, timetable);                
    }
    deleteTimetable(index: number){
        return this.http.delete('http://localhost:52295/api/timetables/' + index);
    }
}
