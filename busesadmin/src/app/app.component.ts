import { FechaTiempoService } from './modelos/fecha-tiempo.service';
import { BitacoraModelService } from './modelos/bitacora-model.service';
import { LocalstorageService } from './servicios/localstorage.service';
import { IAdmins } from './interfaces/IAdmins';
import { AdminmodelService } from './modelos/adminmodel.service';
import { AccionesService } from './servicios/acciones.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hide: boolean;
  constructor(private router: Router, private accionesService: AccionesService,
              public adminmodel: AdminmodelService, public fb: FormBuilder,
              public storageService: LocalstorageService, public bitacoraModel: BitacoraModelService,
              public fechatiempo: FechaTiempoService) {
    this.usuario = new FormControl('', [Validators.required]);
    this.clave = new FormControl('', [Validators.required]);
    this.storageService.VerificarStorageSiguientePagina('siguientePagina');
  }
  usuario: FormControl;
  clave: FormControl;

  Login() {
    if (!this.usuario.invalid && !this.clave.invalid) {
      let respuesta: any;
      this.adminmodel.setDatosAdmin = {
        usuario: this.usuario.value,
        clave: this.clave.value,
      };
      this.adminmodel.VerificarCuenta().subscribe(
        data => {
          respuesta = JSON.parse(data);
          if (respuesta.usuario) {
            this.accionesService.ShowMensaje(`Bienvenido ${respuesta.usuario}`, '', 3000, 'niceMsm', 'bottom');
            this.Navegar(respuesta);
            this.RegistrarBitacora(respuesta);
          } else {
            this.accionesService.ShowMensaje(`${respuesta.mensaje}`, '', 3000, 'errorMsm', 'bottom');
          }
        },
        error => console.log(error)
      );
    } else {
      this.accionesService.ShowMensaje(`Faltan Datos en el Formulario`, '', 2000, 'errorMsm', 'bottom');
    }
  }
  RegistrarBitacora(response: any) {
    this.fechatiempo.Fecha();
    this.bitacoraModel.setDatosBitacora = {
      id_admin: response.id_admin,
      mensaje: `Se Inició Sesion con la Cuenta de ${response.usuario} el ${this.fechatiempo.getHoy} a las ${this.fechatiempo.getTiempo12H}`,
      titulo: 'Inicio Sesion',
      fecha: `${this.fechatiempo.getHoy}-${this.fechatiempo.getTiempo12H}`
    };
    this.bitacoraModel.RegistrarBitacora().subscribe(data => {}, error => console.log(error));
  }
  Navegar(response: any) {
    this.storageService.GuardarEnStorage('usuario', JSON.stringify(response));
    this.router.navigateByUrl('/welcome');
    this.storageService.GuardarEnStorage('siguientePagina', true);
    this.storageService.VerificarStorageSiguientePagina('siguientePagina');
    this.adminmodel.setDatosAdmin = {usuario: '', clave: ''};
  }

}
