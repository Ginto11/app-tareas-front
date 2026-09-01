import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BtnTheme } from '../../../../../shared/btn-theme/btn-theme';
import { EstadoMenuService } from '../../../../../services/estado-menu.service';
import { Router } from '@angular/router';
import { TareaStore } from '../../../../../store/tarea.store';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header-dashboard-menu-web',
  imports: [RouterLink, RouterLinkActive, BtnTheme],
  template: `
    <div class="hidden md:flex gap-4">
      <div class="relative flex-1">
        <i
          class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        ></i>

        <input
          #busquedaM
          type="text"
          (keydown.enter)="buscarTareas(busquedaM)"
          placeholder="Buscar tareas..."
          class="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-(--color-fondo-boton) focus:bg-white focus:ring-2 focus:ring-(--color-fondo-boton)"
        />
      </div>
      <button
        (click)="buscarTareas(busquedaM)"
        class="cursor-pointer shadow px-3 rounded-xl
                bg-(--color-primary-light) hover:bg-(--color-primary-hover-light) text-(--color-texto-dark) 
                dark:bg-(--color-primary-light)"
      >
        Buscar
      </button>
      <a
        routerLink="/dashboard/nueva-tarea"
        routerLinkActive="!bg-(--color-primary-light)"
        [routerLinkActiveOptions]="{ exact: true }"
        class="
                px-3 rounded-xl flex items-center shadow
                bg-(--color-primary-light) hover:bg-(--color-primary-hover-light) text-(--color-texto-dark)
                dark:bg-(--color-primary-light) dark:text-(--color-texto-dark)"
      >
        <i class="fa-solid fa-plus"></i>
        Nueva Tarea
      </a>
      <app-btn-theme />
    </div>
  `,
  styles: ``,
})
export class HeaderDashboardMenuWeb {
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
