import { Component, Input, Output, Inject, EventEmitter } from '@angular/core';
import { ListItem } from '../models/listItem.model';
import { ListItemService } from '../services/list-item.service';


@Component({
  selector: 'edit-list-item',
  templateUrl: './edit-list-item.component.html',
  styleUrls: ['./edit-list-item.component.css']
})
export class EditListItemComponent {

  @Input() editItem: ListItem = new ListItem();
  @Output() listItemEdited: EventEmitter<any> = new EventEmitter<any>();

  isLoaded: boolean = false;

  constructor(
    @Inject('IMPORTANCEOPTIONS') private importanceOptions,
    @Inject('TYPEOPTIONS') private typeOptions,
    @Inject('SORTBYOPTIONS') private sortByOptions,
    private listItemService: ListItemService
  ) {
  }

  onEditItem() {
    this.edit();
  }

  edit() {
    this.listItemService.update(this.editItem)
      .subscribe((response) => {
        this.listItemEdited.emit(response);
      });
  }

  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }

}
