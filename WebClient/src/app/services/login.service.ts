import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ApplicationUser } from '../model/application-user.model';

@Injectable({
    providedIn: 'root'
})
export class LoginService{
    base_url = "http://localhost:52295"

    constructor(private http: HttpClient){
    }

    logIn(user: ApplicationUser){
        let data = `username=${user.username}&password=${user.password}&grant_type=password`;
        let httpOptions = {
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            }
        }

        this.http.post<any>(this.base_url + "/oauth/token", data, httpOptions)
        .subscribe(data => {
              
          let jwt = data.access_token;

          let jwtData = jwt.split('.')[1]
          let decodedJwtJsonData = window.atob(jwtData)
          let decodedJwtData = JSON.parse(decodedJwtJsonData)

          let role = decodedJwtData.role

          localStorage.setItem('jwt', jwt);
          localStorage.setItem('role', role);
          localStorage.setItem('username', user.username);          
        } );
    }
}