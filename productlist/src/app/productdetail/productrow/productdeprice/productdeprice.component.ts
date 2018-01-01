import { Component, OnInit, Input } from '@angular/core';
//import { Product } from '../../productdetail.component';

@Component({
  selector: 'app-productdeprice',
  templateUrl: './productdeprice.component.html',
  styleUrls: ['./productdeprice.component.css']
})
export class ProductdepriceComponent implements OnInit {
 @Input()
 price: number;
  constructor() { }

  ngOnInit() {
  }

}
