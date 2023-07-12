import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { APP_CONFIG, ONTIMIZE_MODULES, ONTIMIZE_PROVIDERS, OntimizeWebModule } from 'ontimize-web-ngx';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CONFIG } from './app.config';

// Standard providers...
// Defining custom providers (if needed)...
export const customProviders: any = [
];

@NgModule({
  imports: [
    ONTIMIZE_MODULES, // Módulos de Ontimize Web
    HttpClientModule, // Módulo para realizar peticiones HTTP
    OntimizeWebModule, // Módulo principal de Ontimize Web
    AppRoutingModule, // Módulo de enrutamiento principal
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }) // Módulo para el Service Worker
  ],
  declarations: [
    AppComponent, // Componente principal (AppComponent)
  ],
  bootstrap: [
    AppComponent // Componente principal para arrancar la aplicación
  ],
  providers: [
    { provide: APP_CONFIG, useValue: CONFIG }, // Proveedor para la configuración de la aplicación
    ONTIMIZE_PROVIDERS, // Proveedores de Ontimize Web
    customProviders // Proveedores personalizados (si se necesitan)
  ],
})
export class AppModule { }
