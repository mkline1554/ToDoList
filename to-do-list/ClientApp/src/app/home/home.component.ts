import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListItem } from '../models/listItem.model';
import { DueByWindow } from '../global/enums-and-constants';
import { ListItemService } from '../services/list-item.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.css']
})
export class HomeComponent {
  editItem: ListItem = new ListItem();

  allItems: Array<ListItem> = [];
  activeItems: Array<ListItem> = [];

  incompleteItems: Array<ListItem> = [];
  completedItems: Array<ListItem> = [];
  overdueItems: Array<ListItem> = [];
  todayItems: Array<ListItem> = [];
  tomorrowItems: Array<ListItem> = [];
  thisWeekItems: Array<ListItem> = [];
  nextWeekItems: Array<ListItem> = [];
  upcomingItems: Array<ListItem> = [];

  today: Date = new Date;

  window: number = -1;

  showCompleted: boolean = false;
  showIncomplete: boolean = true;

  showAddItemModal: boolean = false;
  showEditItemModal: boolean = false;

  constructor(
    private http: HttpClient,
    private listItemservice: ListItemService,
  ) {
    this.listItemservice.get()
      .subscribe((response) => {
        this.setListItems(response);
    });
  }

  openAddItemModal() {
    this.showAddItemModal = true;
  }

  openEditItemModal() {
    this.showEditItemModal = true;
  }

  onEditClicked(item: ListItem) {
    this.setEditItem(item);
    this.openEditItemModal();
  }

  setEditItem(item: ListItem) {
    this.editItem = item;
  }

  setListItems(listItems: Array<ListItem>) {
    this.setAllItems(listItems);
    this.setActiveItems();
    this.setCompleteAndIncomplete();
    this.setItemsByDueWindow();
  }

  setAllItems(listItems: Array<ListItem>) {
    this.allItems = listItems;
  }

  setActiveItems() {
    this.activeItems = this.allItems.filter(i => i.completed == null)
      .sort((a, b) => a.dueBy - b.dueBy);
  }

  setCompleteAndIncomplete() {
    this.incompleteItems = this.allItems.filter(i => i.completed == null);
    this.completedItems = this.allItems.filter(i => i.completed != null);
  }

  setItemsByDueWindow() {
    this.overdueItems = this.incompleteItems.filter(i => i.dueBy == DueByWindow.Overdue);
    this.todayItems = this.incompleteItems.filter(i => i.dueBy == DueByWindow.Today);
    this.tomorrowItems = this.incompleteItems.filter(i => i.dueBy == DueByWindow.Tomorrow);
    this.thisWeekItems = this.incompleteItems.filter(i => i.dueBy == DueByWindow.ThisWeek);
    this.nextWeekItems = this.incompleteItems.filter(i => i.dueBy == DueByWindow.NextWeek);
    this.upcomingItems = this.incompleteItems.filter(i => i.dueBy == DueByWindow.Upcoming);
    console.log(this.todayItems);
  }

  refresh(listItems: Array<ListItem>) {
    this.setListItems(listItems);
    this.resetFilters();
  }

  onItemEdited(listItems: Array<ListItem>) {
    this.refresh(listItems);
    this.closeEditItemModal();
  }

  onItemAdded(listItems: Array<ListItem>) {
    this.refresh(listItems);
    this.closeAddItemModal();
  }

  closeAddItemModal() {
    this.showAddItemModal = false;
  }

  closeEditItemModal() {
    this.showEditItemModal = false;
  }

  resetFilters() {
    if (this.showCompleted) {
      this.onViewCompleted();
    } else if (!this.showCompleted && !this.showIncomplete) {
      this.onViewSpecificDueWindow(this.window);
    }
  }

  filterItemsByDueWindow() {
    this.activeItems = this.activeItems.filter(i => i.dueBy == this.window);
  }

  viewCompletedOnly() {
    this.activeItems = this.completedItems;
  }

  viewIncompleted() {
    this.activeItems = this.incompleteItems
      .sort((a, b) => a.dueBy - b.dueBy);
  }

  delete(itemId: number) {
    this.listItemservice.delete(itemId)
      .subscribe((response) => {
        this.setListItems(response);
        this.viewIncompleted();
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
      });
  }

  onViewSpecificDueWindow(window: number) {
    this.showCompleted = false;
    this.showIncomplete = false;
    this.setDueByWindow(window);
    this.setActiveItems();
    this.filterItemsByDueWindow();
  }

  onViewCompleted() {
    this.showCompleted = true;
    this.showIncomplete = false;
    this.setDueByWindow(-1);
    this.viewCompletedOnly();
  }

  onViewIncompleted() {
    this.showIncomplete = true;
    this.showCompleted = false;
    this.setDueByWindow(-1);
    this.viewIncompleted();
  }

  setDueByWindow(window: number) {
    this.window = window;
  }

}
