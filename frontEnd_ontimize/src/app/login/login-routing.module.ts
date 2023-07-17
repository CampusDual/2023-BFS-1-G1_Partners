import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';

const routes: Routes = [
  // Definir la ruta para el componente LoginComponent
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Importar las rutas definidas
  exports: [RouterModule] // Exportar el módulo de enrutamiento
})
export class LoginRoutingModule { }
