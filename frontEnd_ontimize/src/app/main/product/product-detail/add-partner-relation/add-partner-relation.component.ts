import { Component, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material';
import { OFormComponent, OTableComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-add-partner-relation',
  templateUrl: './add-partner-relation.component.html',
  styleUrls: ['./add-partner-relation.component.css']
})
export class AddPartnerRelationComponent implements OnInit {

  @ViewChild('form', { static: false }) form: OFormComponent;
  @Output() dialogClosed: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddPartnerRelationComponent>
  ) { }

  ngOnInit() {
  }

  // Método para forzar el modo de inserción en el formulario
  public forceInsertMode(event: any) {
    if (event != OFormComponent.Mode().INSERT) {
      this.form.setInsertMode();
      this.form.setFieldValues(this.data);
    }
  }

  // Método para cerrar el diálogo y emitir el evento de diálogo cerrado
  public closeDialog(event: any) {
    let table: OTableComponent = this.data.partnersTable;
    table.refresh();
    this.dialogRef.close();
    this.dialogClosed.emit();
  }
}
