import { IHorario } from './../interfaces/IHorario';
import { Observable } from 'rxjs';
import { CrudService } from 'src/app/servicios/crud.service';
import { IBuses } from './../interfaces/IBuses';
import { Injectable, OnInit } from '@angular/core';
import { FechaTiempoService } from './fecha-tiempo.service';
import { HttpResponse, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusesModelService {

  constructor(private crud: CrudService, private fechatiempo: FechaTiempoService) {
    this.fechatiempo.Fecha();
    this.DatosBuses.fecha_creacion = `${this.fechatiempo.getHoy} ${this.fechatiempo.getTiempo12H}`;
    this.DatosBuses.fecha_actualizacion = `${this.fechatiempo.getHoy} ${this.fechatiempo.getTiempo12H}`;
  }

  //#region Propiedades
  public DatosBuses: IBuses = {
    nombre_bus: '',
    nombre_motorista: '',
    placa: '',
    fecha_creacion: '',
    fecha_actualizacion: '',
    id_horario: '',
    id_bus: '',
    imgPath: ''
  };
  private _IMGSELECCIONADA: File;
  public get getImgSeleccionada(): File {
    return this._IMGSELECCIONADA;
  }
  public set setImgSeleccionada(nuevaImgSeleccionada: File) {
    this._IMGSELECCIONADA = nuevaImgSeleccionada;
  }
  private _LISTABUSES: IBuses[];
  public get getListaBuses(): IBuses[] {
    return this._LISTABUSES;
  }
  public set setListaBuses(nuevoBus: IBuses[]) {
    this._LISTABUSES = nuevoBus;
  }
  private _LISTABUSESPORRUTA: IBuses[];
  public get getListaBusesPorRuta(): IBuses[] {
    return this._LISTABUSESPORRUTA;
  }
  public set setListaBusesPorRuta(nuevoBus: IBuses[]) {
    this._LISTABUSESPORRUTA = nuevoBus;
  }
  private _LISTAHORARIOS: IHorario[];
  public get getListaHorarios(): IHorario[] {
    return this._LISTAHORARIOS;
  }
  public set setListaHorarios(nuevoBus: IHorario[]) {
    this._LISTAHORARIOS = nuevoBus;
  }
  private _DATOSBUSES: IBuses;
  public get getDatosBuses(): IBuses {
    return this._DATOSBUSES;
  }
  public set setDatosBuses(nuevoDato: IBuses) {
    this._DATOSBUSES = nuevoDato;
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
  public MostrarListaBuses() {
    this.crud.GetBuses().subscribe(
      buses => {
        this.setListaBuses = buses;
      },
      error => {
        console.log(error);
      }
    );
  }
  public BuscarBusPorNombre(changeNombre: any) {
    this.setBusqueda = changeNombre.target.value;
    this.crud.BuscarBusPorNombre(this.getBusqueda).subscribe(
      buses => {
        this.setListaBuses = buses;
      },
      error => {
        console.log(error);
      }
    );
  }
  public BusPorRuta(NombreRuta: string): Observable<IBuses[]> {
    return this.crud.BuscarBusPorRuta(NombreRuta);
  }
  public BuscarHorarios(NombreRuta: string, NombreParada: string): Observable<IHorario[]> {
    return this.crud.BuscarHorarios(NombreRuta, NombreParada);
  }
  public BuscarBusPorRuta(changeNombre: any) {
    this.setBusqueda = changeNombre.value;
    this.crud.BuscarBusPorRuta(this.getBusqueda).subscribe(
      buses => {
        this.setListaBuses = buses;
      },
      error => {
        console.log(error);
      }
    );
  }
  public BuscarBusPorRuta2(changeNombre: any) {
    this.setBusqueda = changeNombre.value;
    this.crud.BuscarBusPorRuta(this.getBusqueda.split('-')[0]).subscribe(
      buses => {
        this.setListaBuses = buses;
      },
      error => {
        console.log(error);
      }
    );
  }
  public seleccionarImagen(changeImg: any) {
    this.setImgSeleccionada = changeImg.target.files[0];
    this.DatosBuses.imgPath = changeImg.target.files[0].name;
  }
  SubirImagen() {
    this.SubirImagenRuta(this.getImgSeleccionada).subscribe(
      data => {
        if (data instanceof HttpResponse) {}
      },
      error => console.log(error)
    );
  }
  public GuardarBus(): Observable<IBuses> {
    return this.crud.GuardarBus(this.DatosBuses);
  }
  public SubirImagenRuta(imagen: File): Observable<HttpEvent<{}>> {
    return this.crud.SubirImagenRuta(imagen);
  }
  public EliminarBus(IDBus: string): Observable<string> {
    return this.crud.EliminarBus(IDBus);
  }
  public LimpiarDatosBus() {
    this.DatosBuses = {
      nombre_bus: '',
      nombre_motorista: '',
      placa: '',
      fecha_creacion: '',
      fecha_actualizacion: '',
      id_horario: '',
      id_bus: '',
      imgPath: null
    };
    this.setImgSeleccionada = null;
  }
  //#endregion

}
