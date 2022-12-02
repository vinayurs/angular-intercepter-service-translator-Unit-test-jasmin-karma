import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userList:[]=[]
  title = 'demo';
  constructor(private apiservice:ApiService){

  }


  ngOnInit() {
    this.getUsers()
  }

  getUsers(){
    this.apiservice.getuser().subscribe((data:any)=>{
      this.userList=data['users']
    })
  }

}
