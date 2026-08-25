import { Component, input } from '@angular/core';
import { Tarea } from '../../../../../../interfaces/tarea-interface';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-informacion-tarea',
  imports: [CommonModule, NgClass],
  template: `
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
    <!-- Fecha -->
    <div class="rounded-xl border border-gray-200 bg-white p-5">
      <p class="text-xs font-medium uppercase tracking-wide text-gray-400">Fecha</p>

      <p class="mt-2 text-sm font-semibold text-gray-800">
        {{ tarea().fecha | date: 'dd MMM hh:ss a' }}
      </p>
    </div>

    <!-- Prioridad -->
    <div class="rounded-xl border border-gray-200 bg-white p-5">
      <p class="text-xs font-medium uppercase tracking-wide text-gray-400">Prioridad</p>

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
    <div class="rounded-xl border border-gray-200 bg-white p-5">
      <p class="text-xs font-medium uppercase tracking-wide text-gray-400">Categoría</p>

      <p class="mt-2 text-sm font-semibold text-gray-800">
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
