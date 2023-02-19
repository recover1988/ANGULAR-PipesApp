import { NgModule } from '@angular/core';

// PrimeNg --> ordenar de manear alfabetica
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
@NgModule({
  exports: [
    BrowserModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    RippleModule,
  ]
})
export class PrimeNgModule { }
