import { Component, inject } from '@angular/core';
import { ItemResumen } from "../../components/item-resumen/item-resumen";
import { LinkInicio } from './link-inicio/link-inicio';
import { Link } from '../../../../interfaces/link.interface';
import { RouterOutlet } from '@angular/router';
import { TareaStore } from '../../../../store/tarea.store';


@Component({
  selector: 'app-inicio',
  imports: [ItemResumen, LinkInicio, RouterOutlet],
  templateUrl: './inicio.html',
  styles: ``,
})
export default class Inicio {

  public tareaStore = inject(TareaStore);

  links: Link[] = [
    {
      id: 1,
      texto: 'Todas',
      ruta: '/dashboard/inicio/lista',
      queryParams: {}
    },
    {
      id: 2,
      texto: 'En Progreso',
      ruta: '/dashboard/inicio/lista',
      queryParams: { estado: 'en progreso' }
    },
    {
      id: 3,
      texto: 'Completadas',
      ruta: '/dashboard/inicio/lista',
      queryParams: { estado: 'completada' }
    },
    {
      id: 4,
      texto: 'Pendientes',
      ruta: '/dashboard/inicio/lista',
      queryParams: { estado: 'pendiente' }
    }
  ]

}
