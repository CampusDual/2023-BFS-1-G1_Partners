import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalAreaComponent } from './personal-area-home/personal-area.component';

const routes: Routes = [{


  path: "",
  component: PersonalAreaComponent
},




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }