import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartnersComponent } from './partners/partner-home/partners.component';
import { AdminNewComponent } from './admins/admin-new/admin-new.component';
import { PartnerNewComponent } from './partners/partner-new/partner-new.component';
import { AdminsComponent } from './admins/admin-home/admins.component';
import { PartnerDetailComponent } from './partners/partner-detail/partner-detail.component';
import { AdminDetailComponent } from './admins/admin-detail/admin-detail.component';

const routes: Routes = [{

  path : "partners",
  component: PartnersComponent
},
{
  path: "partners/new",
  component: PartnerNewComponent
},
{
  path: "partners/:id",
  component: PartnerDetailComponent
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
  path: "admins/:id",
  component: AdminDetailComponent
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }