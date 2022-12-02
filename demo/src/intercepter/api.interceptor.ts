import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from "rxjs/operators";
import { LoaderService } from '../services/loader.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(public loaderService: LoaderService ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request=this.appHeaders(request)
    this.loaderService.show();
    return next.handle(request).pipe(
      finalize(() => this.loaderService.hide())
  );
  }


  private appHeaders(request:HttpRequest<any>){
    let token='gettoken'
    let headers=request.headers
                .set('Access-Control-Allow-Origin', '*')
                .set('Access-Control-Allow-Methods', 'GET,POST,OPTION')
                .set('Authorization',`Bearer ${token}`);
                
    //for sso
    //  return request.clone({withCredentials:true})
   
    return request.clone({headers});

  }
}
