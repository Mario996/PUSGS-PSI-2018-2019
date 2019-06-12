import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ApplicationUser } from '../model/application-user.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private endpoint: string;
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
    this.endpoint = "http://localhost:52295/api/";
  }

  registerUser = (user: ApplicationUser) : Observable<any> => 
  {
    return this.http.post(`${this.endpoint}Account/Register`, user);
  }

  getUserProfile = (username: string) : Observable<any> =>
  {
    return this.http.get(`${this.endpoint}Account/UserProfile/` + username);
  }

  updateUserProfile = (user: ApplicationUser) : Observable<any> =>
  {
    return this.http.put(`${this.endpoint}Account/UpdateUserProfile/`, user);
  }

  getAllUsers() 
  {
    return this.http.get(`${this.endpoint}Account/GetAllUsers`);
  }
}

