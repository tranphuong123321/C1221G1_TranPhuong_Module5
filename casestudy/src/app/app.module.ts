import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { ContractComponent } from './contract/contract.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import {ReactiveFormsModule} from '@angular/forms';

import { FacilityComponent } from './facility/facility.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FacilityFormComponent } from './facility-form/facility-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerComponent,
    ContractComponent,
    CustomerFormComponent,
    FacilityComponent,
    FacilityFormComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
