import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
  } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { Injectable } from '@angular/core';
  
  @Injectable()
  export class AddHeaderInterceptor implements HttpInterceptor {
      constructor()
      {
  
      }
  
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // Clone the request to add the new header
      let jwt = localStorage.jwt;

      if(jwt){
          req = req.clone({
              setHeaders: {
                  "Authorization": "Bearer " + jwt
              }
          });
      }

      return next.handle(req);
    }
  }