import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

    @Input()
    productlists: Product[];

    @Output()
    onProductSelected: EventEmitter<Product>;

    currentProduct: Product;

  constructor() {
        this.onProductSelected = new EventEmitter();
   }

  ngOnInit() {
  }

  clicked(product: Product): void {
      this.currentProduct = product;
      this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
      if(!product || !this.currentProduct){
          return false;
      }

      return product.sku === this.currentProduct.sku;
  }

}

//create product class
export class Product {


    constructor(
        public sku: string,
    public name: string,
    public imageUrl: string,
    public department: string[],
    public price: number){

                }

}
