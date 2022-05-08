import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtravlesusersComponent } from './listtravlesusers.component';

describe('ListtravlesusersComponent', () => {
  let component: ListtravlesusersComponent;
  let fixture: ComponentFixture<ListtravlesusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListtravlesusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtravlesusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
