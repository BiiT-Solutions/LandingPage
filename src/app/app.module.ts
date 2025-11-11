import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {TranslocoRootModule} from "@biit-solutions/wizardry-theme/i18n";
import {CommonModule} from "@angular/common";
import {BiitGalleryCardModule, BiitTooltipModule} from "@biit-solutions/wizardry-theme/info";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    TranslocoRootModule,
    BiitGalleryCardModule,
    BiitTooltipModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
