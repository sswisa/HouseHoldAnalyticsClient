import {FormControl, FormGroup} from '@angular/forms';
import {EntityTypes, FormFieldType, Severity} from '../index';
import {Observable} from 'rxjs';
import {IAddress, ICard, IPayment, IPerson, ITransaction, IVendor} from '../index';

export interface IValidator {
  value: string | number | boolean;
  errorMessage: string;
}

export interface IControlValidators {
  [key: string]: IValidator;
}

export interface IMatBase {
  validators?: IControlValidators;
  placeholder?: string;
}

export interface IMatInput extends IMatBase {
  type: FormFieldType;
  readonly?: boolean;
  defaultValue?: string | number;
  min?: number;
  max?: number;
  onFocus?(currVal: string): void;
  onBlur?(currVal: string): void;
}

export interface IMatAutoComplete extends IMatBase {
  filteredEntities: Observable<any[]>[];
  onOptionSelected(selectedObject): Object;
}

export interface IMatOption {
  object?: Object;
  arr: string[];
}

export interface IToggleable {
  label?: string;
  defaultValue?: Severity;
}

export interface IMultiSelectionInput {
  options: IMatOption;
}

export interface IMatSelect extends IMatBase, IMultiSelectionInput {
  multiple?: boolean;
  onSelectOptionChange?(value: string, formGroup: FormGroup): any;
  displayWith(object, option): string;
}

export interface IMatDatePicker extends IMatBase {
  templateName: string;
}

export interface IMatSlideToggle extends IMatBase, IMultiSelectionInput, IToggleable {

}

export interface IMatButtonToggle extends IMatBase, IMultiSelectionInput, IToggleable {
  toggleGroupName: string;
  vertical?: boolean;
  disableRipple?: boolean;
}

export interface IMatFormField {
  formControlName: string;
  input?: IMatInput;
  autoComplete?: IMatAutoComplete;
  select?: IMatSelect;
  datePicker?: IMatDatePicker;
  buttonToggle?: IMatButtonToggle;
  slideToggle?: IMatSlideToggle;
  getControl(validators): FormControl;
}

export interface IPopulateObject {
  model: EntityTypes;
  path: string;
}

export interface ISearchEntities {
  entityType: EntityTypes;
  populateObject?: IPopulateObject;
}

export interface IFormGroups {
  [key: string]: FormGroup;
}

export interface IMatStep {
  editMode?: boolean;
  formsCollapsed?: boolean[];
  expandedFormIndex?: number;
  formGroupNames?: string[];
  formGroups?: IFormGroups;
  type?: FormFieldType;
  title: string;
  searchEntities: ISearchEntities;
  fields: (IMatFormField | IMatStep)[];
  collapsedTitle?(group: FormGroup): string;
}

export interface IMatStepperConfiguration {
  [key: string]: IMatStep[];
}

export interface IFormArrayItemData {
  field: IMatStep;
  group: FormGroup;
  groupName: string;
  groupIndex: number;
}

export type IInputBasedField = IMatSelect | IMatInput | IMatDatePicker | IMatButtonToggle | IMatSlideToggle;
export type IEntityBase = IAddress | IPerson | IVendor | ICard | IPayment | ITransaction;
export type IField = IMatFormField | IMatStep;

