import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { HttpClientModule } from '@angular/common/http';
import { PruebaComponent } from './prueba/prueba.component';
import { NuevoComponent } from './empresas/nuevo/nuevo.component';

@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent,
    EmpresasComponent,
    PruebaComponent,
    NuevoComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
