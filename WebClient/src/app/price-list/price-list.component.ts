import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TicketService } from '../services/ticket.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {

  constructor(private auth : AuthService, private ticketService : TicketService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  BuyTicketUnregisteredUser(email)
  {
    this.ticketService.BuyTicketUnregisteredUser(email).subscribe(
      (response) =>
      {
        this.toastr.success('Thank you for your purchase.', 'Success!');
      },
      (error) =>
      {
        console.log(error);
      }
    );
  }

}
