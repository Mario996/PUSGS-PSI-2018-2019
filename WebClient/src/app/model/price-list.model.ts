import { Ticket } from './ticket.model';
import { TicketType } from './ticket-type.model';

export class PriceList{
    public Id: number;
    public Tickets: Ticket[];
    public TicketTypes: TicketType[];
    public StartDate: string;
    public EndDate: string;

    constructor(id: number, tickets: Ticket[], ticketTypes: TicketType[], priceStart: string, priceEnd: string){
        this.Id = id;
        this.Tickets = tickets;
        this.TicketTypes = ticketTypes;
        this.StartDate = priceStart;
        this.EndDate= priceEnd;
    }
}
