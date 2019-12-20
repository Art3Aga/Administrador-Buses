import { IParadas } from './../interfaces/IParadas';
import { Observable } from 'rxjs';
import { IHorario } from './../interfaces/IHorario';
import { CrudService } from './../servicios/crud.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecorridoModelService {

  constructor(private crud: CrudService) { }

  //#region Propiedades
  public DatosRecorrido: IHorario = {
    id_horario: '',
    horario_ida: '',
    horario_regreso: '',
    nombre_parada: '',
    latitud: '',
    longitud: '',
    id_bus: '',
    id_ruta: ''
  };
  public HorariosArray: IHorario[] = [];
  private _DATOSHORARIOS: IHorario[];
  public get getDatosHorariosArray(): IHorario[] {
    return this._DATOSHORARIOS;
  }
  public set setDatosHorariosArray(nuevoHorario: IHorario[]) {
    this._DATOSHORARIOS = nuevoHorario;
  }
  //#endregion

  //#region Metodos
  public GuardarParada(nuevaParada: IParadas  ): Observable<IParadas  > {
    return this.crud.GuardarParada(nuevaParada);
  }
  public GuardarHorarioDeBus(nuevoHorario: IHorario): Observable<IHorario> {
    return this.crud.GuardarHorarioDeBus(nuevoHorario);
  }
  //#endregion
}
