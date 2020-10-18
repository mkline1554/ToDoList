import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditListItemComponent } from './edit-list-item.component';
import { FormsModule } from '@angular/forms';
import { ImportanceOptions, TypeOptions, SortByOptions } from '../global/enums-and-constants';
import { ListItemService } from '../services/list-item.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EditListItemComponent', () => {
  let component: EditListItemComponent;
  let fixture: ComponentFixture<EditListItemComponent>;

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

});
