import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { PersonalRoutingModule } from './personal-area-routing.module';
import { PersonalAreaDetailComponent } from './personal-area-detail/personal-area-detail.component';
import { PersonalAreaComponent } from './personal-area-home/personal-area.component';


@NgModule({
  declarations: [
    PersonalAreaComponent,
    PersonalAreaDetailComponent
  ],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    OntimizeWebModule,
  ]
})
export class PersonalAreaModule { }
