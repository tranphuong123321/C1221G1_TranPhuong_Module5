import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import {CustomerComponent} from './customer/customer.component';
import {CustomerFormComponent} from './customer-form/customer-form.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    CustomerComponent,
    CustomerFormComponent,
    CustomerEditComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
