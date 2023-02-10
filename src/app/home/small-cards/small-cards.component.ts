import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-cards',
  templateUrl: './small-cards.component.html',
  styleUrls: ['./small-cards.component.scss']
})
export class SmallCardsComponent implements OnInit {

  public mainhead:string='Latest in Food & Drinks';

  constructor() { }

  ngOnInit(): void {
  }

}
