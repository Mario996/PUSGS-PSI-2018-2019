import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class TimetableService {

    constructor(private http: HttpClient) {
    }

    PostProduct() {
        let req = {
            LineNumber: 7
        }
        return this.http.post("http://localhost:52295/api/Line/PostProduct", req);
    }
}