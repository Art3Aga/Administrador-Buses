import { FechaTiempoService } from './../modelos/fecha-tiempo.service';
import { BitacoraModelService } from './../modelos/bitacora-model.service';
import { AdminmodelService } from './../modelos/adminmodel.service';
import { AccionesService } from './acciones.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor(private router: Router, /*private accionesService: AccionesService,*/
              private adminModel: AdminmodelService, /*private bitacoraModel: BitacoraModelService,
              private fechatiempo: FechaTiempoService*/) { }

  //#region Propiedades
  private _SIGUIENTEPAGINA: any;
  public get getSiguientePagina(): any {
    return this._SIGUIENTEPAGINA;
  }
  public set setSiguientePagina(nuevoValor: any) {
    this._SIGUIENTEPAGINA = nuevoValor;
  }
  private _LOCALSTORAGE: any;
  public get getLocalStorage(): any {
    return JSON.parse(this._LOCALSTORAGE);
  }
  public set setLocalStorage(nuevoValor: any) {
    this._LOCALSTORAGE = nuevoValor;
  }
  //#endregion

  //#region Metodos
  public GuardarEnStorage(key: string, nuevoValor: any) {
    localStorage.setItem(key, nuevoValor);
  }
  public BorrarKey(key: string) {
    localStorage.removeItem(key);
  }
  public CerrarSesion() {
    localStorage.clear();
    this.VerificarStorageSiguientePagina('siguientePagina');
    this.VerificarStorage('usuario');
    this.adminModel.setDatosAdmin = {usuario: '', clave: ''};
    this.router.navigateByUrl('/login');
    /*this.bitacoraModel.GuardarBitacora(`Se cerró sesion en la cuenta de ${this.getLocalStorage.usuario} el
          ${this.fechatiempo.getHoy} a las ${this.fechatiempo.getTiempo12H}`, 'Sesion Cerrada');*/
    // this.accionesService.ShowMensaje('Adios!', '', 1000, 'niceMsm', 'bottom');
  }
  public VerificarStorage(key: string) {
    if (localStorage.getItem(key)) {
      this.setLocalStorage = localStorage.getItem(key);
    } else {
      this.setLocalStorage = '';
    }
  }
  public VerificarStorageSiguientePagina(key: string) {
    if (localStorage.getItem(key)) {
      this.setSiguientePagina = localStorage.getItem(key);
    } else {
      this.setSiguientePagina = '';
    }
  }
  //#endregion

}
