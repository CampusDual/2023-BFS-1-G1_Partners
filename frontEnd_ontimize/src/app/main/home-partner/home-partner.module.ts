import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { SharedModule } from '../../shared/shared.module';
import { HomePartnerRoutingModule } from './home-partner-routing.module';
import { HomePartnerComponent } from './home-partner.component';


@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    HomePartnerRoutingModule
  ],
  declarations: [
    HomePartnerComponent
  ]
})
export class HomePartnerModule { }
