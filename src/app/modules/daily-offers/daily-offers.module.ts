import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyOffersRoutingModule } from './daily-offers-routing.module';
import { DailyOffersComponent } from './daily-offers-component/daily-offers.component';
import { SharedModule } from '../shared/shared/shared.module';
import { FindProductsService } from 'src/app/services/find-products/find-products.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [DailyOffersComponent],
  imports: [
    CommonModule,
    DailyOffersRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers:[
    FindProductsService
  ]
})
export class DailyOffersModule { }
