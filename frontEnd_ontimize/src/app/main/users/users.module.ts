import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { UsersRoutingModule } from './users-routing.module';
import { PartnersComponent } from './partners/partner-home/partners.component';
import { PartnerNewComponent } from './partners/partner-new/partner-new.component';
import { AdminNewComponent } from './admins/admin-new/admin-new.component';
import { PartnerDetailComponent } from './partners/partner-detail/partner-detail.component';
import { AdminDetailComponent } from './admins/admin-detail/admin-detail.component';
import { AdminsComponent } from './admins/admin-home/admins.component';


@NgModule({
  declarations: [
    PartnersComponent,
    PartnerNewComponent,
    PartnerDetailComponent,
    AdminsComponent,
    AdminNewComponent,
    AdminDetailComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    OntimizeWebModule,
  ]
})
export class UsersModule { }
