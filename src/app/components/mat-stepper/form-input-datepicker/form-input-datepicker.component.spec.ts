import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputDatepickerComponent } from './form-input-datepicker.component';

describe('FormInputDatepickerComponent', () => {
  let component: FormInputDatepickerComponent;
  let fixture: ComponentFixture<FormInputDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInputDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
