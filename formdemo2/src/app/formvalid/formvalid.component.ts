import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formvalid',
  templateUrl: './formvalid.component.html',
  styleUrls: ['./formvalid.component.css']
})
export class FormvalidComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   this.heroForm = new FormGroup({
     'name': new FormControl(this.hero.name, [
       Validators.required,
       Validators.minLength(4),
       forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
     ]),
     'alterEgo': new FormControl(this.hero.alterEgo),
     'power': new FormControl(this.hero.power, Validators.required)
   });
 }

 get name() { return this.heroForm.get('name'); }

 get power() { return this.heroForm.get('power'); }

}
