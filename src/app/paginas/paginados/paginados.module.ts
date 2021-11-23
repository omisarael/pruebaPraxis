import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginadosPageRoutingModule } from './paginados-routing.module';


import { PaginadosPage } from './paginados.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginadosPageRoutingModule,
    HttpClientModule
  ],
  declarations: [PaginadosPage]
})
export class PaginadosPageModule {}
