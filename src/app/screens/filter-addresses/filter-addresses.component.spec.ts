import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAddressesComponent } from './filter-addresses.component';

describe('FilterAddressesComponent', () => {
  let component: FilterAddressesComponent;
  let fixture: ComponentFixture<FilterAddressesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterAddressesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
