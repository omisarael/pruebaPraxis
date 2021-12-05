import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  _data: any={}

  
  public get data(){
    return this._data;
  }

  public set data(data) {
    this._data = data;
  }
  

  constructor() { }
}
