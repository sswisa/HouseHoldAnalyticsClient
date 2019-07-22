import {IAddress} from './address';
import {IDbModelBase} from './dbModelBase';
import {IAutoComplete} from './autoComplete';

export interface IPersonName {
  first: string;
  last: string;
  full: string;
}

export interface IContact extends IDbModelBase {
  type: string;
  phone: number;
  emails?: string[];
  address: IAddress;
}

export interface IVendor extends IContact {
  name: string;
  displayText?: string;
  autoComplete: IAutoComplete;
}

export interface IPerson extends IContact {
  name: IPersonName;
  autoComplete: IAutoComplete;
}
