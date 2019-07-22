import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupCollapsedComponent } from './form-group-collapsed.component';

describe('FormGroupCollapsedComponent', () => {
  let component: FormGroupCollapsedComponent;
  let fixture: ComponentFixture<FormGroupCollapsedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGroupCollapsedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGroupCollapsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
