import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyOffersComponent } from './daily-offers.component';

describe('DailyOffersComponent', () => {
  let component: DailyOffersComponent;
  let fixture: ComponentFixture<DailyOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
