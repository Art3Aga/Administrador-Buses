import { Injectable } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapaModelService {
  mapa: Mapboxgl.Map;
  constructor() {
    // this.CrearMapa();
  }
  /*CrearMapa() {
    (Mapboxgl as any).accessToken = environment.mapboxKey;
    this.mapa = new Mapboxgl.Map({
      container: 'mapa-mapbox',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-88.175315, 13.483147],
      zoom: 16.63
    });
  }*/
}
