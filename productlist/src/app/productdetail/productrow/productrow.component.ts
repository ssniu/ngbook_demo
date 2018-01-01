import { Component, OnInit , Input} from '@angular/core';
import { Product } from '../productdetail.component';


@Component({
  selector: 'app-productrow',
  templateUrl: './productrow.component.html',
  styleUrls: ['./productrow.component.css']
})
export class ProductrowComponent implements OnInit {

  @Input()
  productr: Product;

  constructor() { }

  ngOnInit() {
  }

 

}
