import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carols-items',
  templateUrl: './carols-items.component.html',
  styleUrls: ['./carols-items.component.scss']
})
export class CarolsItemsComponent implements OnInit {

  public date1: string = 'February 4, 2023';
  public date2: string = 'February 1, 2023';
  public heading1: string = 'The Twelve Days of Christmas';
  public heading2: string = 'Jingle Bells';
  public content1: string = "In what’s called a “cumulative song,” The Twelve Days of Christmas recounts each of the gifts given to the singer by their “true love.” This British 18th Century song began as a memory";
  public content2: string = 'This Christmas carol originally began as a Thanksgiving song. Published as “One Horse Open Sleigh,” it commemorated the popular sleigh races of the 1800s. It became so popular that in 1965 it became the first song broadcast';
  public btnclass: string = 'btn btn-read';
  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  viewReport() {
    this.router.navigateByUrl('/reports');
  }
}
