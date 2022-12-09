import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormBuilder,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Testing1Component } from './testing1.component';


describe('Testing1Component', () => {
  let component: Testing1Component;
  let fixture: ComponentFixture<Testing1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,FormsModule],
      declarations: [ Testing1Component ],
      providers:[FormBuilder]
    })
    .compileComponents().then(()=>{
      fixture = TestBed.createComponent(Testing1Component);
      component = fixture.componentInstance;
      
      fixture.detectChanges();
      component.ngOnInit();
    })

   
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('welcome title',()=>{
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#welcome')?.textContent).toContain('Welcome to Unit Testing');
  })

  it('sum of two number',()=>{
    const a=1
    const b=2
    const c= component.sum(1,2)
   expect(c).toEqual(a+b)
  })


   it('form should be invalid',()=>{
    component.contactForm.controls['name'].setValue('')
    component.contactForm.controls['email'].setValue('')
    component.contactForm.controls['text'].setValue('')

    expect(component.contactForm.errors!=null).toBeFalse();
  })


  
  it('form should be valid',()=>{
    component.contactForm.controls['name'].setValue('vinay')
    component.contactForm.controls['email'].setValue('vinays.urs@gmail.com')
    component.contactForm.controls['text'].setValue('dummy')

    expect(component.contactForm.errors==null).toBeTrue();
  })



});
