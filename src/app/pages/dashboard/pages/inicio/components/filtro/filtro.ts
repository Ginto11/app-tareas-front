import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TareaStore } from '../../../../../../store/tarea.store';

@Component({
  selector: 'app-filtro',
  imports: [],
  template: `
    <div class="flex gap-2 text-gray-500  border-(--color-border) text-center text-sm px-1  md:px-3 items-center">
      <p class="flex items-center gap-1"><i class="fa-solid fa-filter"></i> Filtrar por: </p>
      <select class="bg-white focus:border-(--color-fondo-boton) cursor-pointer rounded px-2 border-2 border-(--color-border) outline-none" (change)="navegar($event)">
        <option selected value="">Estado</option>
        <option value="prioridad">Prioridad</option>
      </select>
    </div>
  `,
  styles: ``,
})
export class Filtro {
  private tareaStore = inject(TareaStore);
  private router = inject(Router);

  navegar(event: Event) {
    /* VALOR DEL INPUT */
    const value = (event.target as HTMLSelectElement).value;
    /* PERMITE QUE SI SE ESTA FILTRANDO POR CUALQUIER PARAM, SE REGRESE LA VISTA A LA INICIAL */
    this.router.navigate(['/dashboard/inicio']);
    this.tareaStore.filtrarPor(value);
  }
}
