import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { BtnTheme } from '../../../../../shared/btn-theme/btn-theme';
import { TareaStore } from '../../../../../store/tarea.store';
import { EstadoMenuService } from '../../../../../services/estado-menu.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header-dashboard-menu-mobile',
  imports: [RouterLink, RouterLinkActive, BtnTheme],
  template: `
    <div class="flex md:hidden gap-2">
      <div class="relative flex-1">
        <i
          class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        ></i>

        <input
          #busqueda
          type="text"
          (keydown.enter)="buscarTareas(busqueda)"
          placeholder="Buscar tareas..."
          class="w-full rounded-xl border border-gray-200 bg-gray-50 py-1 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-(--color-fondo-boton) focus:bg-white focus:ring-2 focus:ring-(--color-fondo-boton)"
        />
      </div>
      <button
        (click)="buscarTareas(busqueda)"
        class="cursor-pointer shadow px-2 md:px-3 rounded-xl
                bg-(--color-primary-light) hover:bg-(--color-primary-hover-light) text-(--color-texto-dark)
                dark:bg-(--color-primary-light) dark:text-(--color-texto-dark)"
      >
        Buscar
      </button>
      <a
        routerLink="/dashboard/nueva-tarea"
        routerLinkActive="!bg-(--color-primary-dark)"
        [routerLinkActiveOptions]="{ exact: true }"
        class="px-2 md:px-3 rounded-xl flex items-center shadow
                bg-(--color-primary-light) hover:bg-(--color-primary-hover-light) text-(--color-texto-dark)
                dark:bg-(--color-primary-light) dark:text-(--color-texto-dark)"
      >
        Nueva
      </a>
      <app-btn-theme class="hidden md:block h-3 w-3" />
    </div>
  `,
  styles: ``,
})
export class HeaderDashboardMenuMobile {
  public estadoMenuService = inject(EstadoMenuService);
  private tareaStore = inject(TareaStore);
  private router = inject(Router);

  buscarTareas(input: HTMLInputElement): void {
    const valor = input.value;

    if (valor == '') {
      Swal.fire({
        icon: 'warning',
        text: 'Ingrese texto en el input, por favor.',
      });
      return;
    }
    input.value = '';
    this.tareaStore.buscarTareasPorNombre(valor);
    this.router.navigate(['/dashboard/buscador'], { queryParams: { nombre: valor } });
  }
}
