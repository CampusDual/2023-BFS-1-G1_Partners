import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { AddPartnerRelationComponent } from './product-detail/add-partner-relation/add-partner-relation.component';
import { FormProductDetailComponent } from './product-home/form-product-detail/form-product-detail.component';


@NgModule({
  declarations: [
    ProductHomeComponent, 
    ProductNewComponent,
    ProductDetailComponent,
    AddPartnerRelationComponent,
    FormProductDetailComponent,
    FormProductDetailComponent
    
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    OntimizeWebModule,
    
  ],
  entryComponents:[
    AddPartnerRelationComponent
  ]
})
export class ProductModule { }
