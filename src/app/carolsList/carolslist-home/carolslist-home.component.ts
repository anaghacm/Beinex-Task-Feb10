import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carolslist-home',
  templateUrl: './carolslist-home.component.html',
  styleUrls: ['./carolslist-home.component.scss']
})
export class CarolslistHomeComponent implements OnInit {

  public mainHeading:string='Christmas Songs';
  public subHeading:string='Enjoy with music';
  constructor() { }

  ngOnInit(): void {
  }

}
