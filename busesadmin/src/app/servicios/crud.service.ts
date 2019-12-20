import { IHorario } from './../interfaces/IHorario';
import { IParadas } from './../interfaces/IParadas';
import { IBuses } from './../interfaces/IBuses';
import { IBitacora } from './../interfaces/IBitacora';
import { IAdmins } from './../interfaces/IAdmins';
import { IUsuario } from './../interfaces/IUsuario';
import { IComentario } from './../interfaces/IComentario';
import { IRuta } from 'src/app/interfaces/IRuta';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable, Subject, interval } from 'rxjs';
import { tap, map, catchError, switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //#region Propiedades
  private URL_API: string;
  public URL_IMG: string;
  private URL_BUSCAR: string;
  //#endregion

  constructor(private http: HttpClient) {
    this.URL_API = 'http://192.168.1.7:80/BusesBackend/index.php';
    this.URL_IMG = 'http://192.168.1.7:80/BusesBackend/FotosRutas';
    this.URL_BUSCAR = 'http://192.168.1.7:80/BusesBackend/BuscarPHP';
  }
  //#region Mostrar Datos
  GetIpv4() {
    return this.http.get('https://api.ipify.org/?format=json').pipe(
      tap(data => JSON.stringify(data))
    );
  }
  GetRutas(): Observable<IRuta[]> {
    const url = `${this.URL_API}/Rutas/getRutas`;
    return this.http.get<IRuta[]>(url).pipe(
      tap(data => JSON.stringify(data)),
    );
  }
  GetComentarios(): Observable<IComentario[]> {
    const url = `${this.URL_API}/Comentarios/getComentarios`;
    return this.http.get<IComentario[]>(url).pipe(
      tap(data => JSON.stringify(data)),
    );
  }
  GetBuses(): Observable<IBuses[]> {
    const url = `${this.URL_API}/Buses/getBuses`;
    return this.http.get<IBuses[]>(url).pipe(
      tap(data => JSON.stringify(data)),
    );
  }
  GetParadas(): Observable<IParadas[]> {
    const url = `${this.URL_API}/Paradas/getParadas`;
    return this.http.get<IParadas[]>(url).pipe(
      tap(data => JSON.stringify(data)),
    );
  }
  GetDatosParadaPorNombre(nombreParada: string): Observable<IParadas> {
    const url = `${this.URL_API}/Paradas/getDatosParadaPorNombreParada/${nombreParada}`;
    return this.http.get<IParadas>(url).pipe(
      tap(data => JSON.stringify(data)),
    );
  }
  GetParadasPorRuta(nombreRuta: string): Observable<IParadas[]> {
    const url = `${this.URL_API}/Paradas/buscarParadaPorRuta/${nombreRuta}`;
    return this.http.get<IParadas[]>(url).pipe(
      tap(data => JSON.stringify(data)),
    );
  }
  BuscarBusPorNombre(nombreBus: string): Observable<IBuses[]> {
    const url = `${this.URL_API}/Buses/buscarBusPorNombre/${nombreBus}`;
    return this.http.get<IBuses[]>(url).pipe(
      tap(data => JSON.stringify(data)),
    );
  }
  BuscarBusPorRuta(nombreRuta: string): Observable<IBuses[]> {
    const url = `${this.URL_API}/Buses/buscarBusPorRuta/${nombreRuta}`;
    return this.http.get<IBuses[]>(url).pipe(
      tap(data => JSON.stringify(data)),
    );
  }
  BuscarHorarios(nombreRuta: string, nombreParada: string): Observable<any[]> {
    const url = `${this.URL_BUSCAR}/BuscarHorariosPorParada.php?
    nombre_parada=${nombreParada}&nombre_ruta=${nombreRuta}`;
    return this.http.get<any[]>(url).pipe(
      tap(data => JSON.stringify(data)),
    );
  }
  GetUsuarios(): Observable<IUsuario[]> {
    const url = `${this.URL_API}/Comentarios/getUsuarios`;
    return this.http.get<IUsuario[]>(url).pipe(
      tap(data => JSON.stringify(data)),
    );
  }
  GetBitacora(): Observable<IBitacora[]> {
    const url = `${this.URL_API}/Bitacora/getBitacora`;
    return this.http.get<IBitacora[]>(url).pipe(
      tap(data => JSON.stringify(data)),
    );
  }
  BuscarComentariosPorUsuario(nombreUsuario: string): Observable<IComentario[]> {
    const url = `${this.URL_API}/Comentarios/buscarComentarioPorUsuario/${nombreUsuario}`;
    return this.http.get<IComentario[]>(url).pipe(
      tap(data => JSON.stringify(data)),
    );
  }
  BuscarComentariosPorTexto(texto: string): Observable<IComentario[]> {
    const url = `${this.URL_API}/Comentarios/buscarComentarioPorTexto/${texto}`;
    return this.http.get<IComentario[]>(url).pipe(
      tap(data => JSON.stringify(data)),
    );
  }
  BuscarComentarioPorFecha(fecha: string): Observable<IComentario[]> {
    const login = new HttpParams()
    .set('fecha', fecha);
    const url = `${this.URL_API}/Comentarios/buscarComentarioPorFecha`;
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded; charset-UTF-8;');
    return this.http.post<IComentario[]>(url, login.toString(), {headers});
  }
  BuscarRutaPorNombre(nombreRuta: string): Observable<IRuta[]> {
    const url = `${this.URL_API}/Rutas/buscarRutaPorNombre/${nombreRuta}`;
    return this.http.get<IRuta[]>(url).pipe(
      tap(data => JSON.stringify(data)),
    );
  }
  VerificarCuenta(DatosAdmin: IAdmins): Observable<string> {
    const login = new HttpParams()
    .set('usuario', DatosAdmin.usuario)
    .set('clave', DatosAdmin.clave);
    const url = `${this.URL_API}/Login/VerificarCuenta`;
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded; charset-UTF-8;');
    return this.http.post(url, login.toString(), {headers, responseType: 'text'});
  }
  //#endregion

  //#region Guardar Datos
  GuardarRuta(NuevaRuta: IRuta): Observable<string> {
    const ruta = new HttpParams()
    .set('nombre_ruta', NuevaRuta.nombre_ruta)
    .set('nombre_abreviado', NuevaRuta.nombre_abreviado)
    .set('precio', NuevaRuta.precio)
    .set('unidades', NuevaRuta.unidades)
    .set('hora_inicio', NuevaRuta.hora_inicio)
    .set('hora_final', NuevaRuta.hora_final)
    .set('fecha_creacion', NuevaRuta.fecha_creacion)
    .set('fecha_actualizacion', NuevaRuta.fecha_actualizacion)
    .set('imgPath', NuevaRuta.imgPath);
    const url = `${this.URL_API}/Rutas/guardarRuta`;
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded; charset-UTF-8;');
    return this.http.post(url, ruta.toString(), {headers, responseType: 'text'});
  }
  GuardarBus(NuevoBus: IBuses): Observable<IBuses> {
    const bus = new HttpParams()
    .set('nombre_bus', NuevoBus.nombre_bus)
    .set('nombre_motorista', NuevoBus.nombre_motorista)
    .set('placa', NuevoBus.placa)
    .set('fecha_creacion', NuevoBus.fecha_creacion)
    .set('fecha_actualizacion', NuevoBus.fecha_actualizacion)
    .set('imgPath', NuevoBus.imgPath)
    .set('id_ruta', NuevoBus.id_ruta.split('-')[0])
    .set('nombre_ruta', NuevoBus.id_ruta.split('-')[1]);
    const url = `${this.URL_API}/Buses/guardarBus`;
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded; charset-UTF-8;');
    return this.http.post<IBuses>(url, bus.toString(), {headers});
  }
  GuardarHorarioDeBus(NuevoHorario: IHorario): Observable<IHorario> {
    const horario = new HttpParams()
    .set('id_bus', NuevoHorario.id_bus)
    .set('id_ruta', NuevoHorario.id_ruta)
    .set('nombre_parada', NuevoHorario.nombre_parada)
    .set('latitud', NuevoHorario.latitud)
    .set('longitud', NuevoHorario.longitud)
    .set('horario_ida', NuevoHorario.horario_ida)
    .set('horario_regreso', NuevoHorario.horario_regreso);
    const url = `${this.URL_API}/Horarios/guardarHorarios`;
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded; charset-UTF-8;');
    return this.http.post<IHorario>(url, horario.toString(), {headers});
  }
  GuardarParada(NuevaParada: IParadas): Observable<IParadas> {
    const horario = new HttpParams()
    .set('nombre_ruta', NuevaParada.nombre_ruta)
    .set('nombre_parada', NuevaParada.nombre_parada)
    .set('latitud', NuevaParada.latitud)
    .set('longitud', NuevaParada.longitud);
    const url = `${this.URL_API}/Paradas/guardarParada`;
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded; charset-UTF-8;');
    return this.http.post<IParadas>(url, horario.toString(), {headers});
  }
  RegistrarBitacora(NuevoRegistro: IBitacora): Observable<string> {
    const bitacora = new HttpParams()
    .set('id_admin', NuevoRegistro.id_admin)
    .set('mensaje', NuevoRegistro.mensaje)
    .set('titulo', NuevoRegistro.titulo)
    .set('fecha', NuevoRegistro.fecha);
    const url = `${this.URL_API}/Bitacora/RegistrarBitacora`;
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded; charset-UTF-8;');
    return this.http.post(url, bitacora.toString(), {headers, responseType: 'text'});
  }
  SubirImagenRuta(imagen: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    const url = `${this.URL_API}/Rutas/subirImg`;
    formdata.append('imagen', imagen);
    const request = new HttpRequest('POST', url, formdata, {
      reportProgress: true,
      responseType: 'text',
    });
    return this.http.request(request);
  }
  //#endregion

  //#region Eliminar Datos
  EliminarRuta(RutaSeleccionada: string): Observable<string> {
    const ruta = new HttpParams().set('nombre_ruta', RutaSeleccionada);
    const url = `${this.URL_API}/Rutas/deleteRuta`;
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded; charset-UTF-8;');
    return this.http.post(url, ruta.toString(), {headers, responseType: 'text'});
  }
  EliminarBus(IdBusSeleccionado: string): Observable<string> {
    const bus = new HttpParams().set('id_bus', IdBusSeleccionado);
    const url = `${this.URL_API}/Buses/deleteBus`;
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded; charset-UTF-8;');
    return this.http.post(url, bus.toString(), {headers, responseType: 'text'});
  }
  //#endregion

  //#region Actualizar Datos
  ActualizarRuta(RutaSeleccionada: IRuta): Observable<string> {
    /*this.http.post('', '', {reportProgress: true, observe: 'events'}).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          console.log(Math.round(event.loaded / event.total * 100) + '%');
        } else if (event.type === HttpEventType.Response) {
          console.log(event);
        }
        console.log(event);
      },
    );*/
    const ruta = new HttpParams()
    .set('id_ruta', RutaSeleccionada.id_ruta)
    .set('nombre_ruta', RutaSeleccionada.nombre_ruta)
    .set('nombre_abreviado', RutaSeleccionada.nombre_abreviado)
    .set('precio', RutaSeleccionada.precio)
    .set('unidades', RutaSeleccionada.unidades)
    .set('hora_inicio', RutaSeleccionada.hora_inicio)
    .set('hora_final', RutaSeleccionada.hora_final)
    .set('fecha_actualizacion', RutaSeleccionada.fecha_actualizacion)
    .set('imgPath', RutaSeleccionada.imgPath);
    const url = `${this.URL_API}/Rutas/updateRuta`;
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded; charset-UTF-8;');
    return this.http.post(url, ruta.toString(), {headers, responseType: 'text'});
  }
  //#endregion

}
