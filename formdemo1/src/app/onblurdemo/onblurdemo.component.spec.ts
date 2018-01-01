import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnblurdemoComponent } from './onblurdemo.component';

describe('OnblurdemoComponent', () => {
  let component: OnblurdemoComponent;
  let fixture: ComponentFixture<OnblurdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnblurdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnblurdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
