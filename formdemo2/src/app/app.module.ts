import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { FormvalidComponent } from './formvalid/formvalid.component';
import { ValidsDirective } from './valids.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroFormComponent,
    FormvalidComponent,
    ValidsDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
