import { Component, input } from '@angular/core';
import { Tarea } from '../../../../../../interfaces/tarea-interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-encabezado-tarea',
  imports: [NgClass],
  template: `
    <div class="flex items-start justify-between gap-6">
      <div class="w-full flex items-start gap-4">
        <!-- Avatar -->
        <div
          class="bg-(--color-fondo-boton) flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
        >
          {{ tarea().usuario.iniciales }}
        </div>

        <div class="w-full">
          <div class="mb-1 w-full text-sm flex justify-between text-gray-500">
            <p>
              {{ tarea().categoria }}
            </p>
            <span
              class="inline md:hidden rounded-full px-4 text-sm font-medium"
              [ngClass]="{
                'bg-yellow-100 text-yellow-700':
                  tarea().estado === 'Pendiente',
                'bg-blue-100 text-blue-700':
                  tarea().estado === 'En Progreso',
                'bg-green-100 text-green-700':
                  tarea().estado === 'Completada',
                'bg-red-100 text-red-700': tarea().estado === 'Cancelada',
              }"
            >
              {{ tarea().estado }}
            </span>
          </div>

          <h2 class="md:text-2xl font-bold tracking-tight text-(--color-texto-light)">
            {{ tarea().titulo }}
          </h2>

          <p class="mt-1 text-sm text-gray-500">
            Creada por {{ tarea().usuario.nombre }}
          </p>
        </div>
      </div>

      <!-- Estado -->
      <span
        class="hidden md:block rounded-full text-nowrap w-30 px-4 py-1.5 text-sm font-medium"
        [ngClass]="{
          'bg-yellow-100 text-yellow-700': tarea().estado === 'Pendiente',
          'bg-blue-100 text-blue-700': tarea().estado === 'En Progreso',
          'bg-green-100 text-green-700': tarea().estado === 'Completada',
          'bg-red-100 text-red-700': tarea().estado === 'Cancelada',
        }"
      >
        {{ tarea().estado }}
      </span>
    </div>
  `,
  styles: ``,
})
export class EncabezadoTarea {
  tarea = input.required<Tarea>();
}
