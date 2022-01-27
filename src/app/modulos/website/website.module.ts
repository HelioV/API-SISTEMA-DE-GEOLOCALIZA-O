import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteComponent } from './website.component';
import { MapaGeralComponent } from './components/mapa-geral/mapa-geral.component';
import {NbInputModule,NbLayoutModule,
  NbSidebarModule,NbMenuModule,NbCardModule,NbTabsetModule
,NbSelectModule,NbButtonModule,NbSpinnerModule,NbAlertModule} from '@nebular/theme';
import { InsertLocationComponent } from './components/insert-location/insert-location.component';
import { EnterAdminComponent } from './components/enter-admin/enter-admin.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    WebsiteComponent,
    MapaGeralComponent,
    InsertLocationComponent,
    EnterAdminComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbCardModule,
    NbTabsetModule,
    NbInputModule,
    NbSelectModule,
    NbButtonModule,
    NbSpinnerModule,
    ReactiveFormsModule,
    NbAlertModule
  ]
})
export class WebsiteModule { }
