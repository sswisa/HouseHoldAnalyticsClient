import { Component, OnInit, Input } from '@angular/core';
import {IMatStep, FormControlNames, FormFieldType, IMatFormField, IFormArrayItemData} from '../../../models';
import {FormService} from '../../../services';
import {AbstractControl, FormArray, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-array-field',
  templateUrl: './form-array-field.component.html',
  styleUrls: ['./form-array-field.component.scss']
})
export class FormArrayFieldComponent implements OnInit {
  @Input() field: IMatStep;
  @Input() step: IMatStep;

  constructor(protected formService: FormService) { }

  ngOnInit() {
  }

  getArrayForms(step: IMatStep): AbstractControl[] {
    return (<FormArray>((<FormGroup>(step.formGroups[step.formGroupNames[0]])).controls[FormControlNames.array])).controls;
  }

  isFormHidden(step: IMatStep, field: IMatStep, index: number): boolean {
    if (field.expandedFormIndex != null && field.expandedFormIndex === index) {
      return false;
    }
    if (this.isLoneForm(step)) {
      return false;
    }
    if (this.isLastForm(step, field, index)) {
      return true;
    }
    const isCollapsed = this.isFormCollapsed(field, index);
    return isCollapsed;
  }

  addItem(step: IMatStep, field: IMatStep, index: number): void {
    if (field.editMode) {
      this.hideForm(field, index);
      field.editMode = false;
      return;
    }
    const currGroupName = this.getGroupName(field);
    const currGroup = field.formGroups[currGroupName];
    if (!currGroup.valid) {
      this.markGroupAsTouched(currGroup);
      return;
    }
    else {
      this.hideForm(field, index);
    }
    const stepFormGroupName = step.formGroupNames[0];
    const newGroupName = `${stepFormGroupName}-arrayControl-${field.formGroupNames.length}`;
    field.formGroupNames.push(newGroupName);
    field.formsCollapsed.push(true);
    field.type = null;
    field.formGroups[newGroupName] = new FormGroup(this.formService.getControls(field, stepFormGroupName));
    field.type = FormFieldType.array;
    (<IMatFormField>field.fields[0]).autoComplete.filteredEntities.push(this.formService.valueChangeEvent(field.formGroups[newGroupName], field));
    const arrayControl = (<FormArray>(step.formGroups[stepFormGroupName].controls[FormControlNames.array])).controls; // [field.formGroupNames.length - 1];
    arrayControl.push(field.formGroups[newGroupName]);
  }

  isFormVisible(step: IMatStep, field: IMatStep, index: number): boolean {
    return this.isLoneForm(step) || this.isLastForm(step, field, index) || field.expandedFormIndex === index;
  }

  isButtonHidden(step: IMatStep, field: IMatStep): boolean {
    return this.isLoneForm(step) || !this.isFormCollapsed(field, field.formsCollapsed.length - 1) || field.editMode;
  }

  showForm(field: IMatStep, index: number): void {
    if (index != null) { field.expandedFormIndex = index; }
    else { field.expandedFormIndex = field.formGroupNames.length - 1; }
    field.formsCollapsed[field.expandedFormIndex] = false;
  }

  isFormCollapsed(field: IMatStep, index: number): boolean {
    return field.formsCollapsed[index];
  }

  hideForm(field: IMatStep, index: number): void {
    field.expandedFormIndex = -1;
    field.formsCollapsed[index] = true;
  }

  onEditForm(item: IFormArrayItemData, field: IMatStep, step: IMatStep): void {
    const lastFormsIndex = this.getArrayForms(step).length - 1;
    this.hideForm(field, lastFormsIndex);
    this.showForm(field, item.groupIndex);
    field.editMode = true;
  }

  onDeleteForm(item: IFormArrayItemData): void {

  }

  isLastForm(step: IMatStep, field: IMatStep, index: number): boolean {
    const formsLength = this.getArrayForms(step).length;
    return formsLength > 1 && formsLength - 1 === index;
  }

  isLoneForm(step: IMatStep): boolean {
    return this.getArrayForms(step).length === 1;
  }

  getGroupName(field: IMatStep, index?: number): string {
    const groupsNames = field.formGroupNames;
    if (!(index != null)) {
      index = groupsNames.length - 1;
    }
    return groupsNames[index];
  }

  markGroupAsTouched(group: FormGroup): void {
    const controls = group.controls;
    for (const key in controls) {
      if (controls.hasOwnProperty(key)) {
        const control = controls[key];
        if (!control.valid) {
          control.markAsTouched();
        }
      }
    }
  }

}
