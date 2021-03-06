"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var add_list_item_component_1 = require("./add-list-item/add-list-item.component");
var edit_list_item_component_1 = require("./edit-list-item/edit-list-item.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var testing_2 = require("@angular/router/testing");
var testing_3 = require("@angular/common/http/testing");
describe('AppComponent', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                forms_1.FormsModule,
                http_1.HttpClientModule,
                testing_2.RouterTestingModule,
                testing_3.HttpClientTestingModule
                //RouterModule.forRoot([
                //  { path: '', component: HomeComponent, pathMatch: 'full' }
                //])
            ],
            declarations: [
                home_component_1.HomeComponent,
                add_list_item_component_1.AddListItemComponent,
                edit_list_item_component_1.EditListItemComponent,
                app_component_1.AppComponent
            ]
        });
    });
    it('should create the app', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
//# sourceMappingURL=app.component.spec.js.map