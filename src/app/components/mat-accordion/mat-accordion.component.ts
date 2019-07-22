import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ITransaction, transactionsCategories, ITransactionsCategories, currencySymbol, paymentMethodClass} from '../../models';

@Component({
  selector: 'app-mat-accordion',
  templateUrl: './mat-accordion.component.html',
  styleUrls: ['./mat-accordion.component.scss']
})
export class MatAccordionComponent implements OnInit {

  transactionsObservable: Observable<any[]>;
  transactionCategories: ITransactionsCategories;
  currencySymbol;
  paymentMethodClass;

  constructor(private http: HttpClient) {
    this.transactionCategories = transactionsCategories;
    this.currencySymbol = currencySymbol;
    this.paymentMethodClass = paymentMethodClass;
  }

  ngOnInit() {
    this.transactionsObservable = this.http.get<ITransaction[]>('http://localhost:8081/transactions');
    // this.transactionsObservable
    //   .subscribe(
    //   (transactions: ITransaction[]) => {
    //       console.log(transactions);
    //     },
    //     err => {
    //       throw err;
    //     }
    //   );
  }

}
