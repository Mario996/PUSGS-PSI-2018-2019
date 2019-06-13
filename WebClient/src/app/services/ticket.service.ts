import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TicketService {

    constructor(private http: HttpClient) { }

    BuyTicketUnregisteredUser(email) {
        return this.http.post("http://localhost:52295/api/tickets/BuyTicketUnregisteredUser", email);
    }
}