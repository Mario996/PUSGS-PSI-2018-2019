import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PriceListService } from 'src/app/services/pricelist.service';
import { TicketTypeService } from 'src/app/services/ticketType.service';
import { PriceList } from 'src/app/model/price-list.model';
import { TicketType } from 'src/app/model/ticket-type.model';

@Component({
  selector: 'app-edit-price-list',
  templateUrl: './edit-price-list.component.html',
  styleUrls: ['./edit-price-list.component.css']
})
export class EditPriceListComponent implements OnInit {

  priceListForm: FormGroup;
  ticketTypes: TicketType[];
  priceLists: PriceList[];
  indexPriceList: number;
  priceListId = "Price List";

  constructor(private priceListService: PriceListService,
    private ticketTypeService: TicketTypeService) { }

  ngOnInit() {
    this.priceListsRefresh();
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
    if (this.priceListForm.valid == true) {
      var priceList = this.mapPriceList();
      this.priceListService.editPriceList(priceList.Id, priceList).subscribe(
        (response) => {
          console.log(response)
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  mapPriceList() {
    var ticketTypes: TicketType[] = [];

    ticketTypes.push(new TicketType(null, this.priceListForm.value.time, "Time", null, null))
    ticketTypes.push(new TicketType(null, this.priceListForm.value.day, "Day", null, null))
    ticketTypes.push(new TicketType(null, this.priceListForm.value.month, "Month", null, null))
    ticketTypes.push(new TicketType(null, this.priceListForm.value.year, "Year", null, null))

    var priceList = new PriceList(this.indexPriceList, null, ticketTypes, this.priceListForm.value.start, this.priceListForm.value.end);

    return priceList;
  }

  priceListsRefresh() {
    this.priceListService.getPriceLists().subscribe(
      (response: PriceList[]) => {
        this.priceLists = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }


  setIndexPriceList(n: number) {
    this.indexPriceList = this.priceLists[n].Id;
    this.priceListForm.controls.start.setValue(this.priceLists[n].StartDate);
    this.priceListForm.controls.end.setValue(this.priceLists[n].EndDate);
    this.priceListId = this.priceLists[n].Id.toString();
  }
}
