import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { AdminsComponent } from './admin-home/admins.component';
import { AdminNewComponent } from './admin-new/admin-new.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDetailComponent } from './admin-detail/admin-detail.component';

@NgModule({
  declarations: [
    AdminsComponent, // Componente de la página de administradores
    AdminNewComponent, // Componente de la página de creación de nuevo administrador
    AdminDetailComponent // Componente de la página de detalle de administrador
  ],
  imports: [
    CommonModule, // Módulo común de Angular
    AdminRoutingModule, // Módulo de enrutamiento para administradores
    OntimizeWebModule, // Módulo de Ontimize Web
  ]
})
export class AdminModule { }
