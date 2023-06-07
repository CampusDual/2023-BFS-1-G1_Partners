
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

  
  public async passwordValidator(){

    const password = this.form.formGroup.get('password').value;
    const passwordConfirm = this.form.formGroup.get('password-confirm').value;


    if (!/(?=.*[0-9])(?=.*[A-Za-z])(?=.*\W).{6,}/.test(password)) {

        return { passwordRequirements: true };

    }if (password !== passwordConfirm) {
      // No es igual
      console.log('pass no igual');
      // this.error = false;
      alert("Las contraseñas no coinciden");
     
      
    }else{
      this.form.insert();
   
    }
    }


  

  public rolesArray = [{
    name: 'Admin',
    id:'1'
  }, {
    name: 'Partner',
    id:'2'
  }];










  // passwordValidator(control: AbstractControl) {
  //   const password = control.get('password').value;
  //   const passwordConfirm = control.get('password-confirm').value;
  //   if (!/(?=.*[0-9])(?=.*[A-Za-z])(?=.*\W).{6,}/.test(password)) {
  //     return { passwordRequirements: true };
  //   }
  //   if (password !== passwordConfirm) {
  //     return { passwordMatch: true };
  //   }
  //   return null;
  // }


}


















// import { Component, OnInit } from '@angular/core';


// @Component({
//   selector: 'app-users-new',
//   templateUrl: './users-new.component.html',
//   styleUrls: ['./users-new.component.css']
// })
// export class UsersNewComponent implements OnInit {



//   public countriesArray = [{
//     countryCode: 1,
//     countryText: 'Spain'
//   }, {
//     countryCode: 2,
//     countryText: 'United States'
//   }, {
//     countryCode: 3,
//     countryText: 'United Kingdom'
//   }, {
//     countryCode: 4,
//     countryText: 'Germany'
//   }, {
//     countryCode: 5,
//     countryText: 'Portugal'
//   }, {
//     countryCode: 6,
//     countryText: 'France'
//   }, {
//     countryCode: 7,
//     countryText: 'Italy'
//   }, {
//     countryCode: 8,
//     countryText: 'Belgium'
//   }, {
//     countryCode: 9,
//     countryText: 'Greece'
//   }, {
//     countryCode: 10,
//     countryText: 'Finland'
//   }];

//   public selectedCountryCode = 2;




//   constructor() { }

//   ngOnInit() {}

// //   public roles = [{
// //     name:'admin'
// //   },{
// //     name: 'partner'
// //   }];
// //   // public roles: rolType [] = [{name:'admin'},{name:'partner'}]
// //   public rolValue : string;
// // }




// // export class rolType{

// //   name: string;
// //
//  }