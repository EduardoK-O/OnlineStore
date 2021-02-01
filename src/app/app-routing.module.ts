import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './public/home/default/default.component';
import {ProductosComponent} from './modules/productos/productos.component';
import {AgregarProductoComponent} from "./modules/agregar-producto/agregar-producto.component";;
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{CatalogoComponent} from './modules/store/catalogo/catalogo.component';
import { ShoppingCartComponent } from './modules/shopping-cart/shopping-cart/shopping-cart.component';
import { ContactFormComponent } from './modules/contacto/contact-form/contact-form.component';
import { LoginComponent } from 'src/app/modules/Login/auth/containers/login/login.component';
import { AuthGuard } from 'src/app/modules/Login/auth/guards/auth.guard';
import { RandomGuard } from 'src/app/modules/Login/auth/guards/random.guard';
import {ProductosGuard} from 'src/app/modules/Login/auth/guards/productos.guard'
import {AgregarProductoGuard} from 'src/app/modules/Login/auth/guards/agregar-producto.guard'

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
    path: 'find-us',
    loadChildren: () => import('./modules/locations/locations.module').then(m => m.LocationsModule)
  },
  {
    path: 'productos',
    loadChildren : () => import('src/app/modules/productos/productos.module').then(m => m.ProductosModule),
      
    component:ProductosComponent,
    canActivate: [ProductosGuard],
     
    
  },

  {
    path: 'productos/agregar',
    loadChildren : () => import('src/app/modules/agregar-producto/agregar-producto.module').then(m => m.AgregarProductoModule),
      component: AgregarProductoComponent,
    
    canActivate: [AgregarProductoGuard],
      canLoad: [AgregarProductoGuard]
    },

    {
        path:'signup',
        loadChildren: () => import('src/app/modules/signup/signup.module').then(m=>m.SignupModule),  
    },


    {
      path: 'login',
      component: LoginComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'admin',
      loadChildren : () => import('src/app/modules/Login/vistaRoles/admin.module').then(m => m.AdminModule),
      canActivate: [RandomGuard],
      canLoad: [RandomGuard]
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
