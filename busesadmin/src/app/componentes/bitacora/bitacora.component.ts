import { BitacoraModelService } from './../../modelos/bitacora-model.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.component.html',
  styleUrls: ['./bitacora.component.scss']
})
export class BitacoraComponent implements OnInit {
  constructor(public bitacoraModel: BitacoraModelService) { }

  ngOnInit() {
    this.bitacoraModel.MostrarListaRegistrosBitacora();
  }

}
