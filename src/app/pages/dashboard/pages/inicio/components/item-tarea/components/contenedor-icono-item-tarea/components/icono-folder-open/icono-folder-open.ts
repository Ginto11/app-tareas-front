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
        'bg-blue-100/50 text-blue-700': tarea().estado == 'En Progreso',
        'bg-yellow-100/50 text-yellow-700': tarea().estado == 'Pendiente',
        'bg-green-100/50 text-green-700': tarea().estado == 'Completada',
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
