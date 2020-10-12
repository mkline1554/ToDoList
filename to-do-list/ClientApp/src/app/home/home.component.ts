import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { ListItem } from '../models/ListItem.model';
import { Observable } from 'rxjs';
//import { ListItem } from '../models/ListItem.model';
//import { ListItem } from '../models/ListItem.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  //resultItem: ListItem;
  //resultItems: any;

  //listItem: ListItem;


  ////item: ListItem = new ListItem();
  //constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  //  //http.get(baseUrl + 'api/listitems').subscribe(result => {
  //  //  this.resultItem = result;
  //  //}, error => console.error(error));
  //}

  //getNewListItem() {
  //  this.listItem = new ListItem();
  //  console.log(this.listItem);
  //  this.listItem.description = "Test Item";
  //  console.log(this.listItem);
  //  return this.listItem;
  //}

  //updateResultItem() {
  //  this.resultItem.description = "Updated Description";
  //  return this.resultItem;
  //}

  //get() {
  //  this.http.get(this.baseUrl + 'api/listitems/1')
  //    .subscribe(result => {
  //      this.resultItem = result as ListItem;
  //      console.log(result);
  //    }, error => {
  //      console.error(error);
  //    });
  //}

  //getAll() {
  //  this.http.get(this.baseUrl + 'api/listitems')
  //    .subscribe(result => {
  //      this.resultItems = result;
  //      console.log(result);
  //    }, error => {
  //      console.error(error);
  //    });
  //}

  //add() {
  //  this.http.post(this.baseUrl + 'api/listitems/add', this.getNewListItem())
  //    .subscribe(result => {
  //      this.resultItem = result as ListItem;
  //      console.log(result);
  //    }, error => {
  //      console.error(error);
  //    });
  //}


  //update() {
  //  this.http.put(this.baseUrl + 'api/listitems/update', this.updateResultItem())
  //    .subscribe(result => {
  //      this.resultItem = result as ListItem;
  //      console.log(result);
  //    }, error => {
  //      console.error(error);
  //    });
  //}

  //remove() {
  //  this.http.delete(this.baseUrl + 'api/listitems/1')
  //    .subscribe(result => {
  //      this.resultItems = result;
  //      console.log(result);
  //    }, error => {
  //      console.error(error);
  //    });
  //}


  ////add() {
  ////  this.item.description = "Test Add Description";
  ////  //this.http.post()
  ////}


}
