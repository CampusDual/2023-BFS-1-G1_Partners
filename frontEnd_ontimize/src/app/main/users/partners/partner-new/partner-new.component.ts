import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { OFormComponent, OListComponent, OTextInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-partner-new',
  templateUrl: './partner-new.component.html',
  styleUrls: ['./partner-new.component.css']
})
export class PartnerNewComponent implements OnInit {

  validatorsArray: ValidatorFn[] = []; // Array de funciones validadoras

  @ViewChild('form', { static: false }) form: OFormComponent; // Referencia al componente OFormComponent
  @ViewChild('productList', { static: false }) productList: OTextInputComponent; // Referencia al componente OTextInputComponent

  private productSended: string[] = []; // Array de productos enviados

  constructor() {
    this.validatorsArray.push(this.passwordValidator); // Agrega la función validadora de contraseña al array de validadores
  }

  ngOnInit(): void {
    // Lógica de inicialización en el ciclo de vida ngOnInit
  }

  passwordValidator(control: any): any {
    try {
      const password = control.parent ? control.parent.controls['password'].value : null; // Obtiene el valor del campo de contraseña
      const passwordConfirm = control.value; // Obtiene el valor del campo de confirmación de contraseña

      if (password !== passwordConfirm) {
        return { passwordNotMatched: true }; // Devuelve un error si las contraseñas no coinciden
      } else if (!/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z\d]).{6,}$/.test(password)) {
        return { passwordNotSize: true }; // Devuelve un error si la contraseña no cumple con los requisitos de longitud y composición
      } else {
        return null; // Si no hay errores, devuelve null
      }
    } catch (e) {
      return null; // Manejo de excepciones
    }
  }

  passwordMatchValidator(control: any): any {
    try {
      const password = control.parent ? control.parent.controls['password'].value : null; // Obtiene el valor del campo de contraseña
      const passwordConfirm = control.value; // Obtiene el valor del campo de confirmación de contraseña

      return password === passwordConfirm ? null : { passwordNotMatched: true }; // Devuelve un error si las contraseñas no coinciden

    } catch (e) {
      // Manejo de excepciones
    }
  }

  loadProducts(event) {
    if (event.type === 0) {
      // Verifica si el evento es de tipo cambio

      if (event.oldValue === false) {
        // Verifica si el valor anterior del evento es falso

        let id = event.target.oattr.toString(); // Obtiene el atributo del evento como una cadena
        this.productSended.push(id); // Agrega el id del producto al array de productos enviados
        this.productList.setValue(this.productSended.toString()); // Establece el valor del componente OTextInput al array de productos enviados como una cadena

      }
      if (event.oldValue === true) {
        // Verifica si el valor anterior del evento es verdadero

        let id = event.target.oattr.toString(); // Obtiene el atributo del evento como una cadena
        let index = this.productSended.indexOf(id); // Obtiene el índice del id en el array de productos enviados

        if (index > -1) {
          this.productSended.splice(index, 1); // Elimina el id del producto del array de productos enviados
          this.productList.setValue(this.productSended.toString()); // Establece el valor del componente OTextInput al array de productos enviados como una cadena
        }
      }
    }
  }

  public reviewMatches(event: Event) {
    this.form.formGroup.controls['passwordConfirm'].updateValueAndValidity(); // Actualiza la validez del campo de confirmación de contraseña
    this.form.formGroup.get['passwordConfirm'].markAsTouched(); // Marca el campo de confirmación de contraseña como tocado
  }
}
