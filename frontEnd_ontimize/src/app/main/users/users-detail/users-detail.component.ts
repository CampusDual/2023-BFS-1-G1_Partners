import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {

  constructor() { }


  passwordValidator(control: AbstractControl) {
    const password = control.get('password').value;
    const passwordConfirm = control.get('password-confirm').value;
    if (!/(?=.*[0-9])(?=.*[A-Za-z])(?=.*\W).{6,}/.test(password)) {
      return { passwordRequirements: true };
    }
    if (password !== passwordConfirm) {
      return { passwordMatch: true };
    }
    return null;
  }

  ngOnInit() {
  }

}
