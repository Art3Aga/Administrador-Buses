import { IParadas } from './IParadas';
export interface IHorario {
  id_horario?: string;
  nombre_ruta?: string;
  nombre_bus?: string;
  horario_ida: string;
  horario_regreso: string;
  nombre_parada: string;
  latitud: string;
  longitud: string;
  id_bus: string;
  id_ruta: string;
}
