import { TicketType } from './ticket-type.model';
import { ApplicationUser } from './application-user.model';
import { FinalPrice } from './final-price.model';

export class Ticket{
    public id: number;
    public ticketType: TicketType;
    public applicationUser: ApplicationUser;
    public finalPrice: FinalPrice;
    public timeOfPurchase: Date;
    public validUntil: Date;

    constructor(id: number, ticketType: TicketType, applicationUser: ApplicationUser, finalPrice: FinalPrice, timeOfPurchase: Date, validUntil: Date){

    }
}