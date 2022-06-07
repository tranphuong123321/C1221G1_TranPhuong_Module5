import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ServerHttpService} from '../Services/server-http.service';
import {CommonService} from '../Services/common.service';
import {Router} from '@angular/router';
import {Customer} from '../model/Customer';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  public customerForm = new FormGroup({
    id: new FormControl(''),
    code: new FormControl(''),
    gender: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    dob: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
  });

  constructor(
    private serverHttp: ServerHttpService,
    private common: CommonService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  public onSubmit() {
    const newCustomer = {};
    for (const controlName in this.customerForm.controls) {
      if (controlName) {
        newCustomer[controlName] = this.customerForm.controls[controlName].value;
      }
    }
    this.serverHttp.addCustomer(newCustomer as Customer).subscribe ((data) => {
      this.router.navigate(['customer']);
    });
  }
}
