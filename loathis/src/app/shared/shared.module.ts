import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {CardComponent} from './components/card/card.component';
import {SelectComponent} from './components/form/select/select.component';
import {DateComponent} from './components/form/date/date.component';
import {InputComponent} from './components/form/input/input.component';
import {CheckboxComponent} from './components/form/checkbox/checkbox.component';
import {RadioComponent} from './components/form/radio/radio.component';
import {ButtonComponent} from './components/button/button.component';
import {RouterModule} from '@angular/router';
import {ProductCardComponent} from "./components/product-card/product-card.component";
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    CardComponent,
    InputComponent,
    SelectComponent,
    DateComponent,
    CheckboxComponent,
    RadioComponent,
    ButtonComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    CardComponent,
    InputComponent,
    SelectComponent,
    DateComponent,
    CheckboxComponent,
    RadioComponent,
    ButtonComponent,
    ProductCardComponent
  ]
})

export class SharedModule {
}
