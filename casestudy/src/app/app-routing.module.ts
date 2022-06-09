import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {CustomerComponent} from './customer/customer.component';

import {ContractComponent} from './contract/contract.component';
import {FacilityComponent} from './facility/facility.component';
import {CustomerFormComponent} from './customer-form/customer-form.component';
import {FacilityFormComponent} from './facility-form/facility-form.component';
import {FacilityEditComponent} from './facility-edit/facility-edit.component';
import {ContractFormComponent} from './contract-form/contract-form.component';





const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'customer-form', component: CustomerFormComponent},
  {path: 'facility', component: FacilityComponent},
  {path: 'contract', component: ContractComponent},
  {path: 'contract-form', component: ContractFormComponent},
  {path: 'facility-form', component: FacilityFormComponent},
  {path: 'facility-edit', component: FacilityEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
