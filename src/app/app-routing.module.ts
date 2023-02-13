import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarolsHomeComponent } from './carols/carols-home/carols-home.component';
import { CarolslistHomeComponent } from './carolsList/carolslist-home/carolslist-home.component';
import { FanddHomeComponent } from './foodanddrinks/fandd-home/fandd-home.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { ReportsComponent } from './reports/reports.component';
import { TraditionHomeComponent } from './tradition/tradition-home/tradition-home.component';

const routes: Routes = [
  {
    path:'', component:HomepageComponent
  },
  {
    path:'tradition', component:TraditionHomeComponent
  },
  {
    path:'food', component:FanddHomeComponent
  },
  {
    path:'carols', component:CarolsHomeComponent
  },
  {
    path:'carolslist', component:CarolslistHomeComponent
  },
  {
    path:'reports', component:ReportsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
