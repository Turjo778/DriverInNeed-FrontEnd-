import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverdataComponent } from './driverdata.component';

describe('DriverdataComponent', () => {
  let component: DriverdataComponent;
  let fixture: ComponentFixture<DriverdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
