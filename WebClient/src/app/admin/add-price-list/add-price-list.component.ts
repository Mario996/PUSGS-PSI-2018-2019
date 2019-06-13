import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PriceListService } from 'src/app/services/pricelist.service';
import { TicketTypeService } from 'src/app/services/ticketType.service';
import { PriceList } from 'src/app/model/price-list.model';
import { TicketType } from 'src/app/model/ticket-type.model';

@Component({
  selector: 'app-add-price-list',
  templateUrl: './add-price-list.component.html',
  styleUrls: ['./add-price-list.component.css']
})
export class AddPriceListComponent implements OnInit {
  
  priceListForm: FormGroup;
  ticketTypes: TicketType[];
  priceLists: PriceList[];
  

  constructor(private priceListService: PriceListService) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    let priceListStart = '';
    let priceListEnd = '';
    let priceListTime = '';
    let priceListDay = '';
    let priceListMonth = '';
    let priceListYear = '';

    this.priceListForm = new FormGroup({
      start: new FormControl(priceListStart, Validators.required),
      end: new FormControl(priceListEnd, Validators.required),
      time: new FormControl(priceListTime, Validators.required),
      day: new FormControl(priceListDay, Validators.required),
      month: new FormControl(priceListMonth, Validators.required),
      year: new FormControl(priceListYear, Validators.required)
    });
  }

  onSubmit() {
    var priceList = this.mapPriceList();
    this.priceListService.addPriceList(priceList).subscribe(
      (response) => {
        console.log(response)
      },
      (error) => {
        console.log(error);
      }
    );
  }

  mapPriceList() {
    var ticketTypes : TicketType[] = [];

    ticketTypes.push(new TicketType(null, this.priceListForm.value.time,"Time", null,null));
    ticketTypes.push(new TicketType(null, this.priceListForm.value.day,"Day", null,null));
    ticketTypes.push(new TicketType(null, this.priceListForm.value.month,"Month", null,null));
    ticketTypes.push(new TicketType(null, this.priceListForm.value.year,"Year", null,null));

    var priceList = new PriceList(null, null, ticketTypes, this.priceListForm.value.start, this.priceListForm.value.end);

    return priceList;
  }

  
}
