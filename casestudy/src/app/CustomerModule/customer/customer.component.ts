import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CommonService} from '../../Services/common.service';
import {ServerHttpService} from '../../Services/server-http.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  public customer = [];

  constructor(
    private common: CommonService,
    private serverHttp: ServerHttpService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
   this.loadData();
  }
private loadData() {
  this.serverHttp.getCustomer().subscribe((data) => {
    this.customer = data;
  });
}
  public addCustomer() {
    this.router.navigate(['customer-form']);
  }

  public deleteCustomer(customerId) {
    this.serverHttp.deleteCustomer(customerId).subscribe((data) => {
      this.loadData();
    });
  }
}
