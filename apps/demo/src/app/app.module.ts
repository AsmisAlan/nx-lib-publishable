import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlibModule } from '@nx-publishable-lib/alib'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AlibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
