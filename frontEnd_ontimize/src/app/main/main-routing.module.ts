import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService, PermissionsGuardService } from 'ontimize-web-ngx';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuardService],
    canActivateChild:[PermissionsGuardService],
    
    children: [

      {path: '', redirectTo: 'home', pathMatch: 'full' },
      {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule),data:{oPermission:{permissionId: 'home',restrictedPermissionsRedirect:'/main/home-partner'}}},
      {path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
      {path: 'home-partner', loadChildren: () => import('./home-partner/home-partner.module').then(m => m.HomePartnerModule),data:{oPermission:{permissionId: 'home-partner',restrictedPermissionsRedirect:'/main/home'}}}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }



