import {Component, Input, OnInit} from '@angular/core';
import {IControlValidators, IMatButtonToggle, IMatFormField, Severity} from '../../../models';
import {FormControl, FormGroup} from '@angular/forms';
import {FormService} from '../../../services/form-service/form.service';

@Component({
  selector: 'app-form-button-toggle',
  templateUrl: './form-button-toggle.component.html',
  styleUrls: ['./form-button-toggle.component.scss']
})
export class FormButtonToggleComponent implements OnInit {
  @Input() field: IMatFormField;
  @Input() group: FormGroup;
  buttonToggle: IMatButtonToggle;
  validators: IControlValidators;
  formControl: FormControl;

  constructor(protected formService: FormService) { }

  ngOnInit() {
    this.buttonToggle = this.field.buttonToggle;
    this.validators = this.buttonToggle.validators;
    this.formControl = <FormControl>this.group.get(this.field.formControlName);
  }

  onValueChange (value: Severity) {
    if (value != null) {
      this.formControl.setValue(value);
    }
  }

}
