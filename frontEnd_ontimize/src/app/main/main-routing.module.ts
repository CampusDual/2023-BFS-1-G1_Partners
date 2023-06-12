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
      {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule),data:{oPermission:{permissionId: 'home',restrictedPermissionsRedirect:'/main/home-product'}}},
      {path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
      {path: 'product-home', loadChildren: () => import('./product/product.module').then(m => m.ProductModule)}
      
      //,data:{oPermission:{permissionId: 'product-home',restrictedPermissionsRedirect:'/main/home'}}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }



