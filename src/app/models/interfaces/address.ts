import {IDbModelBase} from './dbModelBase';
import {IAutoComplete} from './autoComplete';
import {Countries} from '../enums';

export interface IState {
    name: string;
    abbreviation: string;
}

export interface IAddress extends IDbModelBase {
    state?: IState;
    country: Countries;
    city: string;
    street: string;
    zip?: number;
    autoComplete: IAutoComplete;
}
