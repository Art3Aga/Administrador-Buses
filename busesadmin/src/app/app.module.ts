// import { LoginModelService } from 'src/app/modelos/login-model.service';
import { AccionesService } from './servicios/acciones.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Angular Material
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatToolbarModule,
  MatSidenavModule, MatListModule, MatTabsModule, MatGridListModule, MatExpansionModule,
  MatCardModule, MatSlideToggleModule, MatChipsModule, MatSliderModule, MatTableModule, MatBadgeModule,
  MatSnackBarModule, MatFormFieldModule, MatDialogModule, MatTooltipModule,
  MatButtonToggleModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
// HTTP
import { HttpClientModule } from '@angular/common/http';
// Formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';
import { RutasComponent } from './componentes/rutas/rutas.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { VerRutaComponent } from './componentes/ver-ruta/ver-ruta.component';
import { ModalmensajeComponent } from './componentes/modalmensaje/modalmensaje.component';
import { ComentariosComponent } from './componentes/comentarios/comentarios.component';
import { BitacoraComponent } from './componentes/bitacora/bitacora.component';
import { BusesComponent } from './componentes/buses/buses.component';
import { MessageDialogComponent } from './componentes/message-dialog/message-dialog.component';
import { RecorridosComponent } from './componentes/recorridos/recorridos.component';

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    MenuComponent,
    LoginComponent,
    RutasComponent,
    BienvenidaComponent,
    VerRutaComponent,
    ModalmensajeComponent,
    ComentariosComponent,
    BitacoraComponent,
    BusesComponent,
    MessageDialogComponent,
    RecorridosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatToolbarModule,
    MatSidenavModule, MatListModule, MatTabsModule, MatGridListModule, MatExpansionModule,
    MatCardModule, MatSlideToggleModule, MatChipsModule, MatSliderModule, MatTableModule,
    MatBadgeModule, MatSnackBarModule, MatFormFieldModule, MatDialogModule, MatTooltipModule,
    MatButtonToggleModule, MatDatepickerModule, MatNativeDateModule,
    HttpClientModule
  ],
  providers: [AccionesService],
  bootstrap: [AppComponent],
  entryComponents: [VerRutaComponent, ModalmensajeComponent, MessageDialogComponent]
})
export class AppModule { }
