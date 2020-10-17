import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ListItem } from '../models/listItem.model';
import { ListItemService } from '../services/list-item.service';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'edit-list-item',
  templateUrl: './edit-list-item.component.html',
  styleUrls: ['./edit-list-item.component.css']
})
export class EditListItemComponent {

  @Input() editItem: ListItem;
  @Output() listItemEdited: EventEmitter<any> = new EventEmitter<any>();

  form: NgForm;

  constructor(
    private listItemService: ListItemService,
    private modalService: NgxSmartModalService) {

  }

  onEditItem(form: NgForm) {
    this.listItemService.update(this.editItem)
      .subscribe((response) => {
        this.listItemEdited.emit(response);
      });
    this.modalService.getModal('editListItem').close();
  }

}
