import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { AdminsComponent } from './admin-home/admins.component';
import { AdminNewComponent } from './admin-new/admin-new.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDetailComponent } from './admin-detail/admin-detail.component';


@NgModule({
  declarations: [
    AdminsComponent,
    AdminNewComponent,
    AdminDetailComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    OntimizeWebModule,
  ]
})
export class AdminModule { }
