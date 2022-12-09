import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockapiserviceService {

  getuser(){
    return of(require("./../app/mockdata/userall.json"))
   }

}
