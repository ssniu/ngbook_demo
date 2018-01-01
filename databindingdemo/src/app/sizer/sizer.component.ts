import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.css']
})
export class SizerComponent implements OnInit {
    @Input()
    size: number ;

  @Output()
  sizeChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  resize(a: number){
      this.size += (5 +a);
      this.sizeChange.emit(this.size);
  }

  desc1(){
      this.resize(-1);
  }
  asc1(){
      this.resize(+1);
  }

}
