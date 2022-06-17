import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContractComponent} from './contract/contract.component';
import {ContractFormComponent} from './contract-form/contract-form.component';


const routes: Routes = [
  {path: 'list', component: ContractComponent},
  {path: 'create', component: ContractFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }
