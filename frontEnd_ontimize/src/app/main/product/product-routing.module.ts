import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormProductDetailComponent } from './product-home/form-product-detail/form-product-detail.component';

const routes: Routes = [
  {
    path: '', // Ruta raíz
    component: ProductHomeComponent // Componente asociado a la ruta raíz
  },
  {
    path: 'new', // Ruta para la creación de un nuevo producto
    component: ProductNewComponent // Componente asociado a la ruta 'new'
  },
  {
    path: ':id', // Ruta con un parámetro dinámico ':id' para el detalle de un producto
    component: ProductDetailComponent // Componente asociado a la ruta ':id'
  },
  {
    path: 'form-product-detail/:id', // Ruta con un parámetro dinámico ':id' para el detalle de un producto en un formulario
    component: FormProductDetailComponent // Componente asociado a la ruta 'form-product-detail/:id'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
