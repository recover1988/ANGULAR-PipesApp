import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  nombre: string = 'Fernando';
  genero: string = 'masculino';
  invitacionMapa = {
    masculino: "invitarlo",
    femenino: 'invitarla',
  }
}
