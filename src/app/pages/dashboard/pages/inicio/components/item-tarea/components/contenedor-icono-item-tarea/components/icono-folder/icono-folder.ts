import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { Tarea } from '../../../../../../../../../../interfaces/tarea-interface';

@Component({
  selector: 'app-icono-folder',
  imports: [NgClass],
  template: `
    <span
      class="p-3 md:p-3 rounded-xl text-2xl  md:text-2xl group-active:hidden"
      [ngClass]="{
        'bg-gray-100/50 text-gray-700/50': tarea().estado == 'Cancelada',
        'bg-(--color-info-bg-light) text-(--color-info-light) dark:bg-(--color-info-bg-dark)/25 dark:text-(--color-info-dark)': tarea().estado == 'En Progreso',
        'bg-(--color-warning-bg-light) text-(--color-warning-light) dark:bg-(--color-warning-bg-dark)/25 dark:text-(--color-warning-dark)': tarea().estado == 'Pendiente',
        'bg-(--color-success-bg-light) text-(--color-success-light) dark:bg-(--color-success-bg-dark)/25 dark:text-(--color-success-dark)': tarea().estado == 'Completada',
      }"
    >
      <i class="fa-solid fa-folder"></i>
    </span>
  `,
  styles: ``,
})
export class IconoFolder {
    tarea = input.required<Tarea>();
}
