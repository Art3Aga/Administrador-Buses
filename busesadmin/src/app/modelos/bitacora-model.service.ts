import { RutaModelService } from './ruta-model.service';
import { FechaTiempoService } from './fecha-tiempo.service';
import { LocalstorageService } from 'src/app/servicios/localstorage.service';
import { Observable } from 'rxjs';
import { IBitacora } from './../interfaces/IBitacora';
import { CrudService } from 'src/app/servicios/crud.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BitacoraModelService {

  constructor(private crud: CrudService, private storageService: LocalstorageService,
              private fechatiempo: FechaTiempoService) { }

  //#region Propiedades
  private _DATOSBITACORA: IBitacora;
  public get getDatosBitacora(): IBitacora {
    return this._DATOSBITACORA;
  }
  public set setDatosBitacora(nuevaBitacora: IBitacora) {
    this._DATOSBITACORA = nuevaBitacora;
  }
  private _LISTAREGISTROSBITACORA: IBitacora[];
  public get getListaRegistrosBitacora(): IBitacora[] {
    return this._LISTAREGISTROSBITACORA;
  }
  public set setListaRegistrosBitacora(nuevoRegistro: IBitacora[]) {
    this._LISTAREGISTROSBITACORA = nuevoRegistro;
  }
  //#endregion

  //#region Metodos
  public RegistrarBitacora(): Observable<string> {
    return this.crud.RegistrarBitacora(this._DATOSBITACORA);
  }
  public GuardarBitacora(mensaje: string, titulo: string) {
    this.storageService.VerificarStorage('usuario');
    this.fechatiempo.Fecha();
    this.setDatosBitacora = {
      id_admin: this.storageService.getLocalStorage.id_admin,
      mensaje,
      titulo,
      fecha: `${this.fechatiempo.getHoy}-${this.fechatiempo.getTiempo12H}`
    };
    this.RegistrarBitacora().subscribe(data => {}, error => console.log(error));
  }
  public MostrarListaRegistrosBitacora() {
    this.crud.GetBitacora().subscribe(
      registro => {
        this.setListaRegistrosBitacora = registro;
      },
      error => console.log(error),
    );
  }
  //#endregion

}
