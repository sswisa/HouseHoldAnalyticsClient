import {ICard} from './card';
import {IDbModelBase} from './dbModelBase';
import {IAutoComplete} from './autoComplete';
import {CurrencyType, PaymentMethod, PaymentType} from '../enums';

export interface IPayment extends IDbModelBase {
  type: PaymentType;
  method: PaymentMethod;
  card: ICard;
  currency: CurrencyType;
  autoComplete: IAutoComplete;
}
