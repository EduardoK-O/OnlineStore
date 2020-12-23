import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRoutingModule } from './store-routing.module';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { FindProductsService } from 'src/app/services/find-products/find-products.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ;
import { SharedModule } from '../shared/shared-module/shared.module';


@NgModule({
  declarations: [
    CatalogoComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    HttpClientModule,
    NgbModule,
    SharedModule
  ],
  providers: [
    FindProductsService
  ],
  bootstrap: [CatalogoComponent]
})
export class StoreModule { }
