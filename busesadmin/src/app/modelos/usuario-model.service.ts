import { IUsuario } from './../interfaces/IUsuario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioModelService {

  constructor() { }
  private _LISTAUSUARIOS: IUsuario[];
  public get getListaUsuarios(): IUsuario[] {
    return this._LISTAUSUARIOS;
  }
  public set setListaUsuarios(nuevoUsuario: IUsuario[]) {
    this._LISTAUSUARIOS = nuevoUsuario;
  }
}
