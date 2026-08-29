import { Component, input } from '@angular/core';

@Component({
  selector: 'app-barra-informacion',
  imports: [],
  template: `
    <div
      class="w-full rounded-xl border border-(--color-border-light) dark:border-(--color-border-dark) bg-(--color-fondo-light) dark:bg-(--color-fondo-tertiary-dark) px-5 py-4
              flex items-center justify-between shadow-sm"
    >
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full text-(--color-texto-dark) bg-(--color-primary-light) dark:bg-(--color-primary-dark) flex items-center justify-center">
          <i class="fa-solid fa-trash"></i>
        </div>

        <div class="flex flex-col">
          <span class="text-sm text-gray-500"> Tareas en la papelera </span>

          <span class="text-xl font-semibold text-gray-800"> {{ cantidad() }} </span>
        </div>
      </div>

      <button
        class="cursor-pointer px-4 py-2 rounded-lg text-sm font-medium
             text-red-500 hover:bg-red-50 transition-colors"
      >
        <i class="fa-solid fa-trash-can mr-2"></i>
        Vaciar papelera
      </button>
    </div>
  `,
  styles: ``,
})
export class BarraInformacion {
    cantidad = input.required<number>();
}
