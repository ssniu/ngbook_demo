import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { GrandChildComponent } from './grandChildComponent.component';

@Component({
  selector: 'app-viewchilddemo',
  templateUrl: './viewchilddemo.component.html',
  styleUrls: ['./viewchilddemo.component.css']
})
export class ViewchilddemoComponent implements OnInit {

    @ViewChild(GrandChildComponent)
    private mychild: GrandChildComponent;

  constructor() { }

  ngOnInit() {
  }

  start() {
      this.mychild.start();
  }

}
