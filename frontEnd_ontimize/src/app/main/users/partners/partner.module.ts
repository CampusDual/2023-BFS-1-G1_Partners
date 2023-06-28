import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { PartnersComponent } from './partner-home/partners.component';
import { PartnerNewComponent } from './partner-new/partner-new.component';
import { PartnerDetailComponent } from './partner-detail/partner-detail.component';
import { PartnerRoutingModule } from './partner-routing.module';


@NgModule({
  declarations: [
    PartnersComponent,
    PartnerNewComponent,
    PartnerDetailComponent
  ],
  imports: [
    CommonModule,
    PartnerRoutingModule,
    OntimizeWebModule,
  ]
})
export class PartnerModule { }
