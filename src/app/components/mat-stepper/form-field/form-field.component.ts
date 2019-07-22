import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {IMatFormField} from '../../../models';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {
  @Input() field: IMatFormField;
  @Input() group: FormGroup;
  @Input() filteredEntitiesIndex: number;

  constructor() { }

  ngOnInit() {
  }

}
