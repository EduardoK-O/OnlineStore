import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProductoComponent } from 'src/app/modules/agregar-producto/agregar-producto.component'

const routes: Routes = [
  {
    path: '',
    component: AgregarProductoComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AgregarProductoRoutingModule { }