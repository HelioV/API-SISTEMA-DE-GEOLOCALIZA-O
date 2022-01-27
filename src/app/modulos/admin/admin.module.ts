import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonsComponent } from './components/persons/persons.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {NbInputModule,NbLayoutModule,
  NbSidebarModule,NbMenuModule,NbCardModule,NbTabsetModule
,NbSelectModule,NbButtonModule,NbListModule,NbIconModule} from '@nebular/theme';
import { ListPersonsComponent } from './components/list-persons/list-persons.component';
import { MyMenuComponent } from './components/my-menu/my-menu.component';

@NgModule({
  declarations: [
    AdminComponent,
    PersonsComponent,
    ListPersonsComponent,
    MyMenuComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbCardModule,
    NbTabsetModule,
    NbInputModule,
    NbSelectModule,
    NbListModule,
    NbButtonModule,
    NbIconModule
  ]
})
export class AdminModule { }
