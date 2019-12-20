import { CrudService } from 'src/app/servicios/crud.service';
import { RutaModelService } from './../../modelos/ruta-model.service';
import { Component, OnInit } from '@angular/core';
import { BusesModelService } from 'src/app/modelos/buses-model.service';
import { AccionesService } from 'src/app/servicios/acciones.service';
import { FechaTiempoService } from 'src/app/modelos/fecha-tiempo.service';
import { LocalstorageService } from 'src/app/servicios/localstorage.service';
import { BitacoraModelService } from 'src/app/modelos/bitacora-model.service';

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.scss']
})
export class BusesComponent implements OnInit {

  constructor(public busesModel: BusesModelService, public rutaModel: RutaModelService,
              public accionesService: AccionesService, public bitacoraModel: BitacoraModelService,
              public fechatiempo: FechaTiempoService, public storageService: LocalstorageService,
              public crud: CrudService) { }
  ngOnInit() {
    this.busesModel.setBusqueda = '';
    this.busesModel.MostrarListaBuses();
    this.rutaModel.MostrarListaRutas();
  }
  AgregarBus() {
    this.busesModel.GuardarBus().subscribe(
      data => {
        if (data) {
          this.bitacoraModel.GuardarBitacora(`Se Creó el Bus
          ${this.busesModel.DatosBuses.nombre_bus} asociado a la ${this.busesModel.DatosBuses.id_ruta.split('-')[1]}
           por la cuenta de ${this.storageService.getLocalStorage.usuario} el
          ${this.fechatiempo.getHoy} a las ${this.fechatiempo.getTiempo12H}`, 'Nuevo Bus');
          this.accionesService.ShowMensaje(`${this.busesModel.DatosBuses.nombre_bus}
           Guardado Correctamente`, '', 4000, 'niceMsm', 'bottom');
          this.busesModel.LimpiarDatosBus();
          this.busesModel.MostrarListaBuses();
        }
      },
      error => console.log(error)
    );
  }
  AbrirModal(objeto: any, NombreBus: string) {
    this.accionesService.OpenModalDialog(objeto, `¿Seguro que desea Borrar el Bus: ${NombreBus} ?`,
    'Todos los datos se borrarán del sistema administrativo como para los usuarios de la aplicación', true);
  }

}
