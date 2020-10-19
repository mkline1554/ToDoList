import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { ListItem } from '../models/listItem.model';
import { ListItemService } from '../services/list-item.service';


@Component({
  selector: 'add-list-item',
  templateUrl: './add-list-item.component.html',
  styleUrls: ['./add-list-item.component.css']
})
export class AddListItemComponent {

  @Output() listItemAdded: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();

  listItem: ListItem = new ListItem();

  constructor(
    @Inject('IMPORTANCEOPTIONS') public importanceOptions,
    @Inject('TYPEOPTIONS') public typeOptions,
    @Inject('SORTBYOPTIONS') public sortByOptions,
    private listItemService: ListItemService,
  ) {

  }

  onAddItem() {
    this.add();
    this.resetModel();
  }

  add() {
    this.listItemService.add(this.listItem)
      .subscribe((response) => {
        this.listItemAdded.emit(response);
      });
  }

  resetModel() {
    this.listItem = new ListItem();
  }

  onCancel() {
    this.cancel.emit();
  }

}
