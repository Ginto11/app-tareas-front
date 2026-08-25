import { Component, output } from '@angular/core';

@Component({
  selector: 'app-boton-nueva-categoria',
  imports: [],
  template: `
    <button
      type="button"
      (click)="onClick.emit()"
      class="flex cursor-pointer items-center gap-2 rounded-xl bg-(--color-fondo-boton) px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-(--color-fondo-boton)/30"
    >
      <i class="fa-solid fa-plus"></i>
      Nueva
    </button>
  `,
  styles: ``,
})
export class BotonNuevaCategoria {
    onClick = output();
}
