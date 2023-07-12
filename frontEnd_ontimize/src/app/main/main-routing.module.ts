import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService, PermissionsGuardService } from 'ontimize-web-ngx';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', // Ruta raíz
    component: MainComponent, // Componente asociado a la ruta raíz
    canActivate: [AuthGuardService], // Guardia de autenticación para proteger la ruta
    canActivateChild: [PermissionsGuardService], // Guardia de permisos para proteger las rutas hijas

    children: [
      // Rutas hijas del componente principal

      // Ruta para el perfil
      { path: 'profile', loadChildren: () => import('src/app/main/profile/profile.module').then(m => m.ProfileModule) },
      // Redirección a la página principal de productos
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      // Ruta para el módulo de productos
      { path: 'product-home', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
      // Ruta para el módulo de administradores de usuarios
      { path: 'users-admin', loadChildren: () => import('./users/admins/admin.module').then(m => m.AdminModule) },
      // Ruta para el módulo de partners de usuarios
      { path: 'users-partner', loadChildren: () => import('./users/partners/partner.module').then(m => m.PartnerModule) },
      // Ruta para el área personal
      { path: 'personal-area', loadChildren: () => import('./personal-area/personal-area.module').then(m => m.PersonalAreaModule) },
      // Ruta para el perfil de un usuario específico
      { path: 'profile/:user_', loadChildren: () => import('src/app/main/profile/profile.module').then(m => m.ProfileModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
