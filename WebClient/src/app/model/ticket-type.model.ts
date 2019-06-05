import { FinalPrice } from './final-price.model';
import { Ticket } from './ticket.model';

export class TicketType{
    public id: number;
    public decimal:number;
    public finalPrices: FinalPrice[];
    public tickets: Ticket[];

    constructor( id: number, decimal: number, finalPrices: FinalPrice[], tickets: Ticket[]){
        this.id = id;
        this.decimal = decimal;
        this.finalPrices = finalPrices;
        this.tickets = tickets;
    }
}