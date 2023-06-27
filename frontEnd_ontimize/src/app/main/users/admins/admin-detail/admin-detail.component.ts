import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { OFormComponent, OListComponent, OTextInputComponent } from 'ontimize-web-ngx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css']
})
export class AdminDetailComponent implements OnInit {

  adminForm: FormGroup;
  
  validatorsArray: ValidatorFn[] = [];

  @ViewChild('adminForm', { static: false }) form: OFormComponent;


  constructor(private formBuilder: FormBuilder, private router: Router) {

    this.validatorsArray.push(this.passwordValidator);

   }

  ngOnInit() {
    this.buildForm();
    this.watchPasswordChanges();
  }

  buildForm() {
    const passwordValidatorFn = Validators.pattern(/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z\d]).{6,}$/);
  
    this.adminForm = this.formBuilder.group({
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
    const passwordControl = this.adminForm.get('password');
    const confirmPasswordControl = this.adminForm.get('password-confirm');

    passwordControl.valueChanges.subscribe(() => {
      this.adminForm.get('password-confirm').updateValueAndValidity();
    });

    confirmPasswordControl.valueChanges.subscribe(() => {
      this.adminForm.get('password').updateValueAndValidity();
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



  onSave() {
    if (this.adminForm.valid) {
     
      this.router.navigate(['/admins']);
    } else {
      console.log('Datos inválidos, no se puede guardar en la base de datos.');
    }
  }


}
