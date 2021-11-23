import { Component, OnInit } from '@angular/core';
import { Itemscrud } from 'src/app/clases/itemscrud';
import { CrudService } from 'src/app/servicios/crud.service';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-paginados',
  templateUrl: './paginados.page.html',
  styleUrls: ['./paginados.page.scss'],
})
export class PaginadosPage implements OnInit {
  respuestaTodos: Itemscrud[];
  enLocal: any;
  posicioToEliminar: number;

  constructor(private crudTodos: CrudService,
    public actionSheetController: ActionSheetController,
    private router: Router) { }

  ngOnInit() {
    this.aLocal();
  }

  ngAfterContentInit() {
    this.todos();
  }
  todos() {
    this.crudTodos.Todos().subscribe(
      rs => this.respuestaTodos = rs,
      er => console.log(er),
      () => this.aLocal()
    )
  }

  aLocal() {

    if (!localStorage.length) {
      const veinte = this.respuestaTodos.slice(0, 20);
      console.log(veinte);
      localStorage.setItem('veinte', JSON.stringify(veinte));
      this.enLocal = JSON.parse(localStorage.getItem('veinte'))
    }
    this.enLocal = JSON.parse(localStorage.getItem('veinte'))


  }

  borrarDeLocal(objeto) {
    //filtrar todos menos el que se indica
    let filtrar = this.enLocal.filter(function (elementos) {
      return elementos.id !== objeto.id
    })
    this.enLocal = filtrar;
  }

  editarItem() {

  }

  agregarItem() {
    this.router.navigate(['/agregar']);
  }

  async presentActionSheet(item) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Borrar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.borrarDeLocal(item);
        }
      }, {
        text: 'Editar',
        icon: 'share',
        handler: () => {

        }

      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}


