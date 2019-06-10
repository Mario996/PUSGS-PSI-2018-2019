import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor() {
    }

    public isAuthenticated() : boolean{
        if(localStorage.length != 0)
            return true;
        else
            return false;
    }
}