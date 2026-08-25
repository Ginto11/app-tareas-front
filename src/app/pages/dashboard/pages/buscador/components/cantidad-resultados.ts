import { Component, input } from '@angular/core';

@Component({
  selector: 'app-cantidad-resultados',
  imports: [],
  template: `
    <!-- Cantidad de tareas encontradas -->
    <span
      class="hidden md:hidden rounded-full bg-gray-100 md:px-4 py-2 text-sm font-semibold text-gray-700"
    >
      {{ cantidad() }} resultados
    </span>
  `,
  styles: ``,
})
export class CantidadResultados {
  cantidad = input.required<number>();
}
