import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesGridViewComponent } from './companies-grid-view.component';

describe('CompaniesGridViewComponent', () => {
  let component: CompaniesGridViewComponent;
  let fixture: ComponentFixture<CompaniesGridViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesGridViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
