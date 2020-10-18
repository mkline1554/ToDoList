import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditListItemComponent } from './edit-list-item.component';
import { FormsModule } from '@angular/forms';
import { ImportanceOptions, TypeOptions, SortByOptions } from '../global/enums-and-constants';
import { ListItemService } from '../services/list-item.service';
import { HttpClientModule } from '@angular/common/http';

describe('EditListItemComponent', () => {
  let component: EditListItemComponent;
  let fixture: ComponentFixture<EditListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule
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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
