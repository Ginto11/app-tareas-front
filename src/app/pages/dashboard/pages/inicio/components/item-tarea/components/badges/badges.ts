import { Component, input } from '@angular/core';
import { Tarea } from '../../../../../../../../interfaces/tarea-interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-badges',
  imports: [NgClass],
  template: `
    <div class="hidden md:flex gap-4">
      <span
        [ngClass]="{
          'bg-red-400/50': tarea().prioridad == 'Alta',
          'bg-yellow-400/50': tarea().prioridad == 'Media',
          'bg-blue-400/50': tarea().prioridad == 'Baja',
        }"
        class="border border-(--color-border) py-1 px-2 rounded-xl"
      >
        {{ tarea().prioridad }}
      </span>
      <span class="border border-(--color-border) shadow py-1 px-2 rounded-xl">
        {{ tarea().categoria }}
      </span>
    </div>
  `,
  styles: ``,
})
export class Badges {
    tarea = input.required<Tarea>();
}
