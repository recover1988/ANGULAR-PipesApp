import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Fernando';
  genero: string = 'masculino';
  invitacionMapa = {
    masculino: "invitarlo",
    femenino: 'invitarla',
  };

  //i18nPlural
  clientes: string[] = ['Maria', 'Andres', 'Juan', 'Camilo'];

  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  };

  cambiarCliente() {
    this.nombre = this.nombre === 'Fernando' ? 'Susana' : 'Fernando';
    this.genero = this.genero === 'masculino' ? 'femenino' : 'masculino';

  };
  borrarCliente() {
    this.clientes.pop();
  };

  // KeyValue Pipe
  persona = {
    nombre: 'Eric',
    edad: 34,
    direccion: 'Córdoba, Argentina'
  }

  // Json Pipe

  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Batman',
      vuela: false,
    },
    {
      nombre: 'Wonderwoman',
      vuela: true,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },
  ];


  // Async Pipe
  miObservable = interval(5000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de Promesas')
    }, 3500)
  })
}
