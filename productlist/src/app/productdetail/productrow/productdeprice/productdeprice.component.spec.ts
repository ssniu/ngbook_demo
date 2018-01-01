import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdepriceComponent } from './productdeprice.component';

describe('ProductdepriceComponent', () => {
  let component: ProductdepriceComponent;
  let fixture: ComponentFixture<ProductdepriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductdepriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdepriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
