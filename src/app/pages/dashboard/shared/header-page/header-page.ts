import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header-page',
  imports: [],
  template: `
    <div>
      <p class="text-sm text-(--color-fondo-boton) font-medium">{{ anteTitulo() }}</p>

      <h1 class="mt-1 text-2xl font-bold tracking-tight text-gray-900">{{ titulo() }}</h1>

      <p class="mt-2 text-sm text-gray-500">{{ postTitulo() }}</p>
    </div>
  `,
  styles: ``,
})
export class HeaderPage {
  anteTitulo = input.required<string>();
  titulo = input.required<string>();
  postTitulo = input.required<string>();
}
