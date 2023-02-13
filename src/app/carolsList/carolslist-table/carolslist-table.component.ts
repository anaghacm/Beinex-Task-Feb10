import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carolslist-table',
  templateUrl: './carolslist-table.component.html',
  styleUrls: ['./carolslist-table.component.scss']
})
export class CarolslistTableComponent implements OnInit {

  public textClass: string = 'song-description';
  public tableDisplay: boolean = false;
  public songsBtn: string = 'Display Songs';
  public newStyleCol1: boolean = false;
  public newStyleCol2: boolean = false;
  public newStyleCol3: boolean = false;
  public songList = [
    {
      id: 1,
      title: 'Christmas Lights',
      artist: 'Coldplay'
    },
    {
      id: 2,
      title: 'Merry Christmas Everyone',
      artist: 'Shaking Stevens'
    },
    {
      id: 3,
      title: 'Step into Christmas',
      artist: 'Elton John'
    },
    {
      id: 4,
      title: 'Santa Tell Me',
      artist: 'Ariana Grande'
    },
    {
      id: 5,
      title: 'I Wish it could be Christmas Everyday',
      artist: 'Wizzard'
    },
    {
      id: 6,
      title: 'Rocking Around the Christmas Tree',
      artist: 'Brenda Lee'
    },
    {
      id: 7,
      title: 'Driving Home for Christmas',
      artist: 'Mariah Carey'
    },
    {
      id: 8,
      title: 'Merry Xmas Everybody',
      artist: 'Slade'
    },
    {
      id: 9,
      title: 'Underneath the Tree',
      artist: 'Kelly Clarkson'
    },
    {
      id: 10,
      title: 'Mistletoe',
      artist: 'Justin Bieber'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  displayTable() {
    this.tableDisplay = !this.tableDisplay;
    if (this.tableDisplay) {
      this.songsBtn = 'Hide Songs'
    }
    else {
      this.songsBtn = 'Display Songs'
    }
  }
  changeStyle(colNumber: any) {
    if(colNumber==1){
      this.newStyleCol1 = !this.newStyleCol1;
    }
    else if(colNumber==2){
      this.newStyleCol2 = !this.newStyleCol2;
    }
    else if(colNumber==3){
      this.newStyleCol3 = !this.newStyleCol3;
    }
  }
}
