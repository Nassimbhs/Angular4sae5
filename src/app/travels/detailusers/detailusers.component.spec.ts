import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailusersComponent } from './detailusers.component';

describe('DetailusersComponent', () => {
  let component: DetailusersComponent;
  let fixture: ComponentFixture<DetailusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
