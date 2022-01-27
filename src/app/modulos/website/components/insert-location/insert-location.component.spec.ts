import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertLocationComponent } from './insert-location.component';

describe('InsertLocationComponent', () => {
  let component: InsertLocationComponent;
  let fixture: ComponentFixture<InsertLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
