import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrayFieldComponent } from './form-array-field.component';

describe('FormArrayFieldComponent', () => {
  let component: FormArrayFieldComponent;
  let fixture: ComponentFixture<FormArrayFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormArrayFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArrayFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
