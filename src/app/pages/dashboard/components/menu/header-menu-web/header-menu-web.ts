import { Component } from '@angular/core';

@Component({
  selector: 'app-header-menu-web',
  imports: [],
  template: `
    <div class="flex flex-row justify-between items-center h-20 px-4 bg-(--color-fondo-tertiary-dark)">
      <div class="flex items-center gap-2">
          <span class="w-10 h-10 bg-(--color-primary-dark) text-(--color-texto-dark) flex justify-center items-center rounded-xl">
              <i class="fa-solid fa-list-check text-2xl"></i>
          </span>
          <h1 class="text-3xl h-20 flex font-medium items-center">Tareas</h1>
      </div>
  </div>
  `,
  styles: ``,
})
export class HeaderMenuWeb {

}
