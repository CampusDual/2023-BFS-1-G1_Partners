import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { DialogService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {


   productForm: FormGroup;
   @ViewChild('form', { static: false }) form: OFormComponent;
  tableData: any[];

   constructor(private formBuilder: FormBuilder, protected dialogService: DialogService) {
    
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

    showAlert(evt: any) {
      if (this.dialogService) {
        this.dialogService.alert('Añadir Partners', 'This is an amazing "Alert" dialog');
      }
    }


  onSave() {
    if (this.productForm.valid) {
      console.log('Datos válidos, guardando en la base de datos...');
    } else {
      console.log('Datos inválidos, no se puede guardar en la base de datos.');
    }
  }
}
