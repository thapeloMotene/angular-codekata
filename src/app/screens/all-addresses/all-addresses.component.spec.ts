import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAddressesComponent } from './all-addresses.component';

describe('AllAddressesComponent', () => {
  let component: AllAddressesComponent;
  let fixture: ComponentFixture<AllAddressesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAddressesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
