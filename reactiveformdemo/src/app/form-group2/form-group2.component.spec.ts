import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroup2Component } from './form-group2.component';

describe('FormGroup2Component', () => {
  let component: FormGroup2Component;
  let fixture: ComponentFixture<FormGroup2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGroup2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGroup2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
