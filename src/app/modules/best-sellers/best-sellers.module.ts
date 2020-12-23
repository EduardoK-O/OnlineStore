import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BestSellersRoutingModule } from './best-sellers-routing.module';
import { BestSellersComponent } from './best-sellers-component/best-sellers/best-sellers.component';
import { SharedModule } from '../shared/shared/shared.module';


@NgModule({
  declarations: [BestSellersComponent],
  imports: [
    CommonModule,
    BestSellersRoutingModule,
    SharedModule
  ]
})
export class BestSellersModule { }
