import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule} from "@angular/common/http";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {SearchComponent} from "./components/search/search.component";


@NgModule({
  declarations: [
    NavbarComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
  ],
  exports: [
    NavbarComponent,
    SearchComponent
  ]
})
export class CoreModule { }
