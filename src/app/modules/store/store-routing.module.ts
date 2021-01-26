import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductPreviewComponent } from '../shared/product-preview/product-preview.component';
import { CatalogoComponent } from './catalogo/catalogo.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogoComponent
  },

  {
    path: 'producto',
    component: ProductPreviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
