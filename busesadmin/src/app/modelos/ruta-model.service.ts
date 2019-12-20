import { AccionesService } from 'src/app/servicios/acciones.service';
import { FechaTiempoService } from './fecha-tiempo.service';
import { Observable } from 'rxjs';
import { CrudService } from 'src/app/servicios/crud.service';
import { IRuta } from './../interfaces/IRuta';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RutaModelService {
  constructor(private crud: CrudService, private fechatiempo: FechaTiempoService) {
    this.fechatiempo.Fecha();
    this.DatosRuta.fecha_creacion = `${this.fechatiempo.getHoy} ${this.fechatiempo.getTiempo12H}`;
    this.DatosRuta.fecha_actualizacion = `${this.fechatiempo.getHoy} ${this.fechatiempo.getTiempo12H}`;
  }
  //#region Propiedades
  public DatosRuta: IRuta = {
    id_ruta: '',
    nombre_ruta: '',
    unidades: '',
    nombre_abreviado: '',
    hora_inicio: '',
    hora_final: '',
    precio: '',
    imgPath: ''
  };
  private _IMGSELECCIONADA: File;
  public get getImgSeleccionada(): File {
    return this._IMGSELECCIONADA;
  }
  public set setImgSeleccionada(nuevaImgSeleccionada: File) {
    this._IMGSELECCIONADA = nuevaImgSeleccionada;
  }
  private _BUSQUEDA: string;
  public get getBusqueda(): string {
    return this._BUSQUEDA;
  }
  public set setBusqueda(nuevaBusqueda: string) {
    this._BUSQUEDA = nuevaBusqueda;
  }
  private _LISTARUTAS: IRuta[];
  public get getListaRutas(): IRuta[] {
    return this._LISTARUTAS;
  }
  public set setListaRutas(nuevaruta: IRuta[]) {
    this._LISTARUTAS = nuevaruta;
  }
  //#endregion

  //#region Metodos
  public GuardarRuta(): Observable<string> {
    return this.crud.GuardarRuta(this.DatosRuta);
  }
  public EliminarRuta(RutaSeleccionada: string): Observable<string> {
    return this.crud.EliminarRuta(RutaSeleccionada);
  }
  public ActualizarRuta(RutaSeleccionada: IRuta): Observable<string> {
    return this.crud.ActualizarRuta(RutaSeleccionada);
  }
  public SubirImagenRuta(imagen: File): Observable<HttpEvent<{}>> {
    return this.crud.SubirImagenRuta(imagen);
  }
  public MostrarListaRutas() {
    this.crud.GetRutas().subscribe(
      rutas => {
        this.setListaRutas = rutas;
      },
      error => {
        console.log(error);
      }
    );
  }
  public BuscarRutaPorNombre(changeNombre: any) {
    this.setBusqueda = changeNombre.target.value;
    this.crud.BuscarRutaPorNombre(this.getBusqueda).subscribe(
      rutas => {
        this.setListaRutas = rutas;
      },
      error => {
        console.log(error);
      }
    );
  }
  public seleccionarImagen(changeImg: any) {
    this.setImgSeleccionada = changeImg.target.files[0];
    this.DatosRuta.imgPath = changeImg.target.files[0].name;
    console.log(this.DatosRuta.imgPath);
  }
  SubirImagen() {
    this.SubirImagenRuta(this.getImgSeleccionada).subscribe(
      data => {
        if (data instanceof HttpResponse) {
          // this.accionesService.ShowMensaje('Imagen Subida Correctamente', '', 2000, 'niceMsm', 'bottom');
        }
      },
      error => console.log(error)
    );
  }
  public LimpiarDatosRuta() {
    this.DatosRuta.nombre_ruta = '';
    this.DatosRuta.unidades = '';
    this.DatosRuta.nombre_abreviado = '';
    this.DatosRuta.hora_inicio = '';
    this.DatosRuta.hora_final = '';
    this.DatosRuta.precio = '';
  }
  public LimpiarBusqueda() {
    this.setBusqueda = '';
    this.crud.GetRutas().subscribe(
      rutas => {
        this.setListaRutas = rutas;
      },
      error => {
        console.log(error);
      }
    );
  }
  //#endregion
}
