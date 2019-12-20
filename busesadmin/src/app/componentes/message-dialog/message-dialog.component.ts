import { BusesModelService } from 'src/app/modelos/buses-model.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LocalstorageService } from 'src/app/servicios/localstorage.service';
import { BitacoraModelService } from 'src/app/modelos/bitacora-model.service';
import { RutaModelService } from 'src/app/modelos/ruta-model.service';
import { FechaTiempoService } from 'src/app/modelos/fecha-tiempo.service';
import { AccionesService } from 'src/app/servicios/acciones.service';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.scss']
})
export class MessageDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MessageDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public Objeto: any,
              public busesModal: BusesModelService, public acciones: AccionesService, public rutamodel: RutaModelService,
              public storageService: LocalstorageService, public fechatiempo: FechaTiempoService,
              public bitacoraModel: BitacoraModelService) { }

  ngOnInit() {
    // console.log(this.Objeto.Objeto.id_bus);
  }
  Accion() {
    if (this.Objeto.IsDelete) {
      // Funciona como Borrar
      this.busesModal.EliminarBus(this.Objeto.Objeto.id_bus).subscribe(
        data => {
          // tslint:disable-next-line: no-string-literal
          if (data['error'] !== false) {
            this.bitacoraModel.GuardarBitacora(`Se Eliminó el Bus
             ${this.Objeto.Objeto.nombre_bus} por la cuenta de ${this.storageService.getLocalStorage.usuario} el
            ${this.fechatiempo.getHoy} a las ${this.fechatiempo.getTiempo12H}`, 'Bus Eliminado');
            this.acciones.ShowMensaje(`Bus ${this.Objeto.Objeto.id_bus} Eliminado Correctamente`, '', 3000, 'niceMsm', 'bottom');
            this.busesModal.MostrarListaBuses();
            this.dialogRef.close();
          }
        },
        error => console.log(error)
      );
    }
  }

}
