import { PriceList } from '../model/price-list.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PriceListService {
    public pricelists: PriceList[];

    constructor(private http: HttpClient) { }

    getPriceLists() {
        return this.http.get("http://localhost:52295/api/pricelists");
    }
    
    addPriceList(pricelist: PriceList){
        return this.http.post("http://localhost:52295/api/pricelists", pricelist);        
    }
    
    editPriceList(index: number, pricelist: PriceList){
        return this.http.put("http://localhost:52295/api/pricelists/" + index, pricelist);                
    }
    deletePriceList(index: number){
        return this.http.delete('http://localhost:52295/api/pricelists/' + index);
    }
}
