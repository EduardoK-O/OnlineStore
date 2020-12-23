import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from 'src/app/public/master-page/side-menu/side-menu.component';



@NgModule({
  declarations: [SideMenuComponent],
  imports: [
    CommonModule
  ],
  exports:[SideMenuComponent]
})
export class SharedModule { }
