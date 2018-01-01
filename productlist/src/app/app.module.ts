import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductrowComponent } from './productdetail/productrow/productrow.component';
import { ProductimageComponent } from './productdetail/productrow/productimage/productimage.component';
import { ProductdepartmentComponent } from './productdetail/productrow/productdepartment/productdepartment.component';
import { ProductdepriceComponent } from './productdetail/productrow/productdeprice/productdeprice.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductdetailComponent,
    ProductrowComponent,
    ProductimageComponent,
    ProductdepartmentComponent,
    ProductdepriceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
