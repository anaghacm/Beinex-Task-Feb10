import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fandd-items',
  templateUrl: './fandd-items.component.html',
  styleUrls: ['./fandd-items.component.scss']
})
export class FanddItemsComponent implements OnInit {

  public date1: string = 'February 8, 2023';
  public date2: string = 'February 2, 2023';
  public heading1: string = '25 Christmas Cocktails to Ease You into a Holiday Spirit';
  public heading2: string = '19 Christmas Cookies to Bring the Family Hustling Home';
  public content1: string = "A toast! A toast! Cheers to your health this holiday, with classics like spiked eggnog, mulled wine, candy cane martinis; the list goes on and on—actually why not drink it all in?";
  public content2: string = 'From gingerbread to gingersnaps, shortbread to sugar cookies, Christmas cookies can make (or bake) the holidays. Get your seasonal fix with our 19 classic treats.';
  public btnclass:string='btn btn-read'
  constructor() { }

  ngOnInit(): void {
  }

}
