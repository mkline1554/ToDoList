import { Component, Input, Output, Inject, EventEmitter } from '@angular/core';
import { ListItem } from '../models/listItem.model';
import { ListItemService } from '../services/list-item.service';


@Component({
  selector: 'edit-list-item',
  templateUrl: './edit-list-item.component.html',
  styleUrls: ['./edit-list-item.component.css']
})
export class EditListItemComponent {

  @Input() inputItem: ListItem = new ListItem();
  @Output() listItemEdited: EventEmitter<any> = new EventEmitter<any>();

  editItem: ListItem = null;

  isLoaded: boolean = false;

  dueDate: string = '';

  constructor(
    @Inject('IMPORTANCEOPTIONS') private importanceOptions,
    @Inject('TYPEOPTIONS') private typeOptions,
    @Inject('SORTBYOPTIONS') private sortByOptions,
    private listItemService: ListItemService
  ) {
  }

  ngOnChanges(changes: any) {
    if (changes.inputItem && changes.inputItem.previousValue != undefined) {
      if (changes.inputItem.currentValue != changes.inputItem.previousValue) {
        this.isLoaded = false;
        this.editItem = new ListItem(this.inputItem);
        this.dueDate = changes.inputItem.currentValue.due.substring(0, 10);
        this.isLoaded = true;
      }
    }
  }

  onEditItem() {
    this.setExportDate();
    this.edit();
  }

  edit() {
    this.listItemService.update(this.inputItem)
      .subscribe((response) => {
        this.listItemEdited.emit(response);
      });
  }

  setDateString(value: any) {
    this.dueDate = value
  }

  setExportDate() {
    this.inputItem.due = new Date(this.dueDate);
  }

}
