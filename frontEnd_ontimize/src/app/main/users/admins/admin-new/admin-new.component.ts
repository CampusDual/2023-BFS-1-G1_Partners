import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { OFormComponent, OListComponent, OTextInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-admin-new', // Selector del componente
  templateUrl: './admin-new.component.html', // Ruta de la plantilla HTML del componente
  styleUrls: ['./admin-new.component.css'] // Rutas de los archivos de estilos CSS del componente
})
export class AdminNewComponent implements OnInit {

  validatorsArray: ValidatorFn[] = []; // Array de validadores

  @ViewChild('form', { static: false }) form: OFormComponent; // Referencia al componente OFormComponent
  @ViewChild('listProducts', { static: false }) listProducts: OListComponent; // Referencia al componente OListComponent
  @ViewChild('productList', { static: false }) productList: OTextInputComponent; // Referencia al componente OTextInputComponent
  @ViewChild('rolAdmin', { static: false }) rolAdmin: OTextInputComponent; // Referencia al componente OTextInputComponent
  private productSended: string[] = []; // Array de productos enviados

  constructor() {
    this.validatorsArray.push(this.passwordValidator); // Agregar validador personalizado al array de validadores
  }

  ngOnInit(): void {
  }

  // Validador de contraseña
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

  // Validador de coincidencia de contraseña
  passwordMatchValidator(control: any): any {
    try {
      const password = control.parent ? control.parent.controls['password'].value : null;
      const passwordConfirm = control.value;

      return password === passwordConfirm ? null : { passwordNotMatched: true };
    } catch (e) {
      // Manejar la excepción
    }
  }

  // Cargar productos
  loadProducts(event) {
    if (event.oldValue === false) {
      let id = event.target.oattr.toString();
      this.productSended.push(id);
      this.productList.setValue(this.productSended.toString());
    }
    if (event.oldValue === true) {
      let id = event.target.oattr.toString();
      let index = this.productSended.indexOf(id);

      if (index > -1) {
        this.productSended.splice(index, 1);
        this.productList.setValue(this.productSended.toString());
      }
    }
  }

  // Cargar rol
  loadRol(event) {
    this.rolAdmin.setValue(1);
  }

  // Revisar coincidencia de contraseñas
  public reviewMatches(event: Event) {
    this.form.formGroup.controls['passwordConfirm'].updateValueAndValidity();
    this.form.formGroup.get['passwordConfirm'].markAsTouched();
  }
}
