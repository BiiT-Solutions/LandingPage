import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {TranslocoRootModule} from "biit-ui/i18n";
import {CommonModule} from "@angular/common";
import {BiitGalleryCardModule} from "biit-ui/info";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    TranslocoRootModule,
    BiitGalleryCardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
