import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [
    ProfileComponent, // Componente de perfil
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule, // Módulo de enrutamiento de perfil
    OntimizeWebModule, // Módulo de Ontimize Web
  ]
})
export class ProfileModule { }
