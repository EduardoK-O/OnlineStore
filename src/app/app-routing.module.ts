import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './public/home/default/default.component';
import {ProductosComponent} from './modules/productos/productos.component';
import {AgregarProductoComponent} from "./modules/agregar-producto/agregar-producto.component";



import{CatalogoComponent} from './modules/store/catalogo/catalogo.component';

import { ShoppingCartComponent } from './modules/shopping-cart/shopping-cart/shopping-cart.component';
import { ContactFormComponent } from './modules/contacto/contact-form/contact-form.component';



const routes: Routes = [
  {
    path: 'home',
    component: DefaultComponent
  },

  {
    path: 'tienda',
    loadChildren: () => import('./modules/store/store.module').then(m => m.StoreModule)
  },

  {
    path: 'carrito',
    component: ShoppingCartComponent
  },

  {
    path: 'contacto',
    component: ContactFormComponent
  },

  {
    path: 'daily-offers',
    loadChildren: () => import('./modules/daily-offers/daily-offers.module').then(m => m.DailyOffersModule)
  },

  {
    path: 'best-sellers',
    loadChildren: () => import('./modules/best-sellers/best-sellers.module').then(m => m.BestSellersModule)
  },

  {
    path: 'your-store',
    loadChildren: () => import('./modules/your-store/your-store.module').then(m => m.YourStoreModule)
  },

  {
    path: 'find-us',
    loadChildren: () => import('./modules/locations/locations.module').then(m => m.LocationsModule)
  },
  {path: 'productos', component: ProductosComponent},
  {path: 'productos/agregar', component: AgregarProductoComponent},
 
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },

  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
