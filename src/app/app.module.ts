import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './home/banner/banner.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { WelcomeNoteComponent } from './home/welcome-note/welcome-note.component';
import { InfoCardsComponent } from './home/info-cards/info-cards.component';
import { SmallCardsComponent } from './home/small-cards/small-cards.component';
import { SmallcardBaseComponent } from './home/smallcard-base/smallcard-base.component';
import { MailCardComponent } from './home/mail-card/mail-card.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { TraditionHomeComponent } from './tradition/tradition-home/tradition-home.component';
import { TraditionItemsComponent } from './tradition/tradition-items/tradition-items.component';
import { FanddItemsComponent } from './foodanddrinks/fandd-items/fandd-items.component';
import { FanddHomeComponent } from './foodanddrinks/fandd-home/fandd-home.component';
import { CarolsHomeComponent } from './carols/carols-home/carols-home.component';
import { CarolsItemsComponent } from './carols/carols-items/carols-items.component';
import { CarolslistHomeComponent } from './carolsList/carolslist-home/carolslist-home.component';
import { CarolslistTableComponent } from './carolsList/carolslist-table/carolslist-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    HomepageComponent,
    WelcomeNoteComponent,
    InfoCardsComponent,
    SmallCardsComponent,
    SmallcardBaseComponent,
    MailCardComponent,
    FooterComponent,
    TraditionHomeComponent,
    TraditionItemsComponent,
    FanddItemsComponent,
    FanddHomeComponent,
    CarolsHomeComponent,
    CarolsItemsComponent,
    CarolslistHomeComponent,
    CarolslistTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
