import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childcom',
  templateUrl: './childcom.component.html',
  styleUrls: ['./childcom.component.css']
})
export class ChildcomComponent implements OnInit {

  @Input()
  minor: number;
  @Input()
  major: number;

  @Output()
  onVoted = new EventEmitter<boolean>();

  voted = false;

  constructor() { }

  ngOnInit() {
  }

  vote(agreed: boolean){
      this.onVoted.emit(agreed);
      this.voted = true;
  }

}
