import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Customer} from '../model/Customer';
import {ServerHttpService} from '../Services/server-http.service';
import {CommonService} from '../Services/common.service';
import {Router} from '@angular/router';
import {Facility} from '../model/Facility';

@Component({
  selector: 'app-facility-form',
  templateUrl: './facility-form.component.html',
  styleUrls: ['./facility-form.component.css']
})
export class FacilityFormComponent implements OnInit {
  public facilityForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    area: new FormControl(''),
    cost: new FormControl(''),
    maxPeople: new FormControl(''),
    rentType: new FormControl(''),
    romStandard: new FormControl(''),
    otherAamenities: new FormControl(''),
    poolArea: new FormControl(''),
    numberFloors: new FormControl(''),
    freeServiceIncluded: new FormControl(''),
  });

  constructor(
    private serverHttp: ServerHttpService,
    private common: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  public onSubmit() {
    const newFacility = {};
    for (const controlName in this.facilityForm.controls) {
      if (controlName) {
        newFacility[controlName] = this.facilityForm.controls[controlName].value;
      }
    }
    this.serverHttp.addFacility(newFacility as Facility).subscribe ((data) => {
      this.router.navigate(['facility']);
    });
  }
}
