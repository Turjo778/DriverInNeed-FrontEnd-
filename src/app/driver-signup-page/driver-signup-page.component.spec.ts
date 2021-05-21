import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverSignupPageComponent } from './driver-signup-page.component';

describe('DriverSignupPageComponent', () => {
  let component: DriverSignupPageComponent;
  let fixture: ComponentFixture<DriverSignupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverSignupPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverSignupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
