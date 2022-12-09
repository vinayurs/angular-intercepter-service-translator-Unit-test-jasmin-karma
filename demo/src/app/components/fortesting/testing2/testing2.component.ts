import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../../services/api.service'

@Component({
  selector: 'app-testing2',
  templateUrl: './testing2.component.html',
  styleUrls: ['./testing2.component.css']
})
export class Testing2Component implements OnInit{
  userList:any;
  constructor(private apiService:ApiService){

  }

  ngOnInit() {
    
  }

  getUsers(){
    this.apiService.getuser().subscribe((data:any)=>{
      this.userList=data['users']
    })
  }



}
