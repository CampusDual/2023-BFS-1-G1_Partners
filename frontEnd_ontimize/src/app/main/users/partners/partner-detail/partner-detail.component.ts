import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { DialogService, OFormComponent, OTableComponent, OntimizeService } from 'ontimize-web-ngx';
import { AddProductRelationComponent } from './add-product-relation/add-product-relation.component';

@Component({
  selector: 'app-partner-detail',
  templateUrl: './partner-detail.component.html',
  styleUrls: ['./partner-detail.component.css']
})
export class PartnerDetailComponent implements OnInit {

  protected productService: OntimizeService;

   productForm: FormGroup;
   @ViewChild('formUser', { static: false }) formUser: OFormComponent;
   @ViewChild('tableProducts', {static: false }) public tableProducts: OTableComponent;

   constructor(private formBuilder: FormBuilder, protected dialog: MatDialog,protected dialogService: DialogService,public injector: Injector) {
    this.productService = this.injector.get(OntimizeService);
   }

  ngOnInit() {
  }


  addProducts(){
    let user_id = this.formUser.getDataValue("user_");
    this.dialog.open(AddProductRelationComponent,{data:{user_id:user_id, tableProducts:this.tableProducts},disableClose:false});
  }

  addDocuments(){
    let user_id = this.formUser.getDataValue("user_");
    this.dialog.open(AddProductRelationComponent,{data:{user_id:user_id, tableProducts:this.tableProducts},disableClose:false});
  }


}

