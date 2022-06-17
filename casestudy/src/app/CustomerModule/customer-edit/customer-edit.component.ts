import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ServerHttpService} from '../../Services/server-http.service';
import {Customer} from '../../Model/Customer';
import {Observable} from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {inspect} from 'util';


@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm: FormGroup;
  id: number;
  customer: Customer;

  constructor(private serverHttpService: ServerHttpService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.serverHttpService.findById(this.id).subscribe(
        (customer) => {
          this.customerForm = new FormGroup({
            code: new FormControl(customer.code, [Validators.required, Validators.pattern('KH-\\d{4}')]),
            name: new FormControl(customer.name, [Validators.required]),
            birthDay: new FormControl(customer.birthDay, [Validators.required, Validators.pattern('^\\d{4}\\-\\d{2}\\-\\d{2}$')]),
            gender: new FormControl(customer.gender, [Validators.required]),
            idCard: new FormControl(customer.idCard, [Validators.required, Validators.pattern('\\d{9}')]),
            numberPhone: new FormControl(customer.numberPhone, [Validators.required, Validators.pattern('((\\(84\\)\\+(90))|(\\(84\\)\\+(91))|(090)|(091))\\d{7}')]),
            email: new FormControl(customer.email, [Validators.required, Validators.pattern('^([a-z]\\w+@[a-z]{2,}\\.)\\w{2,10}(\\.\\w{2,3})?$')]),
            address: new FormControl(customer.address, [Validators.required]),
            customerType: new FormControl(customer.customerType, [Validators.required])
          });
        }
      );
    });
  }

  ngOnInit(): void {
  }

  updateCustomer(id: number) {
    const customer = this.customerForm.value;
    this.serverHttpService.updateCustomer(id, customer).subscribe(() => {
      alert('Cập nhật thành công');
      this.router.navigate(['/customer/list']);
    });
  }
}
