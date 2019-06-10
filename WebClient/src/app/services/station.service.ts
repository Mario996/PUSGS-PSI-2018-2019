import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Station } from '../model/station.model';


@Injectable({ providedIn: 'root' })
export class StationService {

    constructor(private http: HttpClient) {
    }

    getStations() {
        return this.http.get("http://localhost:52295/api/stations");
    }

    addStation(station: Station){
        return this.http.post("http://localhost:52295/api/stations", station);        
    }
    
    updateStation(index: number, station: Station){
        return this.http.put("http://localhost:52295/api/stations/" + index, station);                
    }
    deleteStation(index: number){
        return this.http.delete('http://localhost:52295/api/stations/' + index);
    }
}