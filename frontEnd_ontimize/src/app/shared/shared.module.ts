import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { OFileManagerModule } from 'ontimize-web-ngx-filemanager';


@NgModule({
  imports: [
    OntimizeWebModule,
    OFileManagerModule
  ],
  declarations: [
  ],
  exports: [
    CommonModule
  ]
})
export class SharedModule { }

