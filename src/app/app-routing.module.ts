import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './public/home/default/default.component';

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
    path: 'shopping-cart',
    loadChildren: () => import('./modules/shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule)
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
