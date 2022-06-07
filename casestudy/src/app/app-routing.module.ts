import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {CustomerComponent} from './customer/customer.component';

import {ContractComponent} from './contract/contract.component';
import {FacilityComponent} from './facility/facility.component';
import {CustomerFormComponent} from './customer-form/customer-form.component';





const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'customer-form', component: CustomerFormComponent},
  {path: 'facility', component: FacilityComponent},
  {path: 'contract', component: ContractComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
