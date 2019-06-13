import { TicketType } from '../model/ticket-type.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TicketTypeService {

    constructor(private http: HttpClient) { }

    getTicketTypes() {
        return this.http.get("http://localhost:52295/api/tickettypes");
    }
    
    addTicketType(ticketType: TicketType){
        return this.http.post("http://localhost:52295/api/tickettypes", ticketType);        
    }
    
    editTicketType(index: number, ticketType: TicketType){
        return this.http.put("http://localhost:52295/api/tickettypes/" + index, ticketType);                
    }
    deleteTicketType(index: number){
        return this.http.delete('http://localhost:52295/api/tickettypes/' + index);
    }
}
