import {Component, Input, OnInit} from '@angular/core';
import {IControlValidators, IMatFormField, IMatSelect} from '../../../models';
import {FormControl, FormGroup} from '@angular/forms';
import {FormService} from '../../../services/form-service/form.service';

@Component({
  selector: 'app-form-input-select',
  templateUrl: './form-input-select.component.html',
  styleUrls: ['./form-input-select.component.scss']
})
export class FormInputSelectComponent implements OnInit {
  @Input() field: IMatFormField;
  @Input() group: FormGroup;
  select: IMatSelect;
  validators: IControlValidators;
  formControl: FormControl;

  constructor(protected formService: FormService) { }

  ngOnInit() {
    this.select = this.field.select;
    this.validators = this.select.validators;
    this.formControl = <FormControl>this.group.get(this.field.formControlName);
  }

}
