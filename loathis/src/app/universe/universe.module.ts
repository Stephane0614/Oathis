import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MicrosoftComponent} from "./components/microsoft/microsoft.component";
import {NintendoComponent} from "./components/nintendo/nintendo-universe.component";
import {SonyComponent} from "./components/sony/sonypage.component";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    MicrosoftComponent,
    NintendoComponent,
    SonyComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MicrosoftComponent,
    NintendoComponent,
    SonyComponent,
  ]
})
export class UniverseModule {
}
