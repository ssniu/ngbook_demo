import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../productdetail.component';

@Component({
  selector: 'app-productimage',
  templateUrl: './productimage.component.html',
  styleUrls: ['./productimage.component.css']
})
export class ProductimageComponent implements OnInit {

  @Input()
  product: Product;

  constructor() { }

  ngOnInit() {
  }

}
