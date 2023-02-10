import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tradition-home',
  templateUrl: './tradition-home.component.html',
  styleUrls: ['./tradition-home.component.scss']
})
export class TraditionHomeComponent implements OnInit {

  public mainHeading:string='Christmas Traditions';
  public subHeading:string='Celebrate with Santa, Gifts, Games and Poems';
  constructor() { }

  ngOnInit(): void {
  }

}
