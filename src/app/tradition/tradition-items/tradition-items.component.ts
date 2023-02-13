import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tradition-items',
  templateUrl: './tradition-items.component.html',
  styleUrls: ['./tradition-items.component.scss']
})
export class TraditionItemsComponent implements OnInit {

  public date1: string = 'February 8, 2023';
  public date2: string = 'February 2, 2023';
  public heading1: string = 'Twas the Night Before Christmas (A Visit from St. Nicholas)';
  public heading2: string = 'Christmas Sweaters: Horrible Gift or Holiday Couture?';
  public content1: string = "Nearly everyone's heard the famous opening lines “Twas the night before Christmas, when all through the house…” But did you know that the poem's also responsible for much of the";
  public content2: string = 'Waking up early Christmas morning, rushing downstairs to open your presents, and mixed in with the trucks and dolls and video games is a handmade sweater. Chunky. Heavy. Itchy. It’s';
  public btnclass: string = 'btn btn-read'

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  viewReport() {
    this.router.navigateByUrl('/reports');
  }
}
