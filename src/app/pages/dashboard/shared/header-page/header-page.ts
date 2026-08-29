import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header-page',
  imports: [],
  template: `
    <div>
      <p class="text-sm text-(--color-primary-light) dark:text-(--color-primary-dark) font-medium">{{ anteTitulo() }}</p>

      <h1 class="mt-1 text-2xl font-bold tracking-tight text-(--color-texto-light) dark:text-(--color-texto-dark)">{{ titulo() }}</h1>

      <p class="mt-2 text-sm text-(--color-texto-secondary-light) dark:text-(--color-texto-secondary-dark)">{{ postTitulo() }}</p>
    </div>
  `,
  styles: ``,
})
export class HeaderPage {
  anteTitulo = input.required<string>();
  titulo = input.required<string>();
  postTitulo = input.required<string>();
}
