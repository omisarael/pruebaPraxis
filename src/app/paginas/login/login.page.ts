import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { CustomValidators } from '../../clases/custom-validators';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  ionicForm: FormGroup;
  isSubmitted = false;

  constructor(public formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {

    this.ionicForm = this.formBuilder.group({
      // name: ['', [Validators.required, Validators.minLength(2)]],
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ])),
      password: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.minLength(6),
        CustomValidators.patternValidator(/\d/, {hasNumber: true}),
        CustomValidators.patternValidator(/[A-Z]/, {hasCapitalCase: true}),
        CustomValidators.patternValidator(/[a-z]/, {hasSmallCase:true}),
        CustomValidators.patternValidator( /\./,{ hasSpecialCharactersPunto: true }),
        CustomValidators.patternValidator( /\_/,{ hasSpecialCharactersGuionB: true })
      ])),
    })
  }


  get errores() {
    //console.log(this.ionicForm.controls);
    return this.ionicForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('proveer los valores requeridos')
      return false
    } else {
      console.log(this.ionicForm.value);
      this.router.navigate(['/paginados']);

    }
  }



}
