import { Component } from '@angular/core';
import { Product } from './productdetail/productdetail.component';
import 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];

  constructor(){
      /*this.product = new Product('Glasses',
             'Cool glasses', 'image1', ['Men/Women','Accessories', 'Glasses'], 9.99
         );*/

         this.products = [
             new Product('Glasses','Cool glasses', 'image1', ['Men/Women','Accessories','Glasses'], 9.99),
            new Product('T-shirt','short sleeve', 'image2', ['Women','cloth','shirt'], 19.99),
            new Product('boots','leather boots', 'image3', ['Women','shoes','boots'], 39.99)
         ];
  }

         productWasSelected(product: Product): void {
             console.log('product clicked is ' + product.sku);
             //this.onProductSelected.subscribe((res:Response) => {
            //     console.log(this.product);
             //};
         }

}
