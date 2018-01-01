import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formkey',
  templateUrl: './formkey.component.html',
  styleUrls: ['./formkey.component.css']
})
export class FormkeyComponent implements OnInit {
  values = '';
  values2 = '';
  values3 = '';
  values4 = '';
  value5 = '';

  constructor() { }

  ngOnInit() {
  }

  onKey(event: any){
      this.values += event.target.value + '|';
  }

  onKey2(event: KeyboardEvent){
      this.values2 += (<HTMLInputElement>event.target).value + '|';
  }

  onKey3(value: string){
      this.values3 += value + '|';
  }

  onEnter(value: string){
      this.values4 = value;
  }

  update(value: string){
      this.value5 = value;
  }

}
