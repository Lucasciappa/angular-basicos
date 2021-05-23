import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';






@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: "",
    poder: 0
  }




  constructor(private dbzService: DbzService) { }

  // agregar() {
  //   if (this.nuevo.nombre.trim().length === 0){ return; }
  //   console.log(this.nuevo);

  //   this.personajes.push(this.nuevo);
  //   this.nuevo = {
  //     nombre: "",
  //     poder: 0
  //   }
  //   console.log(this.personajes)
  // }
}
