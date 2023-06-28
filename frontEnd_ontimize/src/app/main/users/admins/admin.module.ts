import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { AdminsComponent } from './admin-home/admins.component';
import { AdminNewComponent } from './admin-new/admin-new.component';
import { AdminDetailComponent } from './admin-detail/admin-detail.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdmindComponent } from './admind/admind.component';


@NgModule({
  declarations: [
    AdminsComponent,
    AdminNewComponent,
    AdminDetailComponent,
    AdmindComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    OntimizeWebModule,
  ]
})
export class AdminModule { }
