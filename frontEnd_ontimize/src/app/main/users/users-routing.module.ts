import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartnersComponent } from './partners/partners.component';
import { AdminsComponent } from './admins/admins.component';
import { AdminNewComponent } from './admins/admin-new/admin-new.component';
import { PartnerNewComponent } from './partners/partner-new/partner-new.component';

const routes: Routes = [{
  path : "partners",
  component: PartnersComponent
},
{
  path: "admins",
  component: AdminsComponent
},
{
  path: "admins/new",
  component: AdminNewComponent
},
{
  path: "partners/new",
  component: PartnerNewComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }