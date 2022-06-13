import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('^([a-z]\\w+@[a-z]{2,}\\.)\\w{2,10}(\\.\\w{2,3})?$')]),
    password: new FormControl('', [Validators.required, Validators.pattern('^\\d{6,}$')]),
  });

  constructor() { }

  ngOnInit(): void {
  }
public onSubmit() {

}
}
