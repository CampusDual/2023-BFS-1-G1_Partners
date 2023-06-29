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
      {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule),data:{oPermission:{permissionId: 'home',restrictedPermissionsRedirect:'/main/product-home'}}},
      {path: 'product-home', loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
      // {path: 'form-product-detail',loadChildren:() => import('./product/product.module').then(m=>m.ProductModule) },
      {path: 'users-admin', loadChildren: () => import('./users/admins/admin.module').then(m => m.AdminModule) },
      {path: 'users-partner', loadChildren: () => import('./users/partners/partner.module').then(m => m.PartnerModule) },
      {path: 'personal-area', loadChildren: () => import('./personal-area/personal-area.module').then(m => m.PersonalAreaModule) },

      
      //,data:{oPermission:{permissionId: 'product-home',restrictedPermissionsRedirect:'/main/home'}}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }



