import { Observable } from 'rxjs';
import { IParadas } from './../interfaces/IParadas';
import { CrudService } from './../servicios/crud.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParadasModelService {

  constructor(private crud: CrudService) { }

  //#region Propiedades
  public DatosParada: IParadas = {
    id_parada: '',
    nombre_parada: '',
    nombre_ruta: '',
    latitud: '13.483235',
    longitud: '-88.175304'
  };

  private _LISTAPARADAS: IParadas[];
  public get getListaParadas(): IParadas[] {
    return this._LISTAPARADAS;
  }
  public set setListaParadas(nuevaParada: IParadas[]) {
    this._LISTAPARADAS = nuevaParada;
  }
  private _LISTAPARADASPORRUTA: IParadas[];
  public get getListaParadasPorRuta(): IParadas[] {
    return this._LISTAPARADASPORRUTA;
  }
  public set setListaParadasPorRuta(nuevaParada: IParadas[]) {
    this._LISTAPARADASPORRUTA = nuevaParada;
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
  public MostrarListaParadas() {
    this.crud.GetParadas().subscribe(
      paradas => {
        this.setListaParadas = paradas;
      },
      error => console.log(error),
    );
  }
  public GetParadasPorRuta(nombreRuta: string): Observable<IParadas[]> {
    return this.crud.GetParadasPorRuta(nombreRuta);
  }
  public GetDatosParadaPorNombre(changeNombre: any) {
    this.setBusqueda = changeNombre.value;
    this.crud.GetDatosParadaPorNombre(this.getBusqueda.split(',')[0]).subscribe(
      parada => {
        this.DatosParada = parada;
      },
      error => {
        console.log(error);
      }
    );
  }
  //#endregion
}
