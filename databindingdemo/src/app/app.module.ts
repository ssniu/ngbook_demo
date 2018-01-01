import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FordemoComponent } from './fordemo/fordemo.component';
import { SizerComponent } from './sizer/sizer.component';
import { ChildcomComponent } from './childcom/childcom.component';


@NgModule({
  declarations: [
    AppComponent,
    FordemoComponent,
    SizerComponent,
    ChildcomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
