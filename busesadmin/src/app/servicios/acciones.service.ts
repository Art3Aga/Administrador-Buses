import { MessageDialogComponent } from './../componentes/message-dialog/message-dialog.component';
import { ModalmensajeComponent } from './../componentes/modalmensaje/modalmensaje.component';
import { IRuta } from 'src/app/interfaces/IRuta';
import { RutaModelService } from './../modelos/ruta-model.service';
import { VerRutaComponent } from './../componentes/ver-ruta/ver-ruta.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AccionesService {

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) { }

  public OpenModal(RutaSeleccionada: IRuta, IsEdit: boolean = false, IsDelete: boolean = false) {
    if (IsDelete) {
      this.dialog.open(ModalmensajeComponent, {
        width: '320px',
        minWidth: '320px',
        maxWidth: '320px',
        height: '300px',
        maxHeight: '300px',
        minHeight: '300px',
        data: RutaSeleccionada
      });
    } else {
      this.dialog.open(VerRutaComponent, {
        width: '850px',
        height: '650px',
        maxHeight: '650px',
        minHeight: '650px',
        minWidth: '850px',
        maxWidth: '850px',
        data: {RutaSeleccionada, IsEdit}
      });
    }
  }
  public OpenModalDialog(Objeto: any, titulo: string, mensaje: string, IsDelete: boolean) {
    this.dialog.open(MessageDialogComponent, {
      width: '320px',
      minWidth: '320px',
      maxWidth: '320px',
      height: '300px',
      maxHeight: '300px',
      minHeight: '300px',
      data: {Objeto, titulo, mensaje, IsDelete}
    });
  }
  ShowMensaje(message: string, button: string, duration: number, panelClass: any, position: any) {
    this.snackBar.open(message, button, {
      duration,
      panelClass: [`${panelClass}`],
      verticalPosition: position
    });
  }
}
