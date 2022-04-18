import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPrimeComponent } from './list-prime.component';

describe('ListPrimeComponent', () => {
  let component: ListPrimeComponent;
  let fixture: ComponentFixture<ListPrimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPrimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
