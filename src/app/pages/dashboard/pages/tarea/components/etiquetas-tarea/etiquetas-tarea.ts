import { Component, input } from '@angular/core';

@Component({
  selector: 'app-etiquetas-tarea',
  imports: [],
  template: `
    <div class="mt-3 rounded-xl border border-(--color-border-light) dark:border-(--color-border-dark) bg-(--color-fondo-light) dark:bg-(--color-fondo-tertiary-dark) p-5">
      <p class="mb-3 text-xs font-medium uppercase tracking-wide text-(--color-texto-tertiary-light) dark:text-(--color-texto-tertiary-dark)">Etiquetas</p>

      <div class="flex flex-wrap gap-2">
        @for (etiqueta of etiquetas().split(','); track etiqueta) {
          <span class="rounded-md bg-(--color-fondo-tertiary-light) dark:bg-(--color-fondo-secondary-dark) px-3 py-1 text-xs font-medium text-(--color-texto-light) dark:text-(--color-texto-dark)">
            {{ etiqueta.trim() }}
          </span>
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class EtiquetasTarea {
  etiquetas = input.required<string>();
}
