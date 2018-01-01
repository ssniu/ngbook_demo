import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FormbuilderdemoComponent } from './formbuilderdemo/formbuilderdemo.component';


@NgModule({
  declarations: [
    AppComponent,
    FormbuilderdemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
