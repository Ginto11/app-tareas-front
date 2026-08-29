import { Component, input } from '@angular/core';

@Component({
  selector: 'app-descripcion-tarea',
  imports: [],
  template: `
    <div class="mt-3 rounded-xl border border-(--color-border-light) dark:border-(--color-border-dark) bg-(--color-fondo-light) dark:bg-(--color-fondo-tertiary-dark) p-5">
      <p class="mb-3 text-xs font-medium uppercase tracking-wide text-(--color-texto-tertiary-light) dark:text-(--color-texto-tertiary-dark)">
        Descripción (Opcional)
      </p>

      <div class="flex flex-wrap gap-2">
        <p class="text-sm font-semibold text-(--color-texto-light) dark:text-(--color-texto-dark)">
          {{ descripcion() }}
        </p>
      </div>
    </div>
  `,
  styles: ``,
})
export class DescripcionTarea {
  descripcion = input.required<string>();
}
