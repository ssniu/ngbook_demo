import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ViewchilddemoComponent } from './viewchilddemo/viewchilddemo.component';
import { ParenttochildviaserviceComponent } from './parenttochildviaservice/parenttochildviaservice.component';
import { HighlightDirective } from './highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    ViewchilddemoComponent,
    ParenttochildviaserviceComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
