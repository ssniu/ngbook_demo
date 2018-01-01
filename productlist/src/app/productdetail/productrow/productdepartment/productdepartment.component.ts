import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../productdetail.component';

@Component({
  selector: 'app-productdepartment',
  templateUrl: './productdepartment.component.html',
  styleUrls: ['./productdepartment.component.css']
})
export class ProductdepartmentComponent implements OnInit {
  @Input()
  product: Product;

  constructor() { }

  ngOnInit() {
  }

}
