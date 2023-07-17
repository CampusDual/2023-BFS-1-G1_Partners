import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { DialogService, OFileInputComponent, OFormComponent, OTableComponent, OntimizeService } from 'ontimize-web-ngx';
import { AddPartnerRelationComponent } from './add-partner-relation/add-partner-relation.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  comboVisible = false;
  protected productService: OntimizeService;

  productForm: FormGroup;
  @ViewChild('formproducts', { static: false }) formProducts: OFormComponent;
  @ViewChild('partnersTable', { static: false }) public partnersTable: OTableComponent;
  @ViewChild('fileinput', { static: true }) fileInput: OFileInputComponent;
  @ViewChild('filetable', { static: true }) fileTable: OTableComponent;

  constructor(private formBuilder: FormBuilder, protected dialog: MatDialog, protected dialogService: DialogService, public injector: Injector) {
    this.productService = this.injector.get(OntimizeService);
  }

  ngOnInit() {
    // Configuración del servicio Ontimize
    const conf = this.productService.getDefaultServiceConfiguration('products');
    this.productService.configureService(conf);
  }

  getFileData() {
    if (this.formProducts) {
      return { product_id: this.formProducts.getDataValue('id') };
    } else {
      return {};
    }
  }

  onUploadFiles(event) {
    // Procesar respuesta de la subida de archivos
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
    this.fileInput.clearValue();
    this.fileTable.refresh();
  }

  actionClick(event) {
    // Realizar una consulta al servicio Ontimize para obtener un archivo específico
    this.productService.query({ id: event.id }, ['name', 'base64'], 'fileContent').subscribe(res => {
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

  onError(event) {
    // Manejar error en la subida de archivos
    if (event.status === 507) {
      this.showError(event);
    }
    this.fileInput.clearValue();
  }

  showError(event: any) {
    // Mostrar mensaje de error en un diálogo
    if (this.dialogService) {
      this.dialogService.error('Error',
        'El fichero ya existe');
    }
  }

  addPartner() {
    // Abrir un diálogo para agregar una relación de partner
    let product_id = this.formProducts.getFieldValue("id");
    this.dialog.open(AddPartnerRelationComponent, { data: { product_id: product_id, partnersTable: this.partnersTable }, disableClose: false });
  }

  onSave() {
    // Guardar datos del formulario
    if (this.productForm.valid) {
      console.log('Datos válidos, guardando en la base de datos...');
    } else {
      console.log('Datos inválidos, no se puede guardar en la base de datos.');
    }
  }
}
