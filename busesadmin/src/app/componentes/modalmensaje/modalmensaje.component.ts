import { BitacoraModelService } from './../../modelos/bitacora-model.service';
import { FechaTiempoService } from './../../modelos/fecha-tiempo.service';
import { LocalstorageService } from 'src/app/servicios/localstorage.service';
import { AccionesService } from './../../servicios/acciones.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IRuta } from 'src/app/interfaces/IRuta';
import { RutaModelService } from 'src/app/modelos/ruta-model.service';

@Component({
  selector: 'app-modalmensaje',
  templateUrl: './modalmensaje.component.html',
  styleUrls: ['./modalmensaje.component.scss']
})
export class ModalmensajeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalmensajeComponent>,
              @Inject(MAT_DIALOG_DATA) public RutaSeleccionada: IRuta,
              public acciones: AccionesService, public rutamodel: RutaModelService,
              public storageService: LocalstorageService, public fechatiempo: FechaTiempoService,
              public bitacoraModel: BitacoraModelService) { }

  ngOnInit() {
  }
  Delete() {
    this.rutamodel.EliminarRuta(this.RutaSeleccionada.nombre_ruta).subscribe(
      data => {
        if (data) {
          this.bitacoraModel.GuardarBitacora(`Se Eliminó la
          ${this.RutaSeleccionada.nombre_ruta} por la cuenta de ${this.storageService.getLocalStorage.usuario} el
          ${this.fechatiempo.getHoy} a las ${this.fechatiempo.getTiempo12H}`, 'Ruta Eliminada');
          this.acciones.ShowMensaje(`${this.RutaSeleccionada.nombre_ruta} Eliminada Correctamente`, '', 3000, 'niceMsm', 'bottom');
          this.rutamodel.MostrarListaRutas();
          this.dialogRef.close();
        }
      },
      error => console.log(error),
    );
  }

}
