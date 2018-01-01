import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-group2',
  templateUrl: './form-group2.component.html',
  styleUrls: ['./form-group2.component.css']
})
export class FormGroup2Component implements OnInit {

    heroForm: FormGroup;
   states = states;

   constructor(private fb: FormBuilder) {
     this.createForm();
   }

   createForm() {
     this.heroForm = this.fb.group({ // <-- the parent FormGroup
       name: ['', Validators.required ],
       address: this.fb.group({ // <-- the child FormGroup
         street: '',
         city: '',
         state: '',
         zip: ''
       }),
       power: '',
       sidekick: ''
     });
   }

  ngOnInit() {
  }

}
