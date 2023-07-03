import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalAreaComponent } from './personal-area-home/personal-area.component';
import { PersonalAreaDetailComponent } from './personal-area-detail/personal-area-detail.component';


const routes: Routes = [{

  path: "",
  component: PersonalAreaComponent
},

{
path: 'personal-area-detail/:id',
  component: PersonalAreaDetailComponent
}

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }