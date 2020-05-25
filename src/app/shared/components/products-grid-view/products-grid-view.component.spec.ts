import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsGridViewComponent } from './products-grid-view.component';

describe('ProductsGridViewComponent', () => {
  let component: ProductsGridViewComponent;
  let fixture: ComponentFixture<ProductsGridViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsGridViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
