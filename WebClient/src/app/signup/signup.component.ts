import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';

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

  onSignup(user)
  {
    this.registerService.registerUser(user).subscribe(
      (response) => {
        console.log('Registration is successfull!');
        this.router.navigate(['/signin']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
