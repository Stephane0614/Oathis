import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPage4Component } from './product-page4.component';

describe('ProductPage4Component', () => {
  let component: ProductPage4Component;
  let fixture: ComponentFixture<ProductPage4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPage4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
