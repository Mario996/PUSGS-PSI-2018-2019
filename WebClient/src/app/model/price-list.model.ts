import { Ticket } from './ticket.model';
import { TicketType } from './ticket-type.model';

export class PriceList{
    public id: number;
    public tickets: Ticket[];
    public ticketTypes: TicketType[];
    public priceStart: string;
    public priceEnd: string;

    constructor(id: number, tickets: Ticket[], ticketTypes: TicketType[], priceStart: string, priceEnd: string){

    }
}
