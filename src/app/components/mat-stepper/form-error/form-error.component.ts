import {Component, Input, OnInit} from '@angular/core';
import {FormService} from '../../../services';
import {FormControl} from '@angular/forms';
import {IControlValidators} from '../../../models/interfaces/forms';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss']
})
export class FormErrorComponent implements OnInit {
  @Input() control: FormControl;
  @Input() validators: IControlValidators;

  constructor(protected formService: FormService) { }

  ngOnInit() {
  }

}
