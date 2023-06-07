import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {

  userForm: FormGroup;



  validatorsArray: ValidatorFn[] = [];

  @ViewChild('form', { static: false }) form: OFormComponent;




  constructor(private formBuilder: FormBuilder) {

    this.validatorsArray.push(this.passwordMatchValidator);

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



  public async passwordValidator(){

    const password = this.form.formGroup.get('password').value;
    const passwordConfirm = this.form.formGroup.get('passwordConfirm').value;


    
    
    if (password !== passwordConfirm && password ===!/(?=.*[0-9])(?=.*[A-Za-z])(?=.*\W).{6,}/) {
      
      alert("Las contraseñas no coinciden");
     
      
    }else{
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






  onSave() {
    if (this.userForm.valid) {
      console.log('Datos válidos, guardando en la base de datos...');
    } else {
      console.log('Datos inválidos, no se puede guardar en la base de datos.');
    }
  }
}
