import { RecorridosComponent } from './componentes/recorridos/recorridos.component';
import { BusesComponent } from './componentes/buses/buses.component';
import { AppComponent } from './app.component';
import { BitacoraComponent } from './componentes/bitacora/bitacora.component';
import { ComentariosComponent } from './componentes/comentarios/comentarios.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { RutasComponent } from './componentes/rutas/rutas.component';


const routes: Routes = [
  // {path: 'login', component: LoginComponent},
  {path: 'home', component: MenuComponent},
  {path: 'welcome', component: BienvenidaComponent},
  {path: 'rutas', component: RutasComponent},
  {path: 'comentarios', component: ComentariosComponent},
  {path: 'bitacora', component: BitacoraComponent},
  // {path: 'login', component: LoginComponent},
  {path: 'login', component: AppComponent},
  {path: 'buses', component: BusesComponent},
  {path: 'recorridos', component: RecorridosComponent},
  {path: '**', redirectTo: 'welcome'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
