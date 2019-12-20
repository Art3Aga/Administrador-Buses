import { FechaTiempoService } from './../../modelos/fecha-tiempo.service';
import { BitacoraModelService } from './../../modelos/bitacora-model.service';
import { AccionesService } from './../../servicios/acciones.service';
import { LocalstorageService } from './../../servicios/localstorage.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  title: string;
  usuario: any;
  constructor(private router: Router, private activate: ActivatedRoute,
              public storageService: LocalstorageService, public accionesService: AccionesService,
              public bitacoraModel: BitacoraModelService, public fechatiempo: FechaTiempoService) { }

  ngOnInit() {
    this.title = 'Administracion';
    this.storageService.VerificarStorage('usuario');
    this.usuario = this.storageService.getLocalStorage;
  }
  getTitulo(texto: string) {
    this.title = texto;
  }
  CerrarSesion() {
    this.storageService.VerificarStorageSiguientePagina('siguientePagina');
    this.storageService.VerificarStorage('usuario');
    this.router.navigateByUrl('/login');
    this.bitacoraModel.GuardarBitacora(`Se cerró sesion en la cuenta de ${this.storageService.getLocalStorage.usuario} el
          ${this.fechatiempo.getHoy} a las ${this.fechatiempo.getTiempo12H}`, 'Sesion Cerrada');
    this.accionesService.ShowMensaje('Adios!', '', 1000, 'niceMsm', 'bottom');
    localStorage.clear();
  }

}
