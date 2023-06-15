import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { DialogService, OFormComponent, OTableComponent } from 'ontimize-web-ngx';
import { AddPartnerRelationComponent } from './add-partner-relation/add-partner-relation.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  comboVisible = false;


   productForm: FormGroup;
   @ViewChild('form', { static: false }) form: OFormComponent;
   @ViewChild('partnersTable', {static: false }) public partnersTable: OTableComponent;

   constructor(private formBuilder: FormBuilder, protected dialog: MatDialog) {
    
   }
  ngOnInit() {

    this.buildForm();
    

  }
  buildForm() {
  
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      user_ids: ['', Validators.required],

    });
  }

    // showAlert(evt: any) {
    //   if (this.dialogService) {
    //     this.dialogService.alert('Añadir Partners', 'This is an amazing "Alert" dialog');
    //   }
    //  }




    addPartner(){
      let product_id = this.form.getFieldValue("id");
      this.dialog.open(AddPartnerRelationComponent,{data:{product_id:product_id, partnersTable:this.partnersTable},disableClose:false});
    }



  onSave() {
    if (this.productForm.valid) {
      console.log('Datos válidos, guardando en la base de datos...');
    } else {
      console.log('Datos inválidos, no se puede guardar en la base de datos.');
    }
  }
}
