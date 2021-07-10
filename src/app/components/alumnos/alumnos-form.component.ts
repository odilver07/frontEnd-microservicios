import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';
import Swal from 'sweetalert2';
import { CommonFormComponent } from '../common-form.component';

@Component({
  selector: 'app-alumnos-form',
  templateUrl: './alumnos-form.component.html',
  styleUrls: ['./alumnos-form.component.css']
})

export class AlumnosFormComponent 
extends CommonFormComponent<Alumno, AlumnoService> implements OnInit {

  private fotoSeleccionada: File;

  constructor(service: AlumnoService,
     router: Router,
     route: ActivatedRoute ) {
       super(service,router, route );
       this.titulo = "Alta de alumnos";
       this.model = new Alumno;
       this.redirect = '/alumnos';
       this.nombreModel = Alumno.name;
    }
  
    public seleccionarFoto(event): void {
      this.fotoSeleccionada = event.target.files[0];
      console.info(this.fotoSeleccionada);

      if(this.fotoSeleccionada.type.indexOf('image') < 0){
        this.fotoSeleccionada = null;
        Swal.fire('Error', 'El archivo debe ser del tipo imagen', 'error');
      }
    }

    public crear(): void {
      if(!this.fotoSeleccionada){
        super.crear();
      }else {
        this.service.crearConFoto(this.model,this.fotoSeleccionada).subscribe(alumno => {
          console.log(alumno)
          Swal.fire('Nuevo',`Alumno ${alumno.nombre} creado con exito`,'success');
          this.router.navigate([this.redirect]);
        },
        er => {
          if(er.status === 400){
            this.error = er.error;
            console.log(this.error);
          }
        });
      }
    }

    public editar(): void {
      if(!this.fotoSeleccionada){
        super.editar();
      }else {
        this.service.editarConFoto(this.model,this.fotoSeleccionada).subscribe(alumno => {
          console.log(alumno)
          Swal.fire('Modificado',`Alumno ${alumno.nombre} actualizado con exito`,'success');
          this.router.navigate([this.redirect]);
        },
        er => {
          if(er.status === 400){
            this.error = er.error;
            console.log(this.error);
          }
        });
      }
    }


}
