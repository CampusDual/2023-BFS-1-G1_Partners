import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, ValidatorFn } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { OntimizeService, OFormComponent, DialogService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  validatorsArray: ValidatorFn[] = [];
  isPasswordModified: boolean = false;
  
  @ViewChild('formUser', { static: false }) formUser: OFormComponent;

  constructor(private formBuilder: FormBuilder, protected dialog: MatDialog,protected dialogService: DialogService,public injector: Injector, private router: Router) {
    this.validatorsArray.push(this.passwordValidator);
    
  }

  ngOnInit() {
  }

  onPasswordInput() {
    this.isPasswordModified = true;
  }

  passwordValidator(control: any): any {
    try {
      const password = control.parent ? control.parent.controls['password'].value : null;
      const passwordConfirm = control.value;
  
      if (password !== passwordConfirm) {
        return { passwordNotMatched: true };
      } else if (!/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z\d]).{6,}$/.test(password)) {
        return { passwordNotSize: true };
      } else {
        return null;
      }
    } catch (e) {
      return null;
    }
  }
  
  passwordMatchValidator(control: any): any {
  
    try {
  
      const password = control.parent ? control.parent.controls['password'].value : null
      const passwordConfirm = control.value
  
      return password === passwordConfirm? null : { passwordNotMatched: true };
  
    }catch(e){
  
    }

  }

  onSave(event) {
    this.router.navigate(['/main/product-home/']);
  }

}
