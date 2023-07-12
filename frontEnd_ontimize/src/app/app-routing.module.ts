import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProductDetailComponent } from './main/product/product-home/form-product-detail/form-product-detail.component';
import { ProfileComponent } from './main/profile/profile.component';

export const routes: Routes = [
  // Rutas definidas para la aplicación

  { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
  // Ruta para cargar el módulo principal (MainModule)
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  // Ruta para cargar el módulo de inicio de sesión (LoginModule)
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  // Redirección a la ruta 'main' como ruta principal
];

const opt = {
  enableTracing: false
  // true if you want to print navigation routes
};

@NgModule({
  imports: [RouterModule.forRoot(routes, opt)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
