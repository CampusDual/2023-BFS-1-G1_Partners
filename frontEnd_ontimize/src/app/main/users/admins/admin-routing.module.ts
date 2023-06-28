import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminsComponent } from './admin-home/admins.component';
import { AdminNewComponent } from './admin-new/admin-new.component';

import { AdmindComponent } from './admind/admind.component';

const routes: Routes = [{


  path: "admins",
  component: AdminsComponent
},
{
  path: "admins/new",
  component: AdminNewComponent
},
{
  path: "admins/:user_",
  component: AdmindComponent
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }