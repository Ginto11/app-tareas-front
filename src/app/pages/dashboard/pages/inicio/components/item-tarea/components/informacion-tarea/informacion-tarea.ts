import { Component, input } from '@angular/core';
import { Tarea } from '../../../../../../../../interfaces/tarea-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-informacion-tarea',
  imports: [CommonModule],
  template: `
    <div class="flex flex-col gap-2">
      <h2 class="runcate text-sm md:text-base font-medium tracking-tight">
        {{ tarea().titulo }}
      </h2>
      <p class="flex gap-1 md:gap-3 text-gray-500 text-xs">
        <span>
          <i class="fa-regular fa-calendar"></i> {{ tarea().fecha | date: 'dd MMM hh:ss a' }}
        </span>
        <span class="hidden md:block">
          <i class="fa-solid fa-tag"></i> {{ tarea().etiqueta }}
        </span>
        <span> <i class="fa-solid fa-circle-user"></i> {{ tarea().usuario.iniciales }} </span>
      </p>
    </div>
  `,
  styles: ``,
})
export class InformacionTarea {
    tarea = input.required<Tarea>()
}
