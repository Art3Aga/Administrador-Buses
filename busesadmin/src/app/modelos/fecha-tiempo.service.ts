import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FechaTiempoService {

  constructor() { }

  //#region Propiedades
  private _FECHA: Date;
  public get getFecha(): Date {
    return this._FECHA;
  }
  public set setFecha(nuevaFecha: Date) {
    this._FECHA = nuevaFecha;
  }

  private _TIEMPO24H: string;
  public get getTiempo24H(): string {
    return this._TIEMPO24H;
  }
  public set setTiempo24H(nuevoTiempo: string) {
    this._TIEMPO24H = nuevoTiempo;
  }

  private _TIEMPO12H: string;
  public get getTiempo12H(): string {
    return this._TIEMPO12H;
  }
  public set setTiempo12H(nuevoTiempo: string) {
    this._TIEMPO12H = nuevoTiempo;
  }

  private _HOY: string;
  public get getHoy(): string {
    return this._HOY;
  }
  public set setHoy(nuevoHoy: string) {
    this._HOY = nuevoHoy;
  }
  //#endregion

  //#region Metodos
  public Fecha() {
    this.setFecha = new Date();
    this.setHoy = `${this.getFecha.getMonth() + 1}/${this.getFecha.getDate()}/${this.getFecha.getFullYear()}`;
    this.setTiempo24H = this.Tiempo24H();
    this.setTiempo12H = this.Tiempo12H();
  }
  public Tiempo24H(): string {
    return `${this.getFecha.getHours()}:${this.getFecha.getMinutes()}`;
  }
  public Tiempo12H(): string {
    let horas = this.getFecha.getHours();
    let minutos: any = this.getFecha.getMinutes();
    const AM_PM = horas >= 12 ? 'PM' : 'AM';
    horas = horas % 12;
    horas = horas ? horas : 12;
    minutos = minutos < 10 ? `0${minutos}` : minutos;
    return `${horas}:${minutos} ${AM_PM}`;
  }
  //#endregion

}
