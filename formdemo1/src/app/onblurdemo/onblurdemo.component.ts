import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onblurdemo',
  templateUrl: './onblurdemo.component.html',
  styleUrls: ['./onblurdemo.component.css']
})
export class OnblurdemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  value = '';
  update(value: string) { this.value = value; }

  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
 addHero(newHero: string) {
   if (newHero) {
     this.heroes.push(newHero);
   }
 }

}
