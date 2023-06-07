
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
    this.validatorsArray.push(this.passwordMatchValidator);



    
  }




  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public async passwordValidator() {
    const password = this.form.formGroup.get('password').value;
    const passwordConfirm = this.form.formGroup.get('passwordConfirm').value;
  
    if (password !== passwordConfirm) {
      alert("Las contraseñas no coinciden");
    } else if (!/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z\d]).{6,}$/.test(password)) {
      alert("La contraseña debe tener al menos 6 dígitos, 1 número y 1 símbolo");
    } else {
      this.form.insert();
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






