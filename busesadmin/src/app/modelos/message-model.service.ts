import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageModelService {

  constructor() { }
  private _MENSAJE: string;
  private _OBJETO: any;
  public getMensaje(): string {
    return this._MENSAJE;
  }
  public setMensaje(nuevoMensaje: string) {
    this._MENSAJE = nuevoMensaje;
  }
  public getObjeto(): any {
    return this._OBJETO;
  }
  public setObjeto(nuevoObject: any) {
    this._OBJETO = nuevoObject;
  }

}
