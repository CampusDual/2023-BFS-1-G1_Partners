import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePartnerComponent } from './home-partner.component';

const routes: Routes = [
  {
    path: '',
    component: HomePartnerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePartnerRoutingModule { }
