import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    birthDay: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}\\-\\d{2}\\-\\d{2}$')]),
    gender: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.pattern('\\d{9}')]),
    numberPhone: new FormControl('', [Validators.required, Validators.pattern('\\d{10}')]),
    email: new FormControl('', [Validators.required, Validators.pattern('^([a-z]\\w+@[a-z]{2,}\\.)\\w{2,10}(\\.\\w{2,3})?$')]),
    address: new FormControl('', [Validators.required]),
    customerType: new FormControl('', [Validators.required]),
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
