import { HomeComponent } from "./home.component"
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import 'jasmine';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { EditListItemComponent } from "../edit-list-item/edit-list-item.component";
import { AddListItemComponent } from "../add-list-item/add-list-item.component";
import { ListItemService } from "../services/list-item.service";
import { ImportanceOptions, TypeOptions, SortByOptions } from "../global/enums-and-constants";
import { APP_BASE_HREF } from "@angular/common";
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListItem } from "../models/listItem.model";


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: ListItemService;

  let listItem: ListItem = new ListItem(
    { id: 1, title: 'test', description: 'test description', importance: 'High', type: 'Errand' }
  );
  let listItem2: ListItem = new ListItem(
    { id: 2, title: 'test', description: 'test description', importance: 'Low', type: 'Chore' }
  );

  let listItems: Array<ListItem> = new Array<ListItem>();
  listItems.push(listItem);
  listItems.push(listItem2);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        EditListItemComponent,
        AddListItemComponent,
        HomeComponent
      ],
      providers: [
        ListItemService,
        { provide: 'IMPORTANCEOPTIONS', useValue: ImportanceOptions },
        { provide: 'TYPEOPTIONS', useValue: TypeOptions },
        { provide: 'SORTBYOPTIONS', useValue: SortByOptions }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('OpenAddItemModal(), should start off false', () => {
    expect(component.showAddItemModal).toEqual(false);
  });

  it('openAddItemModal(), should set showAddItemModal to true', () => {
    component.openAddItemModal();
    expect(component.showAddItemModal).toEqual(true);
  });

  it('OpenEditItemModal(), should start off false', () => {
    expect(component.showEditItemModal).toEqual(false);
  });

  it('openEditItemModal(), should set showAddItemModal to true', () => {
    component.openEditItemModal();
    expect(component.showEditItemModal).toEqual(true);
  });

  it('setEditItem(), editItem should have valid editItem object', () => {
    component.setEditItem(listItem);
    expect(component.editItem).toEqual(listItem);
  });

  it('setAllItems(), should set allItems to an array of ListItems', () => {
    component.setAllItems(listItems);
    expect(component.allItems).toEqual(listItems);
  });

  it('onItemEdited(), should set the showEditModal to false', () => {
    component.onItemEdited(listItems);
    expect(component.showEditItemModal).toEqual(false);
  });

  it('onItemAdded(), should set the showAddItemModal to false', () => {
    component.onItemAdded(listItems);
    expect(component.showAddItemModal).toEqual(false);
  });

  it('resetFilters(), should call onViewCompleted if showCompleted is true', () => {
    spyOn(component, 'onViewCompleted');
    spyOn(component, 'onViewSpecificDueWindow');
    component.showCompleted = true;
    component.resetFilters();
    expect(component.onViewCompleted).toHaveBeenCalled();
    expect(component.onViewSpecificDueWindow).not.toHaveBeenCalled();
  });

  it('resetFilters(), should call onViewSpecificDueWindoe if showCompleted and showIncomplete are false', () => {
    spyOn(component, 'onViewCompleted');
    spyOn(component, 'onViewSpecificDueWindow');
    component.showCompleted = false;
    component.showIncomplete = false
    component.resetFilters();
    expect(component.onViewCompleted).not.toHaveBeenCalled();
    expect(component.onViewSpecificDueWindow).toHaveBeenCalled();
  });

  it('filterItemsByDueWindow(), should update the activeItems', () => {
    component.filterItemsByDueWindow();
    expect(component.activeItems).toBeDefined();
  });

  it('onViewSpecificDueWindow(), should set showCompleted and showIncomplete to false', () => {
    component.showCompleted = true;
    component.showIncomplete = true;
    component.onViewSpecificDueWindow(component.window);
    expect(component.showIncomplete).toEqual(false);
    expect(component.showCompleted).toEqual(false);
  });

  it('onViewSpecificDueWindow(), should call setDueWindow() and filterItemsByDueWindow()', () => {
    spyOn(component, 'setDueByWindow');
    spyOn(component, 'filterItemsByDueWindow');
    component.onViewSpecificDueWindow(component.window);
    expect(component.setDueByWindow).toHaveBeenCalled();
    expect(component.filterItemsByDueWindow).toHaveBeenCalled();
  });

  it('onViewCompleted(), should set showIncomplete to false and showComplete to true', () => {
    component.showCompleted = false;
    component.showIncomplete = true;
    component.onViewCompleted();
    expect(component.showCompleted).toEqual(true);
    expect(component.showIncomplete).toEqual(false);
  });

  it('onViewCompleted(), call setDueWindow() and viewCompletedOnly()', () => {
    spyOn(component, 'setDueByWindow');
    spyOn(component, 'viewCompletedOnly');
    component.onViewCompleted();
    expect(component.setDueByWindow).toHaveBeenCalled();
    expect(component.viewCompletedOnly).toHaveBeenCalled();
  });

  it('onViewIncompleted(), should set showIncomplete to true and showCompleted to false', () => {
    component.showCompleted = true;
    component.showIncomplete = false;
    component.onViewIncompleted();
    expect(component.showCompleted).toEqual(false);
    expect(component.showIncomplete).toEqual(true);
  });

  it('onViewIncompleted(), should call setDueByWindow() and viewIncompleted()', () => {
    spyOn(component, 'setDueByWindow');
    spyOn(component, 'viewIncompleted');
    component.onViewIncompleted();
    expect(component.setDueByWindow).toHaveBeenCalled();
    expect(component.viewIncompleted).toHaveBeenCalled();
  });

  it('setDueWindow(), should set the window property to passed number', () => {
    component.window = -1;
    component.setDueByWindow(0);
    expect(component.window).toEqual(0);
  });

  it('closeAddItemModal(), should set the showAddItemModal property to false', () => {
    component.closeAddItemModal();
    expect(component.showAddItemModal).toEqual(false);
  });

  it('closeeditItemModal(), should set the showEditItemModal property to false', () => {
    component.closeEditItemModal();
    expect(component.showEditItemModal).toEqual(false);
  })

});

