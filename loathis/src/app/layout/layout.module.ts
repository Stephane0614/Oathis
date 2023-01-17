import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout.component';
import {SharedModule} from "../shared/shared.module";
import {CoreModule} from "../core/core.module";
import {CarrouselModule} from "../carrousel/carrousel.module";


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    CarrouselModule,
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule {
}
