import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
    this.watchPasswordChanges();
  }

  buildForm() {
    this.userForm = this.formBuilder.group({
      user_: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.email],
      nif: ['', Validators.required],
      password: ['', Validators.required],
      'password-confirm': ['', Validators.required]
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



  passwordValidator(control: AbstractControl) {
    const password = control.get('password').value;
    const passwordConfirm = control.get('password-confirm').value;

    if (!/(?=.*[0-9])(?=.*[A-Za-z])(?=.*\W).{6,}/.test(password)) {
      return { passwordRequirements: true };
    }

    if (password == passwordConfirm) {
      return { passwordMatch: true };
    }

    return null;
  }




  onSave() {
    if (this.userForm.valid) {
      console.log('Datos válidos, guardando en la base de datos...');
    } else {
      console.log('Datos inválidos, no se puede guardar en la base de datos.');
    }
  }
}
