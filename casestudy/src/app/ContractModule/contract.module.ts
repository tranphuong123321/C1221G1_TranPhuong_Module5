import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ContractFormComponent} from './contract-form/contract-form.component';
import {ContractComponent} from './contract/contract.component';


@NgModule({
  declarations: [
    ContractFormComponent,
    ContractComponent,
  ],
  imports: [
    CommonModule,
    ContractRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContractModule { }
