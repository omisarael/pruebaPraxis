import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { ActivatedRoute, ParamMap, Router } from '@angular/router'; // Importar


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;
  enLocal: any;

  constructor(public formBuilder: FormBuilder, private router:Router) {
    this.enLocal = JSON.parse(localStorage.getItem('veinte'));
    console.log(this.enLocal);
   }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      userId: new FormControl('1', Validators.compose([
        Validators.required
      ])),
      id: new FormControl(''),
      title: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      completed: new FormControl('', Validators.compose([
        Validators.required,
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
      this.enLocal.unshift(this.ionicForm.value)
      console.log(this.enLocal);
      this.enLocal = localStorage.setItem('veinte', JSON.stringify(this.enLocal))
      this.router.navigate(['/paginados']);

    }
  }

}
