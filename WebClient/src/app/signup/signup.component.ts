import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';
import { ApplicationUser } from '../model/application-user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  id: number;
  recipeForm: FormGroup;

  constructor(private registerService : RegisterService, private router: Router) { }

  ngOnInit() {
  }

  onSignup(user : ApplicationUser)
  {
    if(user.userType === "")
      user.userType = "Regularni";
    this.registerService.registerUser(user).subscribe(
      (response) => {
        this.router.navigate(['/signin']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
