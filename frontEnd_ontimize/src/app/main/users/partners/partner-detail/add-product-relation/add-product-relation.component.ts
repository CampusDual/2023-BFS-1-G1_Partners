import { Component, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material';
import { OFormComponent, OTableComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-add-product-relation', // Selector del componente
  templateUrl: './add-product-relation.component.html', // Ruta de la plantilla HTML del componente
  styleUrls: ['./add-product-relation.component.css'] // Rutas de los archivos de estilos CSS del componente
})
export class AddProductRelationComponent implements OnInit {

  @ViewChild('form', { static: false }) form: OFormComponent; // Referencia al componente OFormComponent
  @Output() dialogClosed: EventEmitter<void> = new EventEmitter<void>(); // Evento de cierre del diálogo

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, // Datos inyectados al diálogo
    private dialogRef: MatDialogRef<AddProductRelationComponent> // Referencia al diálogo
  ) { }

  ngOnInit() {
  }

  // Forzar el modo de inserción en el formulario
  public forceInsertMode(event: any) {
    if (event != OFormComponent.Mode().INSERT) {
      this.form.setInsertMode();
      this.form.setFieldValues(this.data);
    }
  }

  // Cerrar el diálogo
  public closeDialog(event: any) {
    let tableProducts: OTableComponent = this.data.tableProducts;
    tableProducts.refresh();
    this.dialogRef.close();
    this.dialogClosed.emit();
  }
}
