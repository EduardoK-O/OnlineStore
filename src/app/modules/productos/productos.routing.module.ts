import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from 'src/app/modules/productos/productos.component'

const routes: Routes = [
  {
    path: '',
    component: ProductosComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class ProductosRoutingModule { }