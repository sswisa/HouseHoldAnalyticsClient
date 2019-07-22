import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatAccordionComponent } from './mat-accordion.component';

describe('MatAccordionComponent', () => {
  let component: MatAccordionComponent;
  let fixture: ComponentFixture<MatAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
