import { Ticket } from './ticket.model';
import { TicketType } from './ticket-type.model';
import { Coefficient } from './coefficient.model';

export class FinalPrice{
    public id: number;
    public ticket: Ticket;
    public ticketType: TicketType;
    public coefficient: Coefficient;
    public priceStart: Date;
    public priceEnd: Date;

    constructor(id: number, ticket: Ticket, ticketType: TicketType, coefficient: Coefficient, priceStart: Date, priceEnd: Date){

    }
}