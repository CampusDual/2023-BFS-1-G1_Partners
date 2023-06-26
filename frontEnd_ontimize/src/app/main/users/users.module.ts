import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { UsersRoutingModule } from './users-routing.module';
import { PartnersComponent } from './partners/partners.component';
import { PartnerNewComponent } from './partners/partner-new/partner-new.component';
import { AdminsComponent } from './admins/admins.component';
import { AdminNewComponent } from './admins/admin-new/admin-new.component';


@NgModule({
  declarations: [
    PartnersComponent,
    AdminsComponent,
    AdminNewComponent,
    PartnerNewComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    OntimizeWebModule,
  ]
})
export class UsersModule { }
