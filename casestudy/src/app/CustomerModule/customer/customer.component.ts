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
  p = 1;
  idToDelete: number;
  nameToDelete: string;

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
    this.router.navigate(['customer/create']);
  }

  public deleteCustomer() {
    this.serverHttp.deleteCustomer(this.idToDelete).subscribe((data) => {
      this.loadData();
    });
  }

  showMess(id: any, name: any) {
    this.idToDelete = id;
    this.nameToDelete = name;
  }
}
