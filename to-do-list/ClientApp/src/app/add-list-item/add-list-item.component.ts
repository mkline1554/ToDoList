import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ListItem } from '../models/listItem.model';
import { ListItemService } from '../services/list-item.service';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'add-list-item',
  templateUrl: './add-list-item.component.html',
  styleUrls: ['./add-list-item.component.css']
})
export class AddListItemComponent {

  @Output() listItemAdded: EventEmitter<any> = new EventEmitter<any>();

  listItem: ListItem = new ListItem();
  form: NgForm;
  //importanceOptions: Array<string> = ['Low', 'Medium', 'High'];
  //typeOptions: Array<string> = ['Errand', 'Chore', 'Work', 'Task', 'Personal', 'Special', 'Other'];
  //sortByOptions: Array<string> = ['Due Date', 'Importance', 'Type'];


  constructor(
    @Inject('IMPORTANCEOPTIONS') private importanceOptions,
    @Inject('TYPEOPTIONS') private typeOptions,
    @Inject('SORTBYOPTIONS') private sortByOptions,
    private listItemService: ListItemService,
    public modalService: NgxSmartModalService) {

  }

  onAddItem(form: NgForm) {
    this.listItemService.add(this.listItem)
      .subscribe((response) => {
        this.listItemAdded.emit(response);
      });

    this.modalService.getModal('addListItem').close();
  }

  add() {
    this.listItemService.add(this.listItem)
      .subscribe((response) => {
        this.listItemAdded.emit(response);
      });
  }

  close() {
    this.modalService.getModal('addListItem').close();
  }

  resetModel() {
    this.listItem = new ListItem();
  }

}
