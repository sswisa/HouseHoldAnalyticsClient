import {Component, Input, OnInit} from '@angular/core';
import {IControlValidators, IMatFormField, IMatSlideToggle} from '../../../models';
import {FormControl, FormGroup} from '@angular/forms';
import {FormService} from '../../../services/form-service/form.service';

@Component({
  selector: 'app-form-slide-toggle',
  templateUrl: './form-slide-toggle.component.html',
  styleUrls: ['./form-slide-toggle.component.scss']
})
export class FormSlideToggleComponent implements OnInit {
  @Input() field: IMatFormField;
  @Input() group: FormGroup;
  slideToggle: IMatSlideToggle;
  validators: IControlValidators;
  formControl: FormControl;

  constructor(protected formService: FormService) { }

  ngOnInit() {
    this.slideToggle = this.field.slideToggle;
    this.validators = this.slideToggle.validators;
    this.formControl = <FormControl>this.group.get(this.field.formControlName);
  }

  onChange (value: boolean) {
    if (value != null) {
      this.formControl.setValue(value);
    }
  }

  onDragChange (value: boolean) {
  }

  onToggleChange (value: boolean) {
  }

}
