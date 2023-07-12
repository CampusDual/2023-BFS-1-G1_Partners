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
    ProductHomeComponent, // Componente de la página principal de productos
    ProductNewComponent, // Componente de creación de nuevos productos
    ProductDetailComponent, // Componente de detalle de productos
    AddPartnerRelationComponent, // Componente para añadir relación de partners
    FormProductDetailComponent, // Componente de detalle de productos en un formulario
    FormProductDetailComponent // Componente de detalle de productos en un formulario (duplicado)
  ],
  imports: [
    CommonModule,
    ProductRoutingModule, // Módulo de enrutamiento de productos
    OntimizeWebModule // Módulo de Ontimize Web
  ],
  entryComponents: [
    AddPartnerRelationComponent // Componentes que se cargarán de forma dinámica
  ]
})
export class ProductModule { }
