import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {IMatStep, IFormArrayItemData} from '../../../models';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-group-collapsed',
  templateUrl: './form-group-collapsed.component.html',
  styleUrls: ['./form-group-collapsed.component.scss']
})
export class FormGroupCollapsedComponent implements OnInit {
  @Input() field: IMatStep;
  @Input() group: FormGroup;
  @Input() groupName: string;
  @Output() editForm = new EventEmitter();
  @Output() deleteForm = new EventEmitter();
  itemData: IFormArrayItemData;
  title: string;
  constructor() { }

  ngOnInit() {
    this.itemData = {
      field: this.field,
      group: this.group,
      groupName: this.groupName,
      groupIndex: this.getGroupIndex()
    };
  }

  getGroupIndex(): number {
    return this.field.formGroupNames.indexOf(this.groupName);
  }

  edit(): void {
    this.editForm.emit(this.itemData);
  }

  delete(): void {
    this.deleteForm.emit(this.itemData);
  }

}
