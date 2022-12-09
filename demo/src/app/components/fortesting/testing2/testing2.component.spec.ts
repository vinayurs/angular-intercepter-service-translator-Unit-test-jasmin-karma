import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from 'src/services/api.service';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { Testing2Component } from './testing2.component';
import {MockapiserviceService} from '../../../../services/mockapiservice.service';

describe('Testing2Component', () => {
  let component: Testing2Component;
  let fixture: ComponentFixture<Testing2Component>;
  let ApiService:ApiService
  let fakeApiService=new MockapiserviceService()
  let httpMock:HttpTestingController; 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Testing2Component],
      imports:[HttpClientTestingModule],
      providers:[{provide:ApiService,useValue:fakeApiService}]
    
    })
    .compileComponents();

    ApiService=TestBed.get(ApiService);
    httpMock=TestBed.get(HttpTestingController)

    fixture = TestBed.createComponent(Testing2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('apitest',()=>{
    const dummy=[]
     
    fakeApiService.getuser().subscribe((data:any)=>{
      
      expect(data.users.length==30).toBe(true)
    })

  })


});
