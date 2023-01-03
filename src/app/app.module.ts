import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//why mine doesnt have import app routingmodule from .app-routing

import { AppComponent } from './app.component';
import { CabeceraComponent } from './nuevo/cabecera/cabecera.component';
import { ContenidoComponent } from './nuevo/contenido/contenido.component';
import { NuevoModule } from './nuevo/nuevo.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NuevoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//@ <-- se lee como decorador, @NgModule es un decorador, tmb lo es @Component
