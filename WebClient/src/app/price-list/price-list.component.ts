import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TicketService } from '../services/ticket.service';
import { ToastrService } from 'ngx-toastr';
import { ApplicationUser } from '../model/application-user.model';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {
  verifiedUser : boolean;

  constructor(private auth : AuthService, private ticketService : TicketService, private toastr: ToastrService, private registerService: RegisterService) { }

  ngOnInit() {
    this.registerService.getUserProfile(localStorage.getItem("username")).subscribe(
      (response) =>
      {
        this.verifiedUser = response.Verified;
      },
      (error) =>
      {
        console.log(error);
      }
    );
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
