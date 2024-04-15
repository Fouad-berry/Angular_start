import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importez FormsModule depuis @angular/forms

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Ajoutez FormsModule aux imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
