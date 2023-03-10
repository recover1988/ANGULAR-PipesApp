import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// Modulo personalizado
// import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar el local de la App
import localeEs from "@angular/common/locales/es-BO";
import localeFr from "@angular/common/locales/fr";
import { registerLocaleData } from "@angular/common";

registerLocaleData(localeEs);
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // PrimeNgModule,
    BrowserModule,
    AppRouterModule,
    BrowserAnimationsModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-BO'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
