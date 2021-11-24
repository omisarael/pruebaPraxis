import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
item : any;
enLocal: any;
  constructor() { }

  ngOnInit() { 
    this.item = JSON.parse(localStorage.getItem('registro'));
    console.log(this.item);
    this.enLocal = JSON.parse(localStorage.getItem('veinte'));


    let obj = this.enLocal.find(obj => obj.id == this.item.id);
    console.log(obj);

    this.getIndex(this.enLocal, this.item.id)
  }

  getIndex(enLocal, objectId) {
    var index = enLocal.map(function(e) { return e._id; }).indexOf(objectId);
    console.log(index);
    return index;
 }


}
