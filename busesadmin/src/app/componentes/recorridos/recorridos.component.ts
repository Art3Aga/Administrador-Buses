import { AccionesService } from './../../servicios/acciones.service';
import { CrudService } from 'src/app/servicios/crud.service';
import { ParadasModelService } from './../../modelos/paradas-model.service';
import { BusesModelService } from './../../modelos/buses-model.service';
import { RutaModelService } from './../../modelos/ruta-model.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { RecorridoModelService } from 'src/app/modelos/recorrido-model.service';
@Component({
  selector: 'app-recorridos',
  templateUrl: './recorridos.component.html',
  styleUrls: ['./recorridos.component.scss']
})
export class RecorridosComponent implements OnInit, AfterViewInit {
  mapa: Mapboxgl.Map;
  UltimoMarcador: Mapboxgl.Marker;
  vueltas: number;
  contador: number;
  coordinates: any;
  listaCoordenadas: any[] = [];
  constructor(public rutaModel: RutaModelService, public busesModel: BusesModelService,
              public paradaModel: ParadasModelService, private crud: CrudService,
              public recorridoModel: RecorridoModelService, public accionesService: AccionesService) { }

  ngOnInit() {
    this.contador = 0;
    this.vueltas = 0;
    this.busesModel.setBusqueda = '';
    this.rutaModel.MostrarListaRutas();
    this.paradaModel.MostrarListaParadas();
  }
  ngAfterViewInit() {
    this.CrearMapa();
  }
  CrearMapa() {
    (Mapboxgl as any).accessToken = environment.mapboxKey;
    this.coordinates = document.getElementById('coordinates');
    this.mapa = new Mapboxgl.Map({
      container: 'mapa-mapbox',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-88.175315, 13.483147],
      zoom: 16.63
    });
    // this.CrearRutaDeRecorrido();
  }
  CrearRutaDeRecorrido() {
    this.mapa.on('load', () => {
      this.mapa.addLayer({
        id: 'route',
        type: 'line',
        source: {
        type: 'geojson',
        data: {
        type: 'Feature',
        properties: {},
        geometry: {
        type: 'LineString',
        coordinates: [
          // this.listaCoordenadas
          [-88.1677849, 13.4614027],
          [-88.175304, 13.483235],
          [-88.1742813687501, 13.472496430374562],
          [-88.1749377329933, 13.482377238362602],
          [-88.17403870867226, 13.477712617423009],
          [-88.1837502563889, 13.481888599255527],
          /*[-122.48348236083984, 37.829920943955045],
          [-122.48356819152832, 37.82954808664175],
          [-122.48507022857666, 37.82944639795659],
          [-122.48610019683838, 37.82880236636284],
          [-122.48695850372314, 37.82931081282506],
          [-122.48700141906738, 37.83080223556934],
          [-122.48751640319824, 37.83168351665737],
          [-122.48803138732912, 37.832158048267786],
          [-122.48888969421387, 37.83297152392784],
          [-122.48987674713133, 37.83263257682617],
          [-122.49043464660643, 37.832937629287755],
          [-122.49125003814696, 37.832429207817725],
          [-122.49163627624512, 37.832564787218985],
          [-122.49223709106445, 37.83337825839438],
          [-122.49378204345702, 37.83368330777276]*/
        ]
        }
        }
        },
        layout: {
        'line-join': 'round',
        'line-cap': 'round'
        },
        paint: {
        'line-color': '#888',
        'line-width': 8
        }
      });
    });
  }
  crearMarcador() {
    const popup = new Mapboxgl.Popup({ offset: 25 }).setText(this.paradaModel.DatosParada.nombre_parada);
    const marker = new Mapboxgl.Marker({draggable: true})
    .setLngLat([Number(this.paradaModel.DatosParada.longitud),
      Number(this.paradaModel.DatosParada.latitud)]).setPopup(popup).addTo(this.mapa);
    this.UltimoMarcador = marker;
    this.UltimoMarcador.on('drag', () => {
      this.ArrastrarMarker();
    });
  }
  crearMarcador2(changeNombre: any) {
    const nombreParada: string = changeNombre.value;
    this.crud.GetDatosParadaPorNombre(nombreParada.split(',')[0]).subscribe(
      parada => {
        if (parada.nombre_parada) {
          this.paradaModel.DatosParada = parada;
          const popup = new Mapboxgl.Popup({ offset: 25 }).setText(this.paradaModel.DatosParada.nombre_parada);
          const marker = new Mapboxgl.Marker({draggable: false})
          .setLngLat([Number(this.paradaModel.DatosParada.longitud),
            Number(this.paradaModel.DatosParada.latitud)]).setPopup(popup).addTo(this.mapa);
          this.UltimoMarcador = marker;
          this.mapa.flyTo({center: [Number(parada.longitud), Number(parada.latitud)]});
          this.UltimoMarcador.on('drag', () => {
            this.ArrastrarMarker();
          });
          this.accionesService.ShowMensaje(`Datos de la Parada ${parada.nombre_parada}
           Cargados Correctamente`, '', 3000, 'niceMsm', 'top');
        }
      },
      error => console.log(error)
    );
  }
  ArrastrarMarker() {
    this.coordinates.style.display = 'block';
    this.coordinates.innerHTML = `Longitud: ${this.UltimoMarcador.getLngLat().lat}<br>Latitud: ${this.UltimoMarcador.getLngLat().lng}`;
  }
  SiguienteVuelta() {
    if (this.contador < this.vueltas) {
      if (this.ValidarCargarONueva() === 'Cargar Parada') {
        this.recorridoModel.HorariosArray.push({
          id_bus: this.busesModel.DatosBuses.id_bus,
          nombre_ruta: this.busesModel.getBusqueda.split('-')[0],
          id_ruta: this.busesModel.getBusqueda.split('-')[1],
          nombre_parada: this.paradaModel.getBusqueda.split(',')[0],
          longitud: this.paradaModel.getBusqueda.split(',')[1],
          latitud: this.paradaModel.getBusqueda.split(',')[2],
          horario_ida: this.recorridoModel.DatosRecorrido.horario_ida,
          horario_regreso: this.recorridoModel.DatosRecorrido.horario_regreso
        });
        this.recorridoModel.DatosRecorrido.horario_ida = null;
        this.recorridoModel.DatosRecorrido.horario_regreso = null;
        this.contador++;
      } else {
        this.recorridoModel.HorariosArray.push({
          id_bus: this.busesModel.DatosBuses.id_bus,
          nombre_ruta: this.busesModel.getBusqueda.split('-')[0],
          id_ruta: this.busesModel.getBusqueda.split('-')[1],
          nombre_parada: this.paradaModel.DatosParada.nombre_parada,
          longitud: String(this.UltimoMarcador.getLngLat().lng),
          latitud: String(this.UltimoMarcador.getLngLat().lat),
          horario_ida: this.recorridoModel.DatosRecorrido.horario_ida,
          horario_regreso: this.recorridoModel.DatosRecorrido.horario_regreso
        });
        this.recorridoModel.DatosRecorrido.horario_ida = null;
        this.recorridoModel.DatosRecorrido.horario_regreso = null;
        this.contador++;
      }
    }
  }
  ValidarCargarONueva(): string {
    if (this.paradaModel.getBusqueda) {
      this.paradaModel.DatosParada = {
        nombre_ruta: this.busesModel.getBusqueda.split('-')[0],
        nombre_parada: this.paradaModel.getBusqueda.split(',')[0],
        longitud: this.paradaModel.getBusqueda.split(',')[1],
        latitud: this.paradaModel.getBusqueda.split(',')[2],
      };
      return 'Cargar Parada';
    } else {
      this.paradaModel.DatosParada = {
        nombre_ruta: this.busesModel.getBusqueda.split('-')[0],
        nombre_parada: this.paradaModel.DatosParada.nombre_parada,
        longitud: String(this.UltimoMarcador.getLngLat().lng),
        latitud: String(this.UltimoMarcador.getLngLat().lat)
      };
      return 'Nueva Parada';
    }
  }
  Guardar() {
    this.recorridoModel.HorariosArray.map(horario => {
      // this.listaCoordenadas.push([Number(horario.longitud), Number( horario.latitud)]);
      this.recorridoModel.GuardarHorarioDeBus(horario).subscribe(
        data => {
          // tslint:disable-next-line: no-string-literal
          if (data['error'] === false) {
            // tslint:disable-next-line: no-string-literal
            console.log(data['mensaje']);
          }
        },
        error => console.log(error),
      );
    });
    this.recorridoModel.GuardarParada(this.paradaModel.DatosParada).subscribe(
      data => {
        // tslint:disable-next-line: no-string-literal
        if (data['error'] === false) {
          // tslint:disable-next-line: no-string-literal
          this.accionesService.ShowMensaje(`${data['mensaje']}`, '', 3000, 'niceMsm', 'bottom');
        }
      },
      error => console.log(error),
    );
    this.vueltas = 0;
    this.contador = 0;
    this.recorridoModel.HorariosArray = [];
  }
  LimpiarDatos() {
    this.UltimoMarcador ? this.UltimoMarcador.remove() : this.UltimoMarcador = null;
    this.paradaModel.setBusqueda = null;
    this.paradaModel.DatosParada = {
      id_parada: '',
      latitud: '13.483235',
      longitud: '-88.175304',
      namelnglat: '',
      nombre_parada: '',
      nombre_ruta: '',
    };
  }
  print() {
    console.log(this.listaCoordenadas);
    this.CrearRutaDeRecorrido();
  }

}
