import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VowelPickerComponent } from './vowel-picker/vowel-picker.component';
import { createCustomElement } from '@angular/elements'
import { createElementCssSelector } from '@angular/compiler';

@NgModule({
  declarations: [
    AppComponent,
    VowelPickerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [VowelPickerComponent]
})
export class AppModule {
  constructor(private injector: Injector){

    //creating custom element
    const vowelPicker = createCustomElement(VowelPickerComponent, {injector})

    //registering custom element
    customElements.define("app-vowel-picker", vowelPicker)
  }
 }
