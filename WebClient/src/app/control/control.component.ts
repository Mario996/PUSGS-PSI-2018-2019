import { Component, OnInit } from '@angular/core';
import { ApplicationUser } from '../model/application-user.model';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  userList : ApplicationUser[];

  constructor(private registerService : RegisterService, private router : Router) 
  {

  }

  ngOnInit() {
    this.registerService.getAllAppUsers().subscribe(
      (response : ApplicationUser[]) => {
        this.userList = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  validateUser(username)
  {
    this.router.navigate(['/verifyprofile/' + username]);
  }

}
