import { Component, OnInit } from '@angular/core';
import { Human } from '../human';

@Component({
  selector: 'app-fordemo',
  templateUrl: './fordemo.component.html',
  styleUrls: ['./fordemo.component.css']
})
export class FordemoComponent implements OnInit {

    humans=[
        new Human('john', 25),
        new Human('mary', 35),
        new Human('susan', 28)];

    


  constructor() { }

  ngOnInit() {
  }



}
