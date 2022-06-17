import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilityRoutingModule } from './facility-routing.module';
import {FacilityEditComponent} from './facility-edit/facility-edit.component';
import {FacilityComponent} from './facility/facility.component';
import {FacilityFormComponent} from './facility-form/facility-form.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    FacilityEditComponent,
    FacilityComponent,
    FacilityFormComponent,
  ],
  imports: [
    CommonModule,
    FacilityRoutingModule,
    ReactiveFormsModule
  ]
})
export class FacilityModule { }
