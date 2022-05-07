import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetravelComponent } from './updatetravel.component';

describe('UpdatetravelComponent', () => {
  let component: UpdatetravelComponent;
  let fixture: ComponentFixture<UpdatetravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetravelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
