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
        'bg-red-100/50 text-red-700/50': tarea().estado == 'Cancelada',
        'bg-blue-100/50 text-blue-700/50': tarea().estado == 'En Progreso',
        'bg-yellow-100/50 text-yellow-700/50': tarea().estado == 'Pendiente',
        'bg-green-100/50 text-green-700/50': tarea().estado == 'Completada',
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
