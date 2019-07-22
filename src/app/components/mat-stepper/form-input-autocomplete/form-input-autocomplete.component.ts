import {Component, OnInit, Input} from '@angular/core';
import {IMatFormField, IEntityBase, IMatInput, ValidatorTypes, IControlValidators} from '../../../models';
import {FormService} from '../../../services/form-service/form.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-input-autocomplete',
  templateUrl: './form-input-autocomplete.component.html',
  styleUrls: ['./form-input-autocomplete.component.scss']
})

export class FormInputAutocompleteComponent implements OnInit {
  @Input() field: IMatFormField;
  @Input() group: FormGroup;
  @Input() filteredEntitiesIndex: number;
  input: IMatInput;
  validators: IControlValidators;
  formControl: FormControl;

  constructor(protected formService: FormService) {}

  ngOnInit() {
    this.input = this.field.input;
    this.validators = this.input.validators;
    this.formControl = <FormControl>this.group.get(this.field.formControlName);
  }

  optionSelected(selectedEntity: IEntityBase): void {
    if (!this.field.autoComplete) { return; }
    const onOptionSelected = this.field.autoComplete.onOptionSelected;
    this.group.patchValue(onOptionSelected.call(null, selectedEntity), {emitEvent: false});
  }

  onFocus(currVal: string): void {
    if (this.input.onFocus != null) {
      this.input.onFocus.call(this, currVal);
    }
  }

  onBlur(currVal: string): void {
    if (this.input.onBlur != null) {
      this.input.onBlur.call(this, currVal);
    }
  }

  isDefaultValue(val: string): boolean {
    return this.input.defaultValue.toString() === val;
  }

  hasDefaultValue(): boolean {
    return this.input.defaultValue != null;
  }

  getInputMinLength(): number {
    const minLength: string = ValidatorTypes.minLength;
    return (this.input != null && this.validators && this.validators[minLength] != null) ?
      <number>this.validators[minLength].value : null;
  }

  getInputMaxLength(): number {
    const maxLength: string = ValidatorTypes.maxLength;
    return (this.input != null && this.validators && this.validators[maxLength] != null) ?
      <number>this.validators[maxLength].value : null;
  }

  displayWith = (option): string => {
    return option && this.field.autoComplete != null ? option.autoComplete.displayText : '';
  }

}
