import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from "./component/products/products.component";
import {ProductPage4Component} from "./component/product-page4/product-page4.component";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    ProductsComponent,
    ProductPage4Component
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProductsComponent,
    ProductPage4Component
  ]
})
export class ProductModule {
}
