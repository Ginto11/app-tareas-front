import { Component, input } from '@angular/core';
import { Tarea } from '../../../../../../interfaces/tarea-interface';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-informacion-tarea',
  imports: [CommonModule, NgClass],
  template: `
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
    <!-- Fecha -->
    <div class="rounded-xl border border-(--color-border-light) dark:border-(--color-border-dark) bg-(--color-fondo-light) dark:bg-(--color-fondo-tertiary-dark) p-5">
      <p class="text-xs font-medium uppercase tracking-wide text-(--color-texto-tertiary-light) dark:text-(--color-texto-tertiary-dark)">Fecha</p>

      <p class="mt-2 text-sm font-semibold text-(--color-texto-light) dark:text-(--color-texto-dark)">
        {{ tarea().fecha | date: 'dd MMM hh:ss a' }}
      </p>
    </div>

    <!-- Prioridad -->
    <div class="rounded-xl border border-(--color-border-light) dark:border-(--color-border-dark) bg-(--color-fondo-light) dark:bg-(--color-fondo-tertiary-dark) p-5">
      <p class="text-xs font-medium uppercase tracking-wide text-(--color-texto-tertiary-light) dark:text-(--color-texto-tertiary-dark)">Prioridad</p>

      <p
        class="mt-2 text-sm font-semibold"
        [ngClass]="{
          'text-red-600': tarea().prioridad === 'Alta',
          'text-yellow-600': tarea().prioridad === 'Media',
          'text-green-600': tarea().prioridad === 'Baja',
        }"
      >
        {{ tarea().prioridad }}
      </p>
    </div>

    <!-- Categoría -->
    <div class="rounded-xl border border-(--color-border-light) dark:border-(--color-border-dark) bg-(--color-fondo-light) dark:bg-(--color-fondo-tertiary-dark) p-5">
      <p class="text-xs font-medium uppercase tracking-wide text-(--color-texto-tertiary-light) dark:text-(--color-texto-tertiary-dark)">Categoría</p>

      <p class="mt-2 text-sm font-semibold text-(--color-texto-light) dark:text-(--color-texto-dark)">
        {{ tarea().categoria }}
      </p>
    </div>
  </div>

  `,
  styles: ``,
})
export class InformacionTarea {
  tarea = input.required<Tarea>();
}
