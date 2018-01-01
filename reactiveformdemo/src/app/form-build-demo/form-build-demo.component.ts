import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { states } from '../data-model';


@Component({
  selector: 'app-form-build-demo',
  templateUrl: './form-build-demo.component.html',
  styleUrls: ['./form-build-demo.component.css']
})
export class FormBuildDemoComponent implements OnInit {

    heroForm: FormGroup;
    states = states;

  constructor(private fb: FormBuilder) {
      this.createForm();
   }

  createForm(){
      this.heroForm = this.fb.group({
          name: ['', Validators.required],
          street: '',
          city: '',
          state: '',
          zip: '',
          power: '',
          sidekick: ''
      });
  }
  ngOnInit() {
  }

}
