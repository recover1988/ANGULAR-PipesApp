import { NgModule } from '@angular/core';

// PrimeNg --> ordenar de manear alfabetica
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';


@NgModule({
  exports: [
    ButtonModule,
    CardModule
  ]
})
export class PrimeNgModule { }
