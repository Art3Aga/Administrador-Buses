import { BusesModelService } from 'src/app/modelos/buses-model.service';
import { ParadasModelService } from './../../modelos/paradas-model.service';
import { CrudService } from 'src/app/servicios/crud.service';
import { LocalstorageService } from 'src/app/servicios/localstorage.service';
import { BitacoraModelService } from './../../modelos/bitacora-model.service';
import { FechaTiempoService } from './../../modelos/fecha-tiempo.service';
import { AccionesService } from 'src/app/servicios/acciones.service';
import { IRuta } from 'src/app/interfaces/IRuta';
import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { RutaModelService } from 'src/app/modelos/ruta-model.service';

@Component({
  selector: 'app-ver-ruta',
  templateUrl: './ver-ruta.component.html',
  styleUrls: ['./ver-ruta.component.scss']
})
export class VerRutaComponent implements OnInit {
  mapa: Mapboxgl.Map;
  latitud: any;
  longitud: any;
  NombreRuta: string;
  NombreRutaAnterior: string;
  ultimaFecha: string;
  imgAnterior: any;
  IsChange: boolean;
  constructor(public dialogRef: MatDialogRef<VerRutaComponent>,
              @Inject(MAT_DIALOG_DATA) public RutaSeleccionada: IRuta,
              public rutamodel: RutaModelService, public accionesService: AccionesService,
              public fechatiempo: FechaTiempoService, public bitacoraModel: BitacoraModelService,
              public storageService: LocalstorageService, public crud: CrudService,
              public paradasModel: ParadasModelService, public busesModel: BusesModelService) { }

  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    this.NombreRuta = this.RutaSeleccionada['RutaSeleccionada'].nombre_ruta;
    this.NombreRutaAnterior = this.NombreRuta;
    this.paradasModel.GetParadasPorRuta(this.NombreRuta).subscribe(
      paradas => {
        this.paradasModel.setListaParadasPorRuta = paradas;
        this.crearMapa();
        /*paradas.map(item => {
          this.busesModel.BuscarHorarios(this.NombreRuta, item.nombre_parada).subscribe(
            horarios =>  {
              this.busesModel.setListaHorarios = horarios;
            },
            error => console.log(error)
          );
        });*/
        /*this.busesModel.BusPorRuta(this.NombreRuta).subscribe(
          buses => {
            this.busesModel.setListaBusesPorRuta = buses;
          },
          error => console.log(error)
        );*/
      },
      error => console.log(error)
    );
    this.IsChange = false;
    // tslint:disable-next-line: no-string-literal
    this.imgAnterior = this.RutaSeleccionada['RutaSeleccionada'].imgPath;
    this.fechatiempo.Fecha();
    this.longitud = -88.175347;
    this.latitud = 13.483324;
    this.ultimaFecha = `${this.fechatiempo.getHoy} ${this.fechatiempo.getTiempo12H}`;
  }
  crearMapa() {
    (Mapboxgl as any).accessToken = environment.mapboxKey;
    this.mapa = new Mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.longitud, this.latitud],
      zoom: 15.63
    });
    this.paradasModel.getListaParadasPorRuta.map(parada => {
      this.crearMarcadores(Number(parada.longitud), Number(parada.latitud), parada.nombre_parada);
      this.busesModel.BuscarHorarios(this.NombreRuta, parada.nombre_parada).subscribe(
        horarios =>  {
          this.busesModel.setListaHorarios = horarios;
        },
        error => console.log(error)
      );
    });
  }
  crearMarcadores(lng: number, lat: number, nombre: string) {
    const popup = new Mapboxgl.Popup({ offset: 25 }).setText(nombre);
    const marker = new Mapboxgl.Marker({
      draggable: false
    }).setLngLat([lng, lat]).setPopup(popup).addTo(this.mapa);
    marker.on('drag', () => { marker.getLngLat(); });
  }
  verMarcadorParada(lng: any, lat: any) {
    this.mapa.flyTo({
      center: [lng, lat]
    });
  }
  seleccionarImagen(changeImg: any) {
    this.rutamodel.setImgSeleccionada = changeImg.target.files[0];
    // tslint:disable-next-line: no-string-literal
    this.RutaSeleccionada['RutaSeleccionada'].imgPath = changeImg.target.files[0].name;
  }
  ActualizarRuta() {
    // tslint:disable-next-line: no-string-literal
    this.RutaSeleccionada['RutaSeleccionada'].fecha_actualizacion = this.ultimaFecha;
    // tslint:disable-next-line: no-string-literal
    this.rutamodel.ActualizarRuta(this.RutaSeleccionada['RutaSeleccionada']).subscribe(
      data => {
        if (data) {
          this.bitacoraModel.GuardarBitacora(`Se actualizaron los datos de la
          ${this.NombreRuta} por la cuenta de ${this.storageService.getLocalStorage.usuario} el
          ${this.fechatiempo.getHoy} a las ${this.fechatiempo.getTiempo12H}`, 'Actualización de Ruta');
          this.accionesService.ShowMensaje(`${this.NombreRuta} Actualizada Correctamente!`, '', 3000, 'niceMsm', 'top');
          this.rutamodel.MostrarListaRutas();
        }
      },
      error => console.log(error),
    );
    this.IsChange = true;
  }

}
