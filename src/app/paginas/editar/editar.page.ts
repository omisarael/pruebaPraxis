import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Router } from '@angular/router'; // Importar
import { NavController } from '@ionic/angular';
import { Itemscrud } from 'src/app/clases/itemscrud'; 


@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  item: any;
  enLocal: Itemscrud[];
  indice: number;
  itemAeditar;

  
  constructor(public formBuilder: FormBuilder, private router: Router, public navctrl: NavController) { }

  ngOnInit() {
    this.item = JSON.parse(localStorage.getItem('registro'));
    //console.log(this.item);
    this.enLocal = JSON.parse(localStorage.getItem('veinte'));
    this.getIndex();

  }

  getIndex() {
    let buscar = this.item.title;
    this.indice = this.enLocal.findIndex(resultado => resultado.title === buscar);
    console.log(this.indice);
    this.itemAeditar = [this.enLocal[this.indice]];
    console.log(this.itemAeditar)
  }


  submitForm() {
      
      this.enLocal.splice(this.indice, this.itemAeditar);
      console.log(this.enLocal);
      localStorage.setItem('veinte', JSON.stringify(this.enLocal))
      this.router.navigate(['/paginados']);     
    
  }


}
