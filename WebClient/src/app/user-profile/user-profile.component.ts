import { Component, OnInit } from '@angular/core';
import { ApplicationUser } from '../model/application-user.model';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: ApplicationUser = new ApplicationUser();

  id: number;
  profileForm: FormGroup;

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
    this.initForm();
    this.registerService.getUserProfile(localStorage.getItem("username")).subscribe(
      (response) => {
        this.user = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  private initForm() {
    let registerUsername = '';
    let registerMail = '';
    let registerName = '';
    let registerLastname = '';
    let registerDate = '';
    let registerAddress = '';
    let registerDocumentUrl = '';

    this.profileForm = new FormGroup({
      username: new FormControl(registerUsername, Validators.required),
      email: new FormControl(registerMail, [Validators.required, Validators.email]),
      name: new FormControl(registerName, Validators.required),
      lastName: new FormControl(registerLastname, Validators.required),
      dateOfBirth: new FormControl(registerDate, Validators.required),
      address: new FormControl(registerAddress, Validators.required),
      documentUrl: new FormControl(registerDocumentUrl, Validators.required)
    });
  }

  saveChanges(user: ApplicationUser) {
    //bez parametra ^user^ u pozivu metode treba line 53, i bez prosledjene vrednosti u htmlu line 3 i bez ngmodel atribut dela u inputima u html
    // this.user propertiji trebaju velikim slovom da pocinju verovatno zbog transfera posle sa pozivom ili to treba samo kad se getuje nisam siguran
    // this.user.mail = this.profileForm.value.email;
    // this.user.username = this.profileForm.value.username;
    // this.user.name = this.profileForm.value.name;
    // this.user.dateOfBirth = this.profileForm.value.dateOfBirth;
    // this.user.address = this.profileForm.value.address;
    // this.user.documentUrl = this.profileForm.value.documentUrl;
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
