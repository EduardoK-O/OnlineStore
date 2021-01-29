import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './containers/admin/admin.component';
import { RandomRoutingModule } from './admin.routing.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    RandomRoutingModule,
    MatButtonModule
  ]
})
export class AdminModule { }
