import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminsComponent } from './admin-home/admins.component';
import { AdminNewComponent } from './admin-new/admin-new.component';
import { AdminDetailComponent } from './admin-detail/admin-detail.component';

const routes: Routes = [
  {
    path: "admins", // Ruta para la página de administradores
    component: AdminsComponent // Componente asociado a la ruta
  },
  {
    path: "admins/new", // Ruta para la página de creación de nuevo administrador
    component: AdminNewComponent // Componente asociado a la ruta
  },
  {
    path: "admins/:user_", // Ruta para la página de detalle de administrador con un parámetro dinámico ":user_"
    component: AdminDetailComponent // Componente asociado a la ruta
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
