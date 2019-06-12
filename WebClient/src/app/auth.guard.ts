import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(protected router: Router, protected authService: AuthService)
  {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean 
  {
    // if (!this.authService.isAuthenticated()) {
    //   return false;
    // }
    switch(localStorage.getItem('role'))
    {
      case "Admin":
        {
          if(!this.authService.isAdminAuthenticated())
            return false;
          else
            return true;
        }
      case "Controller":
        {
          if(!this.authService.isControllerAuthenticated())
            return false;
          else
            return true;
        }
      case "AppUser":
        {
          if(!this.authService.isAuthenticated())
            return false;
          else
            return true;
        }
    }
  }
  
}