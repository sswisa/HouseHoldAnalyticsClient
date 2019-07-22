import {IPerson} from './contact';
import {IDbModelBase} from './dbModelBase';
import {IAutoComplete} from './autoComplete';
import {CardType} from '../enums';

export interface ICard extends IDbModelBase {
  type: CardType;
  last4Digits: number;
  cardNumber: string;
  owner: IPerson;
  autoComplete: IAutoComplete;
}
