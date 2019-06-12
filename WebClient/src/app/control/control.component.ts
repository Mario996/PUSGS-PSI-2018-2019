import { Component, OnInit } from '@angular/core';
import { ApplicationUser } from '../model/application-user.model';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  userList : ApplicationUser[];

  constructor(private registerService : RegisterService) 
  {

  }

  ngOnInit() {
    this.registerService.getAllUsers().subscribe(
      (response : ApplicationUser[]) => {
        this.userList = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
