import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  public facility = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  public addFacility() {
    this.router.navigate(['facility-form']);
  }
}
