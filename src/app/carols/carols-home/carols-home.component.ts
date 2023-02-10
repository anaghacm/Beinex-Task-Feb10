import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carols-home',
  templateUrl: './carols-home.component.html',
  styleUrls: ['./carols-home.component.scss']
})
export class CarolsHomeComponent implements OnInit {

  public mainHeading:string='Christmas Carols';
  public subHeading:string='Spreading Holiday Cheer';
  constructor() { }

  ngOnInit(): void {
  }

}
