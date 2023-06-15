
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-users-new',
  templateUrl: './users-new.component.html',
  styleUrls: ['./users-new.component.css']
})
export class UsersNewComponent implements OnInit {

  validatorsArray: ValidatorFn[] = [];

  @ViewChild('form', { static: false }) form: OFormComponent;

  
  constructor() {
    this.validatorsArray.push(this.passwordValidator);
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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



  











  
  public rolesArray = [{
    name: 'Admin',
    id:'1'
  }, {
    name: 'Partner',
    id:'2'
  }];


}






