import { Component, input } from '@angular/core';

@Component({
  selector: 'app-descripcion-tarea',
  imports: [],
  template: `
    <div class="mt-3 rounded-xl border border-gray-200 bg-white p-5">
      <p class="mb-3 text-xs font-medium uppercase tracking-wide text-gray-400">
        Descripción (Opcional)
      </p>

      <div class="flex flex-wrap gap-2">
        <p class="text-sm font-semibold text-gray-800">
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
