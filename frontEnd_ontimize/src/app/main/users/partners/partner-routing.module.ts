import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartnersComponent } from './partner-home/partners.component';
import { PartnerNewComponent } from './partner-new/partner-new.component';
import { PartnerDetailComponent } from './partner-detail/partner-detail.component';

const routes: Routes = [{

  path : "partners",
  component: PartnersComponent
},
{
  path: "partners/new",
  component: PartnerNewComponent
},
{
  path: "partners/:user_",
  component: PartnerDetailComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnerRoutingModule { }





