import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdepartmentComponent } from './productdepartment.component';

describe('ProductdepartmentComponent', () => {
  let component: ProductdepartmentComponent;
  let fixture: ComponentFixture<ProductdepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductdepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
