import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { CustomerComponent } from './CustomerModule/customer/customer.component';
import { ContractComponent } from './ContractModule/contract/contract.component';
import { CustomerFormComponent } from './CustomerModule/customer-form/customer-form.component';
import {ReactiveFormsModule} from '@angular/forms';

import { FacilityComponent } from './FacilityModule/facility/facility.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FacilityFormComponent } from './FacilityModule/facility-form/facility-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { FacilityEditComponent } from './FacilityModule/facility-edit/facility-edit.component';
import { ContractFormComponent } from './ContractModule/contract-form/contract-form.component';
import { CustomerEditComponent } from './CustomerModule/customer-edit/customer-edit.component';
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
    FooterComponent,
    FacilityEditComponent,
    ContractFormComponent,
    CustomerEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatBadgeModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
