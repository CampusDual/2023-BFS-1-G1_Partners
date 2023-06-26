import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { UsersRoutingModule } from './users-routing.module';
import { UsersHomeComponent } from './users-home/users-home.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersNewComponent } from './users-new/users-new.component';
import { PartnersComponent } from './partners/partners.component';
import { AdminsComponent } from './admins/admins.component';


@NgModule({
  declarations: [
    UsersHomeComponent, 
    UsersDetailComponent,
    UsersNewComponent,
    PartnersComponent,
    AdminsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    OntimizeWebModule,
    
  ]
})
export class UsersModule { }
