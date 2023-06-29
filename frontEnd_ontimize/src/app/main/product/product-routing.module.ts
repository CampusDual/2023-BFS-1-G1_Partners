import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormProductDetailComponent } from './product-home/form-product-detail/form-product-detail.component';


const routes: Routes = [{
  path : '',
  component: ProductHomeComponent
},
{
  path: "new",
  component: ProductNewComponent
},
{
  path: ':id',
  component: ProductDetailComponent
},
{
  
path: 'form-product-detail/:id',
  component: FormProductDetailComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

