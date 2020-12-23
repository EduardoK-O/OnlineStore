import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BestSellersComponent } from './best-sellers-component/best-sellers/best-sellers.component';

const routes: Routes = [
  {
    path: '',
    component: BestSellersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BestSellersRoutingModule { }
