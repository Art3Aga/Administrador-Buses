import { Injectable } from '@angular/core';
import { CrudService } from '../servicios/crud.service';
import { IAdmins } from '../interfaces/IAdmins';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminmodelService {

  constructor(private crud: CrudService) {}
  //#region Propiedades
  private _DATOSADMIN: IAdmins;
  public get getDatosAdmin(): IAdmins {
    return this._DATOSADMIN;
  }
  public set setDatosAdmin(nuevosDatos: IAdmins) {
    this._DATOSADMIN = nuevosDatos;
  }
  //#endregion

  //#region Metodos
  public VerificarCuenta(): Observable<string> {
    return this.crud.VerificarCuenta(this.getDatosAdmin);
  }
  //#endregion
}
