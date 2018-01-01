import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroDetail2Component } from './hero-detail2/hero-detail2.component';
import { FormBuildDemoComponent } from './form-build-demo/form-build-demo.component';
import { FormGroup2Component } from './form-group2/form-group2.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroDetail2Component,
    FormBuildDemoComponent,
    FormGroup2Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
