import { Line } from './model/line.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LineService {
    public lines: Line[];

    constructor(private http: HttpClient) { }

    getLines() {
        return this.http.get("http://localhost:52295/api/lines");
    }
    
    addLine(line: Line){
        return this.http.post("http://localhost:52295/api/lines", line);        
    }
    
    updateLine(index: number, line: Line){
        return this.http.put("http://localhost:52295/api/lines/" + index, line);                
    }
    deleteLine(index: number){
        return this.http.delete('http://localhost:52295/api/lines/' + index);
    }
}
