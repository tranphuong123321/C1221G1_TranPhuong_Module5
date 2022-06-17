import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {CustomerComponent} from './CustomerModule/customer/customer.component';

import {ContractComponent} from './ContractModule/contract/contract.component';
import {FacilityComponent} from './FacilityModule/facility/facility.component';
import {CustomerFormComponent} from './CustomerModule/customer-form/customer-form.component';
import {FacilityFormComponent} from './FacilityModule/facility-form/facility-form.component';
import {FacilityEditComponent} from './FacilityModule/facility-edit/facility-edit.component';
import {ContractFormComponent} from './ContractModule/contract-form/contract-form.component';
import {CustomerEditComponent} from './CustomerModule/customer-edit/customer-edit.component';





const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {
    path: 'customer',
    loadChildren: () => import('./CustomerModule/customer.module').then(module => module.CustomerModule)
  },
  {
    path: 'facility',
    loadChildren: () => import('./FacilityModule/facility.module').then(module => module.FacilityModule)
  },
  {
    path: 'contract',
    loadChildren: () => import('./ContractModule/contract.module').then(module => module.ContractModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
