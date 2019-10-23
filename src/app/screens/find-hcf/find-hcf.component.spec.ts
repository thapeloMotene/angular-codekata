import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindHcfComponent } from './find-hcf.component';

describe('FindHcfComponent', () => {
  let component: FindHcfComponent;
  let fixture: ComponentFixture<FindHcfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindHcfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindHcfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
