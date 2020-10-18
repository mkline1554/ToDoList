"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./home.component");
var testing_1 = require("@angular/core/testing");
require("jasmine");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var edit_list_item_component_1 = require("../edit-list-item/edit-list-item.component");
var add_list_item_component_1 = require("../add-list-item/add-list-item.component");
var list_item_service_1 = require("../services/list-item.service");
var enums_and_constants_1 = require("../global/enums-and-constants");
var testing_2 = require("@angular/router/testing");
var testing_3 = require("@angular/common/http/testing");
var listItem_model_1 = require("../models/listItem.model");
describe('HomeComponent', function () {
    var component;
    var fixture;
    var service;
    var listItem = new listItem_model_1.ListItem({ id: 1, title: 'test', description: 'test description', importance: 'High', type: 'Errand' });
    var listItem2 = new listItem_model_1.ListItem({ id: 2, title: 'test', description: 'test description', importance: 'Low', type: 'Chore' });
    var listItems = new Array();
    listItems.push(listItem);
    listItems.push(listItem2);
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                forms_1.FormsModule,
                http_1.HttpClientModule,
                testing_2.RouterTestingModule,
                testing_3.HttpClientTestingModule
            ],
            declarations: [
                edit_list_item_component_1.EditListItemComponent,
                add_list_item_component_1.AddListItemComponent,
                home_component_1.HomeComponent
            ],
            providers: [
                list_item_service_1.ListItemService,
                { provide: 'IMPORTANCEOPTIONS', useValue: enums_and_constants_1.ImportanceOptions },
                { provide: 'TYPEOPTIONS', useValue: enums_and_constants_1.TypeOptions },
                { provide: 'SORTBYOPTIONS', useValue: enums_and_constants_1.SortByOptions }
            ]
        }).compileComponents();
        fixture = testing_1.TestBed.createComponent(home_component_1.HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('OpenAddItemModal(), should start off false', function () {
        expect(component.showAddItemModal).toEqual(false);
    });
    it('openAddItemModal(), should set showAddItemModal to true', function () {
        component.openAddItemModal();
        expect(component.showAddItemModal).toEqual(true);
    });
    it('OpenEditItemModal(), should start off false', function () {
        expect(component.showEditItemModal).toEqual(false);
    });
    it('openEditItemModal(), should set showAddItemModal to true', function () {
        component.openEditItemModal();
        expect(component.showEditItemModal).toEqual(true);
    });
    it('setEditItem(), editItem should have valid editItem object', function () {
        component.setEditItem(listItem);
        expect(component.editItem).toEqual(listItem);
    });
    it('setAllItems(), should set allItems to an array of ListItems', function () {
        component.setAllItems(listItems);
        expect(component.allItems).toEqual(listItems);
    });
    it('onItemEdited(), should set the showEditModal to false', function () {
        component.onItemEdited(listItems);
        expect(component.showEditItemModal).toEqual(false);
    });
    it('onItemAdded(), should set the showAddItemModal to false', function () {
        component.onItemAdded(listItems);
        expect(component.showAddItemModal).toEqual(false);
    });
    it('resetFilters(), should call onViewCompleted if showCompleted is true', function () {
        spyOn(component, 'onViewCompleted');
        spyOn(component, 'onViewSpecificDueWindow');
        component.showCompleted = true;
        component.resetFilters();
        expect(component.onViewCompleted).toHaveBeenCalled();
        expect(component.onViewSpecificDueWindow).not.toHaveBeenCalled();
    });
    it('resetFilters(), should call onViewSpecificDueWindoe if showCompleted and showIncomplete are false', function () {
        spyOn(component, 'onViewCompleted');
        spyOn(component, 'onViewSpecificDueWindow');
        component.showCompleted = false;
        component.showIncomplete = false;
        component.resetFilters();
        expect(component.onViewCompleted).not.toHaveBeenCalled();
        expect(component.onViewSpecificDueWindow).toHaveBeenCalled();
    });
    it('filterItemsByDueWindow(), should update the activeItems', function () {
        component.filterItemsByDueWindow();
        expect(component.activeItems).toBeDefined();
    });
    it('onViewSpecificDueWindow(), should set showCompleted and showIncomplete to false', function () {
        component.showCompleted = true;
        component.showIncomplete = true;
        component.onViewSpecificDueWindow(component.window);
        expect(component.showIncomplete).toEqual(false);
        expect(component.showCompleted).toEqual(false);
    });
    it('onViewSpecificDueWindow(), should call setDueWindow() and filterItemsByDueWindow()', function () {
        spyOn(component, 'setDueByWindow');
        spyOn(component, 'filterItemsByDueWindow');
        component.onViewSpecificDueWindow(component.window);
        expect(component.setDueByWindow).toHaveBeenCalled();
        expect(component.filterItemsByDueWindow).toHaveBeenCalled();
    });
    it('onViewCompleted(), should set showIncomplete to false and showComplete to true', function () {
        component.showCompleted = false;
        component.showIncomplete = true;
        component.onViewCompleted();
        expect(component.showCompleted).toEqual(true);
        expect(component.showIncomplete).toEqual(false);
    });
    it('onViewCompleted(), call setDueWindow() and viewCompletedOnly()', function () {
        spyOn(component, 'setDueByWindow');
        spyOn(component, 'viewCompletedOnly');
        component.onViewCompleted();
        expect(component.setDueByWindow).toHaveBeenCalled();
        expect(component.viewCompletedOnly).toHaveBeenCalled();
    });
    it('onViewIncompleted(), should set showIncomplete to true and showCompleted to false', function () {
        component.showCompleted = true;
        component.showIncomplete = false;
        component.onViewIncompleted();
        expect(component.showCompleted).toEqual(false);
        expect(component.showIncomplete).toEqual(true);
    });
    it('onViewIncompleted(), should call setDueByWindow() and viewIncompleted()', function () {
        spyOn(component, 'setDueByWindow');
        spyOn(component, 'viewIncompleted');
        component.onViewIncompleted();
        expect(component.setDueByWindow).toHaveBeenCalled();
        expect(component.viewIncompleted).toHaveBeenCalled();
    });
    it('setDueWindow(), should set the window property to passed number', function () {
        component.window = -1;
        component.setDueByWindow(0);
        expect(component.window).toEqual(0);
    });
});
//# sourceMappingURL=home.component.spec.js.map