import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListItemComponent } from './add-list-item.component';
import { FormsModule } from '@angular/forms';
import { ImportanceOptions, TypeOptions, SortByOptions } from '../global/enums-and-constants';
import { ListItemService } from '../services/list-item.service';
import { HttpClientModule } from '@angular/common/http';

import { ListItem } from '../models/listItem.model';
import { Title } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';

describe('AddListItemComponent', () => {
  let component: AddListItemComponent;
  let fixture: ComponentFixture<AddListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule
      ],
      declarations: [
        AddListItemComponent,
      ],
      providers: [
        ListItemService,
        { provide: 'IMPORTANCEOPTIONS', useValue: ImportanceOptions },
        { provide: 'TYPEOPTIONS', useValue: TypeOptions },
        { provide: 'SORTBYOPTIONS', useValue: SortByOptions }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('#onAddItem() should set listItem to empty model', () => {
    component.onAddItem();
    expect(component.listItem.id).toBe(0);
  });

  it('should create a new item', () => {
    let component: AddListItemComponent;
    const service: ListItemService = TestBed.get(ListItemService);
    expect(service.add).toBeTruthy();
  })

});



