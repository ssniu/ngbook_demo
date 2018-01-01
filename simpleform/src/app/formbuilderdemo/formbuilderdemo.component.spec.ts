import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbuilderdemoComponent } from './formbuilderdemo.component';

describe('FormbuilderdemoComponent', () => {
  let component: FormbuilderdemoComponent;
  let fixture: ComponentFixture<FormbuilderdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormbuilderdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormbuilderdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
