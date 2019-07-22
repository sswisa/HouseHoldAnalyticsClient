import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormButtonToggleComponent } from './form-button-toggle.component';

describe('FormButtonToggleComponent', () => {
  let component: FormButtonToggleComponent;
  let fixture: ComponentFixture<FormButtonToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormButtonToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormButtonToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
