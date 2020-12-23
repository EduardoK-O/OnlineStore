import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyOffersComponent } from '././daily-offers-component/daily-offers.component';

const routes: Routes = [
  {
    path: '',
    component: DailyOffersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyOffersRoutingModule { }
