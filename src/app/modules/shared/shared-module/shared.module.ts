import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from 'src/app/public/master-page/side-menu/side-menu.component';
import { ProductPreviewComponent } from '../product-preview/product-preview.component';



@NgModule({
  declarations: [
    SideMenuComponent,
    ProductPreviewComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SideMenuComponent,
    ProductPreviewComponent
  ]
})
export class SharedModule { }
