import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormkeyComponent } from './formkey.component';

describe('FormkeyComponent', () => {
  let component: FormkeyComponent;
  let fixture: ComponentFixture<FormkeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormkeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
