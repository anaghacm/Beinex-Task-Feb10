import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fandd-home',
  templateUrl: './fandd-home.component.html',
  styleUrls: ['./fandd-home.component.scss']
})
export class FanddHomeComponent implements OnInit {

  public mainHeading:string='Christmas Provisions';
  public subHeading:string='Food, Drinks, Sweets and Treats';
  constructor() { }

  ngOnInit(): void {
  }

}
