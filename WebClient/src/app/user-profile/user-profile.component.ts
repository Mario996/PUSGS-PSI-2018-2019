import { Component, OnInit } from '@angular/core';
import { ApplicationUser } from '../model/application-user.model';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: ApplicationUser = new ApplicationUser();

  constructor(private registerService : RegisterService, private router: Router) { }

  ngOnInit() {
    this.registerService.getUserProfile(localStorage.getItem("username")).subscribe(
      (response) => {
        this.user = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  saveChanges(user : ApplicationUser){
    this.registerService.updateUserProfile(user).subscribe(
      (response) => {
        this.router.navigate(['/profile']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}