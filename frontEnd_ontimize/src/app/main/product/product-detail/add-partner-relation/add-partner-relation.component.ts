import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material';
import { OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-add-partner-relation',
  templateUrl: './add-partner-relation.component.html',
  styleUrls: ['./add-partner-relation.component.css']
})
export class AddPartnerRelationComponent implements OnInit {

  @ViewChild('form', { static: false }) form: OFormComponent;

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
      this.form.setFieldValues(this.data)
    }
  }

   public closeDialog() {
     this.dialogRef.close();
   }


  
}
