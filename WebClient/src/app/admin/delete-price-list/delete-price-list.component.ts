import { Component, OnInit } from '@angular/core';

import { PriceListService } from 'src/app/services/pricelist.service';

import { PriceList } from 'src/app/model/price-list.model';

@Component({
  selector: 'app-delete-price-list',
  templateUrl: './delete-price-list.component.html',
  styleUrls: ['./delete-price-list.component.css']
})

export class DeletePriceListComponent implements OnInit {
  priceLists: PriceList[];

  constructor(private lService: PriceListService) { }

  ngOnInit() {
    this.pricelistsRefresh();
  }

  pricelistsRefresh(){
    this.lService.getPriceLists().subscribe(
      (response: PriceList[]) => {
        this.priceLists = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  delete(index: number) {
    var x = this.priceLists[index].Id;
    this.lService.deletePriceList(x).subscribe(
      (response) => {
        console.log('Deleted pricelist with id' + x);
      },
      (error) => {
        console.log(error);
      }
    );
    this.priceLists.splice(index,1);
  }
}
