import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarrouselModule} from "../carrousel/carrousel.module";
import {HomeComponent} from "./components/home/home.component";
import {PromotionComponent} from "./components/promotion/promotion.component";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    HomeComponent,
    PromotionComponent
  ],
  imports: [
    CommonModule,
    CarrouselModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    PromotionComponent
  ]
})
export class HomeModule {
}
