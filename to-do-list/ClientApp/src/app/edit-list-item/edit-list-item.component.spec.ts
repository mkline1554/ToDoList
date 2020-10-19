import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditListItemComponent } from './edit-list-item.component';
import { FormsModule } from '@angular/forms';
import { ImportanceOptions, TypeOptions, SortByOptions } from '../global/enums-and-constants';
import { ListItemService } from '../services/list-item.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListItem } from '../models/listItem.model';

describe('EditListItemComponent', () => {
  let component: EditListItemComponent;
  let fixture: ComponentFixture<EditListItemComponent>;

  let listItem: ListItem = new ListItem(
    { id: 1, title: 'test', description: 'test description', importance: 'High', type: 'Errand' }
  );

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        EditListItemComponent
      ],
      providers: [
        ListItemService,
        { provide: 'IMPORTANCEOPTIONS', useValue: ImportanceOptions },
        { provide: 'TYPEOPTIONS', useValue: TypeOptions },
        { provide: 'SORTBYOPTIONS', useValue: SortByOptions }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(EditListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('setDateString(), should update the dueDate', () => {
    component.setDateString('2020-8-8');
    expect(component.dueDate).toBe('2020-8-8');
  });

  it('setExportDate(), should create a valid date', () => {
    component.dueDate = '2020-12-12';
    let expectedDate = new Date('2020-12-12');
    component.setExportDate();
    expect(component.inputItem.due).toEqual(expectedDate);
  });

  it('onCancel(), should send out the cancel emitter', () => {
    spyOn(component.cancel, 'emit');
    let nativeElement = fixture.nativeElement;
    const closeElement = nativeElement.querySelector('.close');
    closeElement.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.cancel.emit).toHaveBeenCalled();
  })

});
