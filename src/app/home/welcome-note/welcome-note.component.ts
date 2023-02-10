import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-note',
  templateUrl: './welcome-note.component.html',
  styleUrls: ['./welcome-note.component.scss']
})
export class WelcomeNoteComponent implements OnInit {

  public head1:string='Welcome to Your';
  public head2:string='Winter Wine!';
  public content1:string='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nesciunt ipsa corrupti dolores quod,';
  public content2:string=' magnam, fuga officiis necessitatibus labore dolorum';
  public content3:string=' at laboriosam expedita ab dicta. Quisquam repellendus voluptates esse minus!';

  constructor() { }

  ngOnInit(): void {
  }

}
