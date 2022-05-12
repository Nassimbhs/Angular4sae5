import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatereservationtravelComponent } from './updatereservationtravel.component';

describe('UpdatereservationtravelComponent', () => {
  let component: UpdatereservationtravelComponent;
  let fixture: ComponentFixture<UpdatereservationtravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatereservationtravelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatereservationtravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
