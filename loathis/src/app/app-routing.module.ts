import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/components/home/home.component';
import {AuthComponent} from "./auth/auth.component";
import {ProductPage4Component} from "./product/component/product-page4/product-page4.component";
import {ProductsComponent} from "./product/component/products/products.component";
import {SonyComponent} from "./universe/components/sony/sonypage.component";
import {NintendoComponent} from "./universe/components/nintendo/nintendo-universe.component";
import {MicrosoftComponent} from "./universe/components/microsoft/microsoft.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'product-4',
    component: ProductPage4Component,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'microsoft',
    component: MicrosoftComponent
  },
  {
    path: 'nintendo',
    component: NintendoComponent,
  },
  {
    path: 'sony',
    component: SonyComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
