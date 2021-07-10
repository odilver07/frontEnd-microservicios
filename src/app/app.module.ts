import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { ExamenesComponent } from './components/examenes/examenes.component';
import { LayoutModule } from './layout/layout.module';
import {HttpClientModule} from '@angular/common/http';
import { AlumnosFormComponent } from './components/alumnos/alumnos-form.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CursoFormComponent } from './components/cursos/curso-form.component';
import { ExamenFormComponent } from './components/examenes/examen-form.component';


@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    ExamenesComponent,
    AlumnosFormComponent,
    CursosComponent,
    CursoFormComponent,
    ExamenFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
