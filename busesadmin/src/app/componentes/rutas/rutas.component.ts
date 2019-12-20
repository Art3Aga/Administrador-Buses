import { LocalstorageService } from 'src/app/servicios/localstorage.service';
import { FechaTiempoService } from './../../modelos/fecha-tiempo.service';
import { CrudService } from './../../servicios/crud.service';
import { AccionesService } from './../../servicios/acciones.service';
import { RutaModelService } from './../../modelos/ruta-model.service';
import { Component, OnInit } from '@angular/core';
import { IRuta } from 'src/app/interfaces/IRuta';
import { interval } from 'rxjs';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { BitacoraModelService } from 'src/app/modelos/bitacora-model.service';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.scss']
})
export class RutasComponent implements OnInit {
  color: string;
  background: string;
  constructor(public rutamodel: RutaModelService, public accionesService: AccionesService,
              public crud: CrudService, public bitacoraModel: BitacoraModelService,
              public fechatiempo: FechaTiempoService, public storageService: LocalstorageService) { }

  ngOnInit() {
    this.color = 'primary';
    this.background = 'amber';
    this.rutamodel.MostrarListaRutas();
  }
  AgregarRuta() {
    this.rutamodel.GuardarRuta().subscribe(
      data => {
        if (data) {
          this.bitacoraModel.GuardarBitacora(`Se Creó la
          ${this.rutamodel.DatosRuta.nombre_ruta} por la cuenta de ${this.storageService.getLocalStorage.usuario} el
          ${this.fechatiempo.getHoy} a las ${this.fechatiempo.getTiempo12H}`, 'Nueva Ruta');
          this.accionesService.ShowMensaje(`${this.rutamodel.DatosRuta.nombre_ruta} Guardada Correctamente`, '', 4000, 'niceMsm', 'bottom');
          this.rutamodel.LimpiarDatosRuta();
          this.rutamodel.MostrarListaRutas();
        }
      },
      error => console.log(error),
    );
  }

}
