import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-testing1',
  templateUrl: './testing1.component.html',
  styleUrls: ['./testing1.component.css']
})
export class Testing1Component implements OnInit {
  contactForm!:FormGroup

  constructor(public fb:FormBuilder){
   
  }

  ngOnInit(): void {
    
    
    
    this.contactForm=this.fb.group({
      name:['',[Validators.required]],
      email:['',[Validators.required]],
      text:['',[Validators.required,Validators.email]]
    })


 

  }

  sum(a: number,b: number){

    return a+b;
  }




}
