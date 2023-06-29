import { Component, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material';
import { OFormComponent, OTableComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-add-product-relation',
  templateUrl: './add-product-relation.component.html',
  styleUrls: ['./add-product-relation.component.css']
})
export class AddProductRelationComponent implements OnInit {

  @ViewChild('form', { static: false }) form: OFormComponent;
  @Output() dialogClosed: EventEmitter<void> = new EventEmitter<void>();


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddProductRelationComponent>
  ) { }

  ngOnInit() {
  }

  public forceInsertMode(event: any) {
    if (event != OFormComponent.Mode().INSERT) {
      this.form.setInsertMode();
      this.form.setFieldValues(this.data);
    }
  }

  public closeDialog(event: any) {
    let tableProducts: OTableComponent = this.data.tableProducts;
    tableProducts.refresh();
    this.dialogRef.close();
    this.dialogClosed.emit();
  }
}
