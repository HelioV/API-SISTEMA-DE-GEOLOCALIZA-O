import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterAdminComponent } from './enter-admin.component';

describe('EnterAdminComponent', () => {
  let component: EnterAdminComponent;
  let fixture: ComponentFixture<EnterAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
