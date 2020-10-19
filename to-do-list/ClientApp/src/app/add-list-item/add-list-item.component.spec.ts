import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListItemComponent } from './add-list-item.component';
import { FormsModule } from '@angular/forms';
import { ImportanceOptions, TypeOptions, SortByOptions } from '../global/enums-and-constants';
import { ListItemService } from '../services/list-item.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AddListItemComponent', () => {
  let component: AddListItemComponent;
  let fixture: ComponentFixture<AddListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule,
        RouterTestingModule,
        HttpClientTestingModule
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#resetModel() should set listItem to empty model', () => {
    component.resetModel();
    expect(component.listItem.id).toBe(0);
    expect(component.listItem.title).toBe(undefined);
    expect(component.listItem.description).toBe(undefined);
    expect(component.listItem.importance).toBe(undefined);
    expect(component.listItem.type).toBe(undefined);
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



