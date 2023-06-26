import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProductDetailComponent } from './main/product/product-home/form-product-detail/form-product-detail.component';

export const routes: Routes = [
  { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  //{ path: 'form-product-detail', component: FormProductDetailComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' }
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
