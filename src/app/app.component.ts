import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = 'eric denis';
  valor: number = 12345;
  obj = {
    nombre: 'Eric'
  };

  mostrarNombre() {
    console.log(this.nombre)
    console.log(this.valor)
    console.log(this.obj)
  }

}
