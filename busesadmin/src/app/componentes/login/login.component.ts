import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { AccionesService } from 'src/app/servicios/acciones.service';
import { AdminmodelService } from 'src/app/modelos/adminmodel.service';
import { LocalstorageService } from 'src/app/servicios/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide: boolean;
  constructor(private router: Router, private accionesService: AccionesService,
              public adminmodel: AdminmodelService, public fb: FormBuilder,
              public storageService: LocalstorageService) {
    this.usuario = new FormControl('', [Validators.required]);
    this.clave = new FormControl('', [Validators.required]);
    this.storageService.VerificarStorageSiguientePagina('siguientePagina');
  }
  usuario: FormControl;
  clave: FormControl;
  formLogin: FormGroup;

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
            this.storageService.GuardarEnStorage('usuario', JSON.stringify(respuesta));
            this.router.navigateByUrl('/welcome');
            this.storageService.GuardarEnStorage('siguientePagina', true);
            this.storageService.VerificarStorageSiguientePagina('siguientePagina');
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

}
