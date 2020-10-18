import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddListItemComponent } from './add-list-item/add-list-item.component';
//import { NgxSmartModalModule, NgxSmartModalService, NgxSmartModalComponent } from 'ngx-smart-modal';
import { ListItemService } from './services/list-item.service';
import { EditListItemComponent } from './edit-list-item/edit-list-item.component';
import { ImportanceOptions, TypeOptions, SortByOptions } from './global/enums-and-constants';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddListItemComponent,
    EditListItemComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' }
    ])
  ],
  exports: [
    AddListItemComponent,
    RouterModule
  ],
  providers: [
    ListItemService,
    DatePipe,
    { provide: 'IMPORTANCEOPTIONS', useValue: ImportanceOptions },
    { provide: 'TYPEOPTIONS', useValue: TypeOptions },
    { provide: 'SORTBYOPTIONS', useValue: SortByOptions }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
