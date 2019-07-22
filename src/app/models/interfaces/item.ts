import {IDbModelBase} from './dbModelBase';
import {ITransactionsCategories} from '../objects';
import {IAutoComplete} from './autoComplete';

export interface IItem extends IDbModelBase {
  severity?: string;
  onWatchList?: boolean;
  isRefund?: boolean;
  categories: ITransactionsCategories[];
  price: number;
  amount?: number;
  name: string;
  autoComplete: IAutoComplete;
}
