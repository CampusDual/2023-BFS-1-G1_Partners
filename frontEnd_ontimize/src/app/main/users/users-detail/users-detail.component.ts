import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { OFormComponent, OListComponent, OTextInputComponent } from 'ontimize-web-ngx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {

  userForm: FormGroup;
  
  validatorsArray: ValidatorFn[] = [];

  @ViewChild('userForm', { static: false }) form: OFormComponent;
  @ViewChild('listProducts', { static: false }) listProducts: OListComponent;
  @ViewChild('productList', { static: false }) productList: OTextInputComponent;
  private productSended: string[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router) {

    this.validatorsArray.push(this.passwordValidator);

   }

  ngOnInit() {
    this.buildForm();
    this.watchPasswordChanges();
  }

  buildForm() {
    const passwordValidatorFn = Validators.pattern(/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z\d]).{6,}$/);
  
    this.userForm = this.formBuilder.group({
      user_: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.email],
      nif: ['', Validators.required],
      password: ['', [Validators.required, passwordValidatorFn]],
      'passwordConfirm': ['', Validators.required]
    });
  }

  watchPasswordChanges() {
    const passwordControl = this.userForm.get('password');
    const confirmPasswordControl = this.userForm.get('password-confirm');

    passwordControl.valueChanges.subscribe(() => {
      this.userForm.get('password-confirm').updateValueAndValidity();
    });

    confirmPasswordControl.valueChanges.subscribe(() => {
      this.userForm.get('password').updateValueAndValidity();
    });
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





  onSave() {
    if (this.userForm.valid) {
     
      this.router.navigate(['/users-home']);
    } else {
      console.log('Datos inválidos, no se puede guardar en la base de datos.');
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
