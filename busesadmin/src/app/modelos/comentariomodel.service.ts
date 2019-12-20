import { CrudService } from 'src/app/servicios/crud.service';
import { IComentario } from './../interfaces/IComentario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComentariomodelService {

  constructor(public crud: CrudService) { }

  //#region Propiedades
  private _DATOSCOMENTARIO: IComentario;
  public get DatosComentario(): IComentario {
    return this._DATOSCOMENTARIO;
  }
  public set SetDatosComentario(nuevosDatos: IComentario) {
    this._DATOSCOMENTARIO = nuevosDatos;
  }
  private _LISTACOMENTARIOS: IComentario[];
  public get getListaComentarios(): IComentario[] {
    return this._LISTACOMENTARIOS;
  }
  public set setListaComentarios(nuevoComentario: IComentario[]) {
    this._LISTACOMENTARIOS = nuevoComentario;
  }
  private _BUSQUEDA: string;
  public get getBusqueda(): string {
    return this._BUSQUEDA;
  }
  public set setBusqueda(nuevaBusqueda: string) {
    this._BUSQUEDA = nuevaBusqueda;
  }
  //#endregion

  //#region Metodos
  public BuscarComentariosPorUsuario(changeUsuario: any) {
    this.setBusqueda = changeUsuario.target.value;
    this.crud.BuscarComentariosPorUsuario(this.getBusqueda).subscribe(
      comentarios => {
        this.setListaComentarios = comentarios;
      },
      error => {
        console.log(error);
      }
    );
  }
  public BuscarComentariosPorTexto(changeTexto: any) {
    this.setBusqueda = changeTexto.target.value;
    this.crud.BuscarComentariosPorTexto(this.getBusqueda).subscribe(
      comentarios => {
        this.setListaComentarios = comentarios;
      },
      error => {
        console.log(error);
      }
    );
  }
  public BuscarComentarioPorFecha(changeFecha: any) {
    this.setBusqueda = changeFecha.targetElement.value;
    this.crud.BuscarComentarioPorFecha(this.getBusqueda).subscribe(
      comentarios => {
        this.setListaComentarios = comentarios;
      },
      error => {
        console.log(error);
      }
    );
  }
  public MostrarListaComentarios() {
    this.crud.GetComentarios().subscribe(
      comentarios => {
        this.setListaComentarios = comentarios;
      },
      error => {
        console.log(error);
      }
    );
  }
  public LimpiarBusqueda() {
    this.setBusqueda = '';
    this.crud.GetComentarios().subscribe(
      comentarios => {
        this.setListaComentarios = comentarios;
      },
      error => {
        console.log(error);
      }
    );
  }
  //#endregion
}
