import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FacilityFormComponent} from './facility-form/facility-form.component';
import {FacilityEditComponent} from './facility-edit/facility-edit.component';
import {FacilityComponent} from './facility/facility.component';


const routes: Routes = [
  {path: 'create', component: FacilityFormComponent},
  {path: 'edit', component: FacilityEditComponent},
  {path: 'list', component: FacilityComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule {
}
