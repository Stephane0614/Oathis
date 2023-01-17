import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import {HomeModule} from "./home/home.module";
import {LayoutModule} from "./layout/layout.module";
import {UniverseModule} from "./universe/universe.module";
import { AppComponent } from './app.component';
import {ProductModule} from "./product/product.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HomeModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    LayoutModule,
    UniverseModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
