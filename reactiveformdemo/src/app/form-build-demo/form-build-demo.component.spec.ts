import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuildDemoComponent } from './form-build-demo.component';

describe('FormBuildDemoComponent', () => {
  let component: FormBuildDemoComponent;
  let fixture: ComponentFixture<FormBuildDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBuildDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuildDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
