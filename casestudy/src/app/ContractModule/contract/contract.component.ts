import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CommonService} from '../../Services/common.service';
import {ServerHttpService} from '../../Services/server-http.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  public contract = [];
  constructor(
    private common: CommonService,
    private serverHttp: ServerHttpService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.serverHttp.getContract().subscribe((data) => {
      this.contract = data;
    });
  }
  public addContract() {
    this.router.navigate(['contract-form']);
  }
}
