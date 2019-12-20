import { UsuarioModelService } from './../../modelos/usuario-model.service';
import { IComentario } from './../../interfaces/IComentario';
import { ComentariomodelService } from './../../modelos/comentariomodel.service';
import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicios/crud.service';
import { AccionesService } from 'src/app/servicios/acciones.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {
  constructor(public crud: CrudService, public accionesService: AccionesService,
              public comentariomodel: ComentariomodelService, public usuariomodel: UsuarioModelService) { }
  ngOnInit() {
    this.comentariomodel.MostrarListaComentarios();
  }
}
