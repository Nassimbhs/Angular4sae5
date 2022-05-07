import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtravelComponent } from './listtravel.component';

describe('ListtravelComponent', () => {
  let component: ListtravelComponent;
  let fixture: ComponentFixture<ListtravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListtravelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
