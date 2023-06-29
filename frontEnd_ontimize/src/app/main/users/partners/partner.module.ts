import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { PartnersComponent } from './partner-home/partners.component';
import { PartnerNewComponent } from './partner-new/partner-new.component';
import { PartnerDetailComponent } from './partner-detail/partner-detail.component';
import { PartnerRoutingModule } from './partner-routing.module';
import { AddProductRelationComponent } from './partner-detail/add-product-relation/add-product-relation.component';


@NgModule({
  declarations: [
    PartnersComponent,
    PartnerNewComponent,
    PartnerDetailComponent,
    AddProductRelationComponent
  ],
  imports: [
    CommonModule,
    PartnerRoutingModule,
    OntimizeWebModule,
  ],
  entryComponents:[
    AddProductRelationComponent
  ]
})
export class PartnerModule { }
