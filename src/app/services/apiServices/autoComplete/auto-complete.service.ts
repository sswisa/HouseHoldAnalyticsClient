import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ISearchEntities} from '../../../models';
import {Observable} from 'rxjs';

export interface IAutoCompleteService {
  getSearchedResults(searchEntities: ISearchEntities, val: string): Observable<any>;
}

@Injectable({
  providedIn: 'root'
})

export class AutoCompleteService implements IAutoCompleteService {

  constructor(private http: HttpClient) { }

  getSearchedResults(searchEntities: ISearchEntities, searchVal: string): Observable<any> {
    const params: HttpParams = new HttpParams()
      .set('searchVal', searchVal)
      .set('searchEntities', encodeURI(JSON.stringify(searchEntities)));
    return this.http.get(`http://localhost:8081/auto-complete`, {params});
  }

}
