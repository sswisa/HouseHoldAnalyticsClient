import {IVendor, IPerson} from './contact';
import {IDbModelBase} from './dbModelBase';
import {IItem} from './item';
import {IPayment} from './payment';
import {IPrice} from './price';

export interface ITransaction extends IDbModelBase {
  dates: Date[];
  vendors: IVendor[];
  persons: IPerson[];
  items: IItem[];
  payments: IPayment[];
  price: IPrice;
}
