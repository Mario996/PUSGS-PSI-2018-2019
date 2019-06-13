import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationUser } from '../model/application-user.model';
import { RegisterService } from '../services/register.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-verify-profile',
  templateUrl: './verify-profile.component.html',
  styleUrls: ['./verify-profile.component.css']
})
export class VerifyProfileComponent implements OnInit {
  user : ApplicationUser;
  username : string;
  private sub: any;

  constructor(private activeRoute: ActivatedRoute, private registerService : RegisterService, private router : Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.sub = this.activeRoute.params.subscribe(params => {
    this.username = params['username'];
      if(this.username)
      {
        this.registerService.getUserProfile(this.username).subscribe(
          (response) =>
          {
            this.user = response;
          },
          (error) =>
          {
            console.log(error);
          }
        );
      }
  });
  }

  verify(user)
  {
    this.registerService.updateUserProfile(user).subscribe(
      (response) => {
        this.router.navigate(['/control']);
        this.toastr.success('User was successfully verified.', 'Success!');
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
