import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrouselComponent } from './carrousel.component';



@NgModule({
  declarations: [
    CarrouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CarrouselComponent
  ]
})
export class CarrouselModule { }
