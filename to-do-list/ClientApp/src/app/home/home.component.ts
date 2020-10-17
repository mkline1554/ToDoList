import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ListItem } from '../models/listItem.model';
import { DueByWindow } from '../global/enums-and-constants';
import { NgxSmartModalService, NgxSmartModalComponent } from 'ngx-smart-modal';
import { ListItemService } from '../services/list-item.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.css']
})
export class HomeComponent {
  editItem: ListItem = new ListItem();

  activeItems: Array<ListItem> = [];
  completedItems: Array<ListItem> = [];
  overdueItems: Array<ListItem> = [];
  todayItems: Array<ListItem> = [];
  tomorrowItems: Array<ListItem> = [];
  thisWeekItems: Array<ListItem> = [];
  nextWeekItems: Array<ListItem> = [];
  upcomingItems: Array<ListItem> = [];

  today: Date = new Date;

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

  openAddItemModal() {
    this.modalService.getModal('addListItem').open();
  }

  openEditItemModal() {
    this.modalService.getModal('editListItem').open();
  }

  onEditClicked(item: ListItem) {
    this.editItem = item;
    this.openEditItemModal();
  }

  setListItems(listItems: Array<ListItem>) {
    this.activeItems = listItems.filter(i => i.completed == null) as Array<ListItem>;
    this.completedItems = listItems.filter(i => i.completed != null) as Array<ListItem>;

    this.overdueItems = listItems.filter(i => i.dueBy == DueByWindow.Overdue &&
        i.completed == null) as Array<ListItem>;
    this.todayItems = listItems.filter(i => i.dueBy == DueByWindow.Today &&
      i.completed == null) as Array<ListItem>;
    this.tomorrowItems = listItems.filter(i => i.dueBy == DueByWindow.Tomorrow &&
      i.completed == null) as Array<ListItem>;
    this.thisWeekItems = listItems.filter(i => i.dueBy == DueByWindow.ThisWeek &&
      i.completed == null) as Array<ListItem>;
    this.nextWeekItems = listItems.filter(i => i.dueBy == DueByWindow.NextWeek &&
      i.completed == null) as Array<ListItem>;
    this.upcomingItems = listItems.filter(i => i.dueBy == DueByWindow.Upcoming &&
      i.completed == null) as Array<ListItem>;
  }

  delete(itemId: number) {
    this.listItemservice.delete(itemId)
      .subscribe((response) => {
        this.setListItems(response);
      });
  }

  complete(item: ListItem) {
    this.listItemservice.complete(item)
      .subscribe((response) => {
        this.setListItems(response);
      }); 
  }

  update(item: ListItem) {
    this.listItemservice.update(item)
      .subscribe((response) => {
        this.setListItems(response);
      })
  }

  // see section

}
