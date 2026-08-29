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
          'text-(--color-danger-light) dark:text-(--color-danger-dark)': tarea().prioridad == 'Alta',
          'text-(--color-warning-light) dark:text-(--color-warning-dark)': tarea().prioridad == 'Media',
          'text-(--color-info-light) dark:text-(--color-info-dark)': tarea().prioridad == 'Baja',
        }"
        class="py-1 px-2 rounded-xl font-medium"
      >
        {{ tarea().prioridad }}
      </span>
      <span class="bg-(--color-accent-soft-light) text-(--color-accent-light) dark:bg-(--color-accent-soft-dark)/50 dark:text-(--color-accent-dark) border border-(--color-border-light) dark:border-(--color-border-dark) shadow py-1 px-2 rounded-xl">
        {{ tarea().categoria }}
      </span>
    </div>
  `,
  styles: ``,
})
export class Badges {
    tarea = input.required<Tarea>();
}
