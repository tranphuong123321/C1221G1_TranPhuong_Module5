import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ServerHttpService} from '../../Services/server-http.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm: FormGroup;
  id: number;

  constructor(private serverHttpService: ServerHttpService) { }

  ngOnInit(): void {
  }
  updateCustomer(id: number) {
    const product = this.customerForm.value;
    product.category = {
      id: product.category
    };
    this.serverHttpService.updateCustomer(id, customer).subscribe(() => {
      alert('Cập nhật thành công');
      this.router.navigate(['/product-list']);
    });
  }
}
