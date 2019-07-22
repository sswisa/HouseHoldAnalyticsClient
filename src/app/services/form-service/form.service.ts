import { Injectable } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {AutoCompleteService} from '../apiServices';
import {
  FormControlNames,
  FormFieldType,
  IControlValidators,
  IInputBasedField,
  IMatFormField,
  ISearchEntities,
  ValidatorTypes,
  IMatStep,
  IField
} from '../../models';
import {debounceTime, distinctUntilChanged, map, startWith, switchMap} from 'rxjs/operators';
import {from, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private autoCompleteService: AutoCompleteService) { }

  shouldShowError(formControl: FormControl, validatorType: string): boolean {
    let hasError: boolean = formControl.hasError(validatorType);
    const isLengthValidator = validatorType === ValidatorTypes.minLength || validatorType === ValidatorTypes.maxLength;
    if (isLengthValidator && formControl.errors != null && formControl.errors[validatorType.toLowerCase()] != null) { hasError = true; }
    return  hasError && (formControl.dirty || formControl.touched);
  }

  isRequired(input: IInputBasedField, validators: IControlValidators): boolean {
    const required: string = ValidatorTypes.required;
    return (input != null && validators && validators[required] != null) ?
      <boolean>validators[required].value : false;
  }

  objectKeys(validators) {
    return Object.keys(validators);
  }

  generateGuid(): string {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;
  }

  getControls(step: IMatStep, stepFormGroupName: string) {
    const controls = {};
    let formControlName: string;
    let control: FormControl | FormArray;
    step.fields.forEach((field: IField) => {
      if (this.isArrayControlField(field)) {
        control = this.getArrayControl(<IMatStep>field, stepFormGroupName);
        formControlName = FormControlNames.array;
      }
      else {
        control = this.getControl(<IMatFormField>field);
        formControlName = (<IMatFormField>field).formControlName;
      }
      controls[formControlName] = control;
    });
    return controls;
  }

  valueChangeEvent(formGroup: FormGroup, step: IMatStep): Observable<any[]> {
    return formGroup.controls.autoComplete.valueChanges
      .pipe(
        startWith(null),
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(val => {
          return this.isFilterable(val) ? this.filter(<any>val, step.searchEntities) : from<any[]>([]);
        })
      );
  }

  isArrayControlField(field: IMatStep | IMatFormField): boolean {
    return (<IMatStep>field).type != null && (<IMatStep>field).type === FormFieldType.array;
  }

  private isFilterable(val): boolean {
    return val != null && val !== '' && typeof val === 'string';
  }

  private getArrayControl(field: IMatStep, stepFormGroupName: string): FormArray {
    const length = field.formGroupNames != null ? field.formGroupNames.length : 0;
    if (length === 0) {
      field.formGroupNames = [];
      field.formGroups = {};
    }
    const newGroupName = `${stepFormGroupName}-arrayControl-${length}`;
    field.formGroupNames.push(newGroupName);
    field.formsCollapsed.push(true);
    field.type = null;
    field.formGroups[newGroupName] = new FormGroup(this.getControls(field, stepFormGroupName));
    field.type = FormFieldType.array;
    (<IMatFormField>field.fields[0]).autoComplete.filteredEntities = [this.valueChangeEvent(field.formGroups[newGroupName], field)];
    return new FormArray([field.formGroups[newGroupName]]);
  }

  private getControl(field: IMatFormField): FormControl {
    const input: IInputBasedField = this.getValidInputField(field);
    const validators = input.validators != null ? this.getValidators(input.validators) : [];
    return field.getControl(validators);
  }

  private getValidInputField(stepField: IMatFormField): IInputBasedField {
    if (stepField.select != null) {
      return stepField.select;
    }
    if (stepField.input != null) {
      return stepField.input;
    }
    if (stepField.buttonToggle != null) {
      return stepField.buttonToggle;
    }
    if (stepField.slideToggle != null) {
      return stepField.slideToggle;
    }
  }

  private getValidators(validators: IControlValidators) {
    const _validators = [];
    if (!validators) {
      return [];
    }
    for (const key of Object.keys(validators)) {
      if (validators[key].value === true) {
        _validators.push(Validators[key]);
      }
      else if (validators[key].value != null && validators[key].value !== false) {
        _validators.push(Validators[key](validators[key].value));
      }
    }
    return _validators;
  }

  private filter(searchVal: string, searchEntities: ISearchEntities): Observable<any[]> {
    return this.autoCompleteService.getSearchedResults(searchEntities, searchVal)
      .pipe(
        map(response => (<any>response).filter(object => {
          return object.autoComplete.displayText.toLowerCase().indexOf(searchVal.toLowerCase()) === 0;
        }))
      );
  }

}
