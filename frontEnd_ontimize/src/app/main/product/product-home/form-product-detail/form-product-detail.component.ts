import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { DialogService, OFileInputComponent, OFormComponent, OTableComponent, OntimizeService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-form-product-detail',
  templateUrl: './form-product-detail.component.html',
  styleUrls: ['./form-product-detail.component.css']
})
export class FormProductDetailComponent implements OnInit {

  comboVisible = false;
  protected productService: OntimizeService;

   productForm: FormGroup;
   @ViewChild('formproducts', { static: false }) formProducts: OFormComponent;
   @ViewChild('partnersTable', {static: false }) public partnersTable: OTableComponent;
   @ViewChild('fileinput',{static:true}) fileInput:OFileInputComponent;
   @ViewChild('filetable',{static:true}) fileTable:OTableComponent;

   constructor(private formBuilder: FormBuilder, protected dialog: MatDialog,protected dialogService: DialogService,public injector: Injector) {
    this.productService = this.injector.get(OntimizeService);
   }
   
  ngOnInit() {
    const conf = this.productService.getDefaultServiceConfiguration('products');
    this.productService.configureService(conf);
    this.configureProductService();
  }

    getFileData(){
      if(this.formProducts){
      return {product_id:this.formProducts.getDataValue('id')};
    }else{
      return {};
    }
    }
  
    downloadZip(){
      let files = this.fileTable.getSelectedItems();
      let documentsId = [];
      files.forEach(elemento=>{
        documentsId.push(elemento.id);
        
      })
      this.productService.query({ids:documentsId}, ['name','base64'],'filesZip').subscribe(res =>{
        if (res.data) {
          let filename = res.data.name;
          let base64 = res.data.base64;
          const src = `data:text/csv;base64,${base64}`;
          const link = document.createElement("a");
          link.href = src;
          link.download = filename;
          link.click();
          link.remove();
        }
      });
    }
    
    configureProductService(){
      const confDocuments = this.productService.getDefaultServiceConfiguration('products');
      this.productService.configureService(confDocuments);
    }
  
    actionClick(event){
      this.productService.query({id:event.id}, ['name','base64'], 'fileContent').subscribe(res => {
        if (res.data && res.data.length) {
          let filename = res.data[0].name;
          let base64 = res.data[0].base64;
          const src = `data:text/csv;base64,${base64}`;
          const link = document.createElement("a");
          link.href = src;
          link.download = filename;
          link.click();
          link.remove();
        }
      });
      
    }
  
    onError(event){
      if(event.status === 507){
        this.showError(event);
      }
      this.fileInput.clearValue();
    }
  
    showError(event: any) {
      if (this.dialogService) {
      this.dialogService.error('Error',
          'El fichero ya existe');
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



