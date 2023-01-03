import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { MainComponent } from './main/main.component';

/* importante  AGREGAR EXPORTS con todos los componentes que quieras puedan exportarse 

luego en elmodulo prinipal (app.module ) importarlo*/

@NgModule({
  declarations: [
    CabeceraComponent,
    ContenidoComponent,
    NavegacionComponent,
    MainComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CabeceraComponent,
    ContenidoComponent,
    NavegacionComponent,
    MainComponent
  ]
})
export class NuevoModule { }
