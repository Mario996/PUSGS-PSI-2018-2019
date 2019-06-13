import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
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
  registerForm: FormGroup;

  constructor(private registerService : RegisterService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    let registerUsername = '';
    let registerMail = '';
    let registerPassword = '';
    let registerPassword2 = '';
    let registerName = '';
    let registerLastname = '';
    let registerDate = '';
    let registerAddress = '';
    let registerType = '';
    let registerDocumentUrl = '';

    this.registerForm = new FormGroup({
      username: new FormControl(registerUsername, Validators.required),
      email: new FormControl(registerMail, [Validators.required, Validators.email]),
      password: new FormControl(registerPassword, Validators.required),
      confirmPassword: new FormControl(registerPassword2, Validators.required),
      name: new FormControl(registerName, Validators.required),
      lastName: new FormControl(registerLastname, Validators.required),
      dateOfBirth: new FormControl(registerDate, Validators.required),
      address: new FormControl(registerAddress, Validators.required),
      userType: new FormControl(registerType, Validators.required),
      documentUrl: new FormControl(registerDocumentUrl, Validators.required)
    });
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
