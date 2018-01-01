import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormkeyComponent } from './formkey/formkey.component';
import { OnblurdemoComponent } from './onblurdemo/onblurdemo.component';


@NgModule({
  declarations: [
    AppComponent,
    FormkeyComponent,
    OnblurdemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
