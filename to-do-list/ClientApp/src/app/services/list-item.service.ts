import { Injectable } from '@angular/core';
import {
  Http,
  Response,
  HttpModule,
  RequestOptions,
  Request,
  RequestMethod,
  Headers,
  URLSearchParams
} from '@angular/http';
import { HttpParams, HttpClient } from '@angular/common/http';

//import 'rxjs/add/operator/map';
import { ListItem } from '../models/listItem.model';
import { Observable } from 'rxjs';

@Injectable()

export class ListItemService {

  constructor(private http: HttpClient) {

  }

  get(): Observable<any> {
    return this.http.get('/api/listItem/');
  }

  add(listItem: ListItem): Observable<any> {
    return this.http.post('/api/listitem/', listItem);
  }

  update(listItem: ListItem): Observable<any> {
    return this.http.put('/api/listitem/', listItem);
  }

  delete(id: number): Observable<any> {
    return this.http.delete('/api/listitem/' + id);
  }
}
