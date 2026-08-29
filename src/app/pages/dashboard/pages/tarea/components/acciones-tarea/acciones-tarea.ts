import { Component, input, output } from '@angular/core';
import { Tarea } from '../../../../../../interfaces/tarea-interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-acciones-tarea',
  imports: [RouterLink],
  template: `
    <div class="mt-3 flex items-center justify-end gap-3">
      <a
        routerLink="/dashboard/inicio"
        class="cursor-pointer rounded-lg border border-(--color-border-light) dark:border-(--color-border-dark) px-4 py-2 text-sm font-medium text-(--color-texto-light) dark:text-(--color-texto-dark) transition hover:bg-(--color-fondo-light) dark:hover:text-(--color-fondo-dark)"
      >
        Atras
      </a>

      @if (
        tarea().estado != 'Completada' &&
        tarea().estado != 'Cancelada'
      ) {
        <button
          type="button"
          class="cursor-pointer rounded-lg border border-(--color-border-light) dark:border-(--color-border-dark) px-4 py-2 text-sm font-medium text-(--color-texto-light) dark:text-(--color-texto-dark) transition hover:bg-(--color-fondo-light) dark:hover:text-(--color-fondo-dark)"
        >
          Editar tarea
        </button>

        <button
          type="button"
          (click)="cambiarEstado.emit(tarea().id)"
          class="cursor-pointer rounded-lg bg-(--color-primary-light) dark:bg-(--color-primary-dark) px-4 py-2 text-sm font-medium text-(--color-texto-dark) transition hover:opacity-90"
        >
          Cambiar estado
        </button>
      }
    </div>
  `,
  styles: ``,
})
export class AccionesTarea {
  tarea = input.required<Tarea>();
  cambiarEstado = output<string>();
}
