import { Component, inject } from '@angular/core';
import { Link } from '../../../../interfaces/link.interface';
import { RouterOutlet } from '@angular/router';
import { TareaStore } from '../../../../store/tarea.store';
import { GridItemResumen } from './components/grid-item-resumen/grid-item-resumen';
import { ContenedorLinks } from "./components/contenedor-links/contenedor-links";
import { HeaderPage } from '../../shared/header-page/header-page';
import { SeccionPage } from '../../shared/seccion-page/seccion-page';

@Component({
  selector: 'app-inicio',
  imports: [RouterOutlet, GridItemResumen, ContenedorLinks, HeaderPage, SeccionPage],
  template: `
    <app-seccion-page>

      <app-header-page 
        anteTitulo="Resumen"
        titulo="Dashboard"
        postTitulo="Organiza tu día de un vistazo. Consulta el estado de tus tareas, revisa tus pendientes y mantén el control de todo lo que tienes por completar." />

      <!-- Grid de items de resumen -->
      <app-grid-item-resumen 
        [cantidadCompletas]="tareaStore.cantidadTareasCompletas()"
        [cantidadEnProgreso]="tareaStore.cantidadTareasEnProgreso()"
        [cantidadParaHoy]="tareaStore.cantidadTareasParaHoy()"
        [cantidadPendientes]="tareaStore.cantidadTareasPendientes()"
      />
      <div>
        <!-- Contenedor de links -->
        <app-contenedor-links [links]="links" />
        <!-- Seccion donde se renderiza la lista -->
        <div>
          <router-outlet />
        </div>
      </div>
    </app-seccion-page>
  `,
  styles: ``,
})
export default class Inicio {
  public tareaStore = inject(TareaStore);

  links: Link[] = [
    {
      id: 1,
      texto: 'Todas',
      ruta: '/dashboard/inicio/lista',
      queryParams: {},
    },
    {
      id: 2,
      texto: 'En Progreso',
      ruta: '/dashboard/inicio/lista',
      queryParams: { estado: 'en progreso' },
    },
    {
      id: 3,
      texto: 'Completadas',
      ruta: '/dashboard/inicio/lista',
      queryParams: { estado: 'completada' },
    },
    {
      id: 4,
      texto: 'Pendientes',
      ruta: '/dashboard/inicio/lista',
      queryParams: { estado: 'pendiente' },
    },
  ];
}
