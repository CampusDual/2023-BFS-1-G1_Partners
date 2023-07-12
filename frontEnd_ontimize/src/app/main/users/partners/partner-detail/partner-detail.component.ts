import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { DialogService, OFileInputComponent, OFormComponent, OTableComponent, OTextareaInputComponent, OntimizeService } from 'ontimize-web-ngx';
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
  @ViewChild('tableProducts', { static: false }) public tableProducts: OTableComponent;
  @ViewChild('tableDocuments', { static: false }) public tableDocuments: OTableComponent;
  @ViewChild('fileinput', { static: true }) fileInput: OFileInputComponent;
  @ViewChild('description', { static: false }) description: OTextareaInputComponent;

  fileExists: boolean = false;

  constructor(private formBuilder: FormBuilder, protected dialog: MatDialog, protected dialogService: DialogService, public injector: Injector) {
    this.productService = this.injector.get(OntimizeService);
  }

  ngOnInit() {
  }

  // Método para cuando se realiza la subida de archivos
  onFileUpload() {
    this.fileExists = true;
  }

  // Método para añadir productos
  addProducts() {
    let user_id = this.formUser.getDataValue("user_");
    this.dialog.open(AddProductRelationComponent, { data: { user_id: user_id, tableProducts: this.tableProducts }, disableClose: false });
  }

  // Método para obtener los datos del archivo
  getFileData() {
    if (this.formUser) {
      return { user_id: this.formUser.getDataValue('user_') };
    } else {
      return {};
    }
  }

  // Método para manejar la respuesta de la subida de archivos
  onUploadFiles(event) {
    if (event.response) {
      let data = event.response.data;
      let errors: string[] = data.filter(element => element.status != "OK" && element.status != "ALREADY_EXIST").map(element => { return element.name });
      let oks: string[] = data.filter(element => element.status === "OK").map(element => { return element.name });
      let exists: string[] = data.filter(element => element.status === "ALREADY_EXIST").map(element => { return element.name });
      let message: string = '<p><b>Resultado de la subida de documentos:</b></p>';
      if (oks.length > 0) {
        message += '<p>Ficheros subidos correctamente: <ul><li>' + oks.join("</li><li>") + "</li></ul></p>";
      }
      if (exists.length > 0) {
        message += '<p>Ficheros que no se han subido por que ya existen: <ul><li>' + exists.join("</li><li>") + "</li></ul></p>";
      }
      if (errors.length > 0) {
        message += '<p>Ficheros que generaron un error en la subida: <ul><li>' + errors.join("</li><li>") + "</li></ul></p>";
      }
      if (this.dialogService) {
        if (errors.length === 0) {
          this.dialogService.info('Resultado', message);
        } else {
          this.dialogService.error('Resultado', message);
        }
      }
    }

    const files = event.files;

    this.fileInput.clearValue();
    this.tableDocuments.refresh();
  }

}
