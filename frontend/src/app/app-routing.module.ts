import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';


const routes: Routes = [
  {path: 'products', component : ProductlistComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'product', component: ProductdetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
