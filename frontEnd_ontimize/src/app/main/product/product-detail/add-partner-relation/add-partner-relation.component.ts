import { Component, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material';
import { OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-add-partner-relation',
  templateUrl: './add-partner-relation.component.html',
  styleUrls: ['./add-partner-relation.component.css']
})
export class AddPartnerRelationComponent implements OnInit {

  @ViewChild('form', { static: false }) form: OFormComponent;
  @Output() dialogClosed: EventEmitter<void> = new EventEmitter<void>();

  public dialog: MatDialogModule;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddPartnerRelationComponent>
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
    this.dialogRef.close();
    this.dialogClosed.emit(); // Emit an event when the dialog is closed
  }
}
