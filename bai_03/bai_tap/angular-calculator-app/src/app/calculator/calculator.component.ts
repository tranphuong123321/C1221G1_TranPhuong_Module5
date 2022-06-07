import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  public num1: number;
  public num2: number;
  public result: number;
  public operator: string;

  constructor() {
  }

  ngOnInit(): void {
  }


}
