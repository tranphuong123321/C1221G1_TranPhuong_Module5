import { Component, OnInit } from '@angular/core';
import {ServerHttpService} from '../../Services/server-http.service';
import {CommonService} from '../../Services/common.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

import {Contract} from '../../Model/Contract';

@Component({
  selector: 'app-contract-form',
  templateUrl: './contract-form.component.html',
  styleUrls: ['./contract-form.component.css']
})
export class ContractFormComponent implements OnInit {
  public contractForm = new FormGroup({
    id: new FormControl(''),
    code: new FormControl(''),
    customer: new FormControl(''),
    facility: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    deposit: new FormControl(''),
  });

  constructor(
    private serverHttp: ServerHttpService,
    private common: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  public onSubmit() {
    const newContract = {};
    for (const controlName in this.contractForm.controls) {
      if (controlName) {
        newContract[controlName] = this.contractForm.controls[controlName].value;
      }
    }
    this.serverHttp.addContract(newContract as Contract).subscribe ((data) => {
      this.router.navigate(['contract']);
    });
  }
}
