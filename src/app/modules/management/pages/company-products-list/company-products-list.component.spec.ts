import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProductsListComponent } from './company-products-list.component';

describe('CompanyProductsListComponent', () => {
  let component: CompanyProductsListComponent;
  let fixture: ComponentFixture<CompanyProductsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyProductsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
