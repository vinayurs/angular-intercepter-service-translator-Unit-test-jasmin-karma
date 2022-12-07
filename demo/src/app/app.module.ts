import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from 'src/intercepter/api.interceptor';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { Testing1Component } from './components/fortesting/testing1/testing1.component';
import { Testing2Component } from './components/fortesting/testing2/testing2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    Testing1Component,
    Testing2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass:ApiInterceptor, multi: true }],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
