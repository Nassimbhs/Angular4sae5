import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationtravelComponent } from './reservationtravel.component';

describe('ReservationtravelComponent', () => {
  let component: ReservationtravelComponent;
  let fixture: ComponentFixture<ReservationtravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationtravelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationtravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
