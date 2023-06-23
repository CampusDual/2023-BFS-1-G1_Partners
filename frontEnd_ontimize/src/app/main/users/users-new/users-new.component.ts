
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { OFormComponent, OListComponent, OTextInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-users-new',
  templateUrl: './users-new.component.html',
  styleUrls: ['./users-new.component.css']
})
export class UsersNewComponent implements OnInit {

  validatorsArray: ValidatorFn[] = [];

  @ViewChild('form', { static: false }) form: OFormComponent;
  @ViewChild('listProducts', { static: false }) listProducts: OListComponent;
  @ViewChild('productList', { static: false }) productList: OTextInputComponent;
  private productSended: string[] = [];





  
  constructor() {
    this.validatorsArray.push(this.passwordValidator);
  }
  ngOnInit(): void {
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

  loadProducts(event){


      if (event.oldValue === false ){

         let id = event.target.oattr.toString();
         this.productSended.push(id);
         this.productList.setValue(this.productSended.toString());

      }
      if (event.oldValue === true){

        let id = event.target.oattr.toString();
        let index = this.productSended.indexOf(id);

          if(index > -1){
            this.productSended.splice(index,1);
            this.productList.setValue(this.productSended.toString());

          }
  }
      
    

  }




}






