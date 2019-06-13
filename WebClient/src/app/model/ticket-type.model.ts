import { Ticket } from './ticket.model';
import { PriceList } from './price-list.model';

export class TicketType{
    public Id: number;
    public Price: number;
    public Name: string;
    public PriceLists: PriceList[];
    public Tickets: Ticket[];

    constructor( id: number, price: number, name: string, priceLists: PriceList[], tickets: Ticket[]){
        this.Id = id;
        this.Price = price;
        this.Name = name;
        this.PriceLists = priceLists;
        this.Tickets = tickets;
    }
}