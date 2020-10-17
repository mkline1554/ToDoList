import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ListItem } from '../models/listItem.model';
import { NgxSmartModalService, NgxSmartModalComponent } from 'ngx-smart-modal';
import { ListItemService } from '../services/list-item.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.css']
})
export class HomeComponent {
  listItems: Array<ListItem> = [];

  today: Date = new Date;

  hideAddListItem: boolean = true;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private listItemservice: ListItemService,
    public modalService: NgxSmartModalService,
  ) {
    this.listItemservice.get()
      .subscribe((response) => {
        this.setListItems(response);
    });
  }

  onListItemAdded(event: any) {
    this.hideAddListItem = true;
    this.modalService.getModal('addListItem').close();
    this.setListItems(event);
  }

  openAddItemModal() {
    this.hideAddListItem = false;
    this.modalService.getModal('addListItem').open();
  }

  setListItems(listItems: Array<ListItem>) {
    this.listItems = listItems as Array<ListItem>;
  }

  delete(event: any) {
    console.log(event);
  }

  update(event: any) {
    console.log(event);
  }



  // mark as complete

  // edit

  // delete

  // add new

  // see section

}
