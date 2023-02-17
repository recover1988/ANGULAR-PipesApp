import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = 'eric denis';
  valor: number = 12345;

  mostrarNombre() {
    console.log(this.nombre)
  }

}
