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
          class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-semibold bg-(--color-primary-light) dark:bg-(--color-primary-dark) text-(--color-texto-dark)"
        >
          {{ tarea().usuario.iniciales }}
        </div>

        <div class="w-full">
          <div class="mb-1 w-full text-sm flex justify-between text-(--color-primary-light) dark:text-(--color-primary-dark)">
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

          <h2 class="md:text-2xl font-bold tracking-tight text-(--color-texto-light)  dark:text-(--color-texto-dark)">
            {{ tarea().titulo }}
          </h2>

          <p class="mt-1 text-sm text-(--color-texto-secondary-light)  dark:text-(--color-texto-secondary-dark)">
            Creada por {{ tarea().usuario.nombre }}
          </p>
        </div>
      </div>

      <!-- Estado -->
      <span
        class="hidden md:block rounded-full text-nowrap w-30 px-4 py-1.5 text-sm font-medium"
        [ngClass]="{
          'bg-(--color-warning-bg-light) text-(--color-warning-light) dark:bg-(--color-warning-bg-dark)/25 dark:text-(--color-warning-dark)': tarea().estado === 'Pendiente',
          'bg-(--color-info-bg-light) text-(--color-info-light) dark:bg-(--color-info-bg-dark)/25 dark:text-(--color-info-dark)': tarea().estado === 'En Progreso',
          'bg-(--color-success-bg-light) text-(--color-success-light) dark:bg-(--color-success-bg-dark)/25 dark:text-(--color-success-dark)': tarea().estado === 'Completada',
          'bg-(--color-danger-bg-light) text-(--color-danger-light) dark:bg-(--color-danger-bg-dark)/25 dark:text-(--color-danger-dark)': tarea().estado === 'Cancelada',
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
