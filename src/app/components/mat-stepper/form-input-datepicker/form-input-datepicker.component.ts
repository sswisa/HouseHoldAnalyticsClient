import {Component, Input, OnInit} from '@angular/core';
import {IControlValidators, IMatFormField, IMatInput} from '../../../models';
import {FormControl, FormGroup} from '@angular/forms';
import {FormService} from '../../../services/form-service/form.service';

@Component({
  selector: 'app-form-input-datepicker',
  templateUrl: './form-input-datepicker.component.html',
  styleUrls: ['./form-input-datepicker.component.scss']
})
export class FormInputDatepickerComponent implements OnInit {
  @Input() field: IMatFormField;
  @Input() group: FormGroup;
  input: IMatInput;
  validators: IControlValidators;
  formControl: FormControl;

  constructor(protected formService: FormService) { }

  ngOnInit() {
    this.input = this.field.input;
    this.validators = this.input.validators;
    this.formControl = <FormControl>this.group.get(this.field.formControlName);
  }

}
