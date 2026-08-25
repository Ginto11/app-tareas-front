import { Component, input } from '@angular/core';

@Component({
  selector: 'app-etiquetas-tarea',
  imports: [],
  template: `
    <div class="mt-3 rounded-xl border border-gray-200 bg-white p-5">
      <p class="mb-3 text-xs font-medium uppercase tracking-wide text-gray-400">Etiquetas</p>

      <div class="flex flex-wrap gap-2">
        @for (etiqueta of etiquetas().split(','); track etiqueta) {
          <span class="rounded-md bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
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
