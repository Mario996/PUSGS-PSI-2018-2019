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

    public isUserAuthenticated() : boolean{
        if(localStorage.getItem("role") === "AppUser")
            return true;
        else
            return false;
    }

    public isAdminAuthenticated() : boolean{
        if(localStorage.getItem("role") === "Admin")
            return true;
        else
            return false;
    }
    
    public isControllerAuthenticated() : boolean{
        if(localStorage.getItem("role") === "Controller")
            return true;
        else
            return false;
    }
}