import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { Tarea } from '../../../../../../../../../../interfaces/tarea-interface';

@Component({
  selector: 'app-icono-folder-open',
  imports: [NgClass],
  template: `
    <span
      class="p-3 md:p-3 rounded-xl text-2xl md:text-2xl hidden group-active:block"
      [ngClass]="{
        'bg-red-100/50 text-red-700': tarea().estado == 'Cancelada',
        'bg-(--color-info-bg-light) text-(--color-info-light) dark:bg-(--color-info-bg-dark)/25 dark:text-(--color-info-dark)': tarea().estado == 'En Progreso',
        'bg-(--color-warning-bg-light) text-(--color-warning-light) dark:bg-(--color-warning-bg-dark)/25 dark:text-(--color-warning-dark)': tarea().estado == 'Pendiente',
        'bg-(--color-success-bg-light) text-(--color-success-light) dark:bg-(--color-success-bg-dark)/25 dark:text-(--color-success-dark)': tarea().estado == 'Completada',
      }"
    >
      <i class="fa-solid fa-folder-open"></i>
    </span>
  `,
  styles: ``,
})
export class IconoFolderOpen {
    tarea = input.required<Tarea>();
}
