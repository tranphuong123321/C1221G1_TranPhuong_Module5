import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../Model/Customer';
import {ServerHttpService} from '../../Services/server-http.service';
import {CommonService} from '../../Services/common.service';
import {Router} from '@angular/router';
import {Facility} from '../../Model/Facility';

@Component({
  selector: 'app-facility-form',
  templateUrl: './facility-form.component.html',
  styleUrls: ['./facility-form.component.css']
})
export class FacilityFormComponent implements OnInit {
  public facilityForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.pattern('')]),
    area: new FormControl('', [Validators.required, Validators.pattern('[+]?\\\\d*\\\\.?\\\\d*')]),
    cost: new FormControl('', [Validators.required]),
    maxPeople: new FormControl('', [Validators.required]),
    rentType: new FormControl('', [Validators.required]),
    romStandard: new FormControl('', [Validators.required]),
    otherAamenities: new FormControl('', [Validators.required]),
    poolArea: new FormControl('', [Validators.required]),
    numberFloors: new FormControl('', [Validators.required, Validators.pattern('[+]?\\\\d*\\\\.?\\\\d*')]),
    freeServiceIncluded: new FormControl('', [Validators.required]),
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
