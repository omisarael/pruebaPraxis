import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {
    static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
          if (!control.value) {
            // si el control esta vacio retorna error
            return null;
          }
      
          // prueba el valor del control con la expresion que busca
          const valid = regex.test(control.value);
      
          // si es verdadero no devuelve error
          return valid ? null : error;
        };
      }

}
