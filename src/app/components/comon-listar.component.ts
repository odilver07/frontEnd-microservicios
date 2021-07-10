import { Directive } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import Swal from 'sweetalert2'
import { Generic } from '../models/generic';
import { CommonService } from '../services/common.service';

@Directive()
export abstract class CommonListarComponent<E extends Generic, S extends CommonService<E>> implements OnInit {
  
  lista?: E[];
  protected nombreModel: string;

  totalRegistros = 0; 
  paginaActual = 0;
  totalPorPagina = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100]

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(protected service : S) { }

  ngOnInit(): void {
    this.calcularRango();
  }

  paginar(event: PageEvent): void {
    this.paginaActual = event.pageIndex;
    this.totalPorPagina = event.pageSize;
    this.calcularRango();
  }

  private calcularRango(){
    this.service.listarPaginas(this.paginaActual.toString(), this.totalPorPagina.toString()).subscribe(p => {
      this.lista = p.content as E[];
      this.totalRegistros = p.totalElements as number;
      this.paginator._intl.itemsPerPageLabel = 'Registros por pagina';
    });
  }

  public eliminar(e: E): void {
    Swal.fire({
      title: 'Estas seguro?',
      text: "La informacion eliminada no podra ser recuperada!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.eliminar(e.id).subscribe(() => {
          // this.alumnos = this.alumnos.filter(a => a !== alumno)
          this.calcularRango();
          Swal.fire('Eliminado',`Se elimino ${this.nombreModel} ${e.nombre}`, 'success')
        });
      }
    })
  }

}
