import { FinalPrice } from './final-price.model';

export class Coefficient{
    public id:  number;
    public userType: string;
    public discountPercentage: number;
    public finalPrices: FinalPrice[];

         constructor(id:  number, userType: string, discountPercentage: number, finalPrices: FinalPrice[]){
            this.id = id;
            this.userType = userType;
            this.discountPercentage = discountPercentage;
            this.finalPrices = finalPrices;
         }
}