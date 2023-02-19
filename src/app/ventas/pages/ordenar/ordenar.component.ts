import { Component } from '@angular/core';
import { Color, Heroe } from '../../interface/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {
  enMayusculas: boolean = false;
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: true,
      color: Color.negro
    },
    {
      nombre: 'Flash',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Aquaman',
      vuela: true,
      color: Color.amarillo
    },
    {
      nombre: 'Green Lanter',
      vuela: true,
      color: Color.verde
    },
  ]
  cambiar() {
    this.enMayusculas = !this.enMayusculas
  }
}
