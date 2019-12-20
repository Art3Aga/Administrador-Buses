import { Component, OnInit, Input } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {
  @Input() coords: string;
  mapa: Mapboxgl.Map;
  constructor() { }
  ngOnInit() {
    console.log(this.coords);
    const latLng = this.coords.split(',');
    const lat = Number(latLng[0]);
    const lng = Number(latLng[1]);
    (Mapboxgl as any).accessToken = environment.mapboxKey;
    this.mapa = new Mapboxgl.Map({
      container: 'mapa-mapbox',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: 16.63
    });
    this.crearMarcador(lng, lat);
  }
  crearMarcador(lng: number, lat: number) {
    const popup = new Mapboxgl.Popup({ offset: 25 }).setText('Hola');
    const marker = new Mapboxgl.Marker({
      draggable: true
    })
    .setLngLat([lng, lat]).setPopup(popup)
    .addTo(this.mapa);
    marker.on('drag', () => {
      console.log(marker.getLngLat());
    });
  }

}
