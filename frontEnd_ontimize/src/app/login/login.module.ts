import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { SharedModule } from '../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    SharedModule, // Módulo compartido que contiene componentes, directivas y pipes reutilizables
    OntimizeWebModule, // Módulo de Ontimize Web que proporciona funcionalidades adicionales
    LoginRoutingModule // Módulo de enrutamiento para las rutas del componente de inicio de sesión
  ],
  declarations: [
    LoginComponent // Componente de inicio de sesión
  ]
})
export class LoginModule { }
