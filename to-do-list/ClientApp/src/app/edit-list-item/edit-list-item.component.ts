import { Component, Input, Output, Inject, EventEmitter } from '@angular/core';
import { ListItem } from '../models/listItem.model';
import { ListItemService } from '../services/list-item.service';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'edit-list-item',
  templateUrl: './edit-list-item.component.html',
  styleUrls: ['./edit-list-item.component.css']
})
export class EditListItemComponent {

  @Input() editItem: ListItem;
  @Output() listItemEdited: EventEmitter<any> = new EventEmitter<any>();

  isLoaded: boolean = false;

  constructor(
    @Inject('IMPORTANCEOPTIONS') private importanceOptions,
    @Inject('TYPEOPTIONS') private typeOptions,
    @Inject('SORTBYOPTIONS') private sortByOptions,
    private listItemService: ListItemService,
    private modalService: NgxSmartModalService) {
  }

  onEditItem() {
    this.edit();
    this.close();
  }

  edit() {
    this.listItemService.update(this.editItem)
      .subscribe((response) => {
        this.listItemEdited.emit(response);
      });
  }

  close() {
    this.modalService.getModal('editListItem').close();
  }

  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }

}
