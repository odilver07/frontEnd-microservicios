import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Examen } from 'src/app/models/examen';
import { ExamenService } from 'src/app/services/examen.service';
import { CommonFormComponent } from '../common-form.component';

@Component({
  selector: 'app-examen-form',
  templateUrl: './examen-form.component.html',
  styleUrls: ['./examen-form.component.css']
})
export class ExamenFormComponent extends CommonFormComponent<Examen, ExamenService> implements OnInit {

  constructor(service: ExamenService,
    router: Router,
    route: ActivatedRoute) {
      super(service, router, route);
      this.titulo = 'Crear Examen';
       this.model =  new Examen();
       this.redirect = '/examenes';
       this.nombreModel = Examen.name;
    }

}
