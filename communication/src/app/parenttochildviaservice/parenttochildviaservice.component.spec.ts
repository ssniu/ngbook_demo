import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenttochildviaserviceComponent } from './parenttochildviaservice.component';

describe('ParenttochildviaserviceComponent', () => {
  let component: ParenttochildviaserviceComponent;
  let fixture: ComponentFixture<ParenttochildviaserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParenttochildviaserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParenttochildviaserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
