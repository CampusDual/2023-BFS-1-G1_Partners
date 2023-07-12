import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { SharedModule } from '../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    SharedModule, // Módulo compartido (SharedModule)
    OntimizeWebModule, // Módulo de Ontimize Web
    MainRoutingModule // Módulo de enrutamiento principal (MainRoutingModule)
  ],
  declarations: [
    MainComponent, // Componente principal (MainComponent)
  ]
})
export class MainModule { }
