import { Component, inject, input } from '@angular/core';
import { TareaStore } from '../../../../../store/tarea.store';
import { ItemTarea } from "../../inicio/components/item-tarea/item-tarea";
import { Tarea } from '../../../../../interfaces/tarea-interface';

@Component({
  selector: 'app-lista-tareas-buscadas',
  imports: [ItemTarea],
  template: `
    <!-- Lista de tareas buscadas -->
    <div class="flex flex-col gap-3">
      @if (tareas().length > 0) {
        @for (tarea of tareas(); track tarea.id) {
          <app-item-tarea [dataTarea]="tarea" />
        }
      } @else {
        <p>No se encontraron resultados.</p>
      }
    </div>
  `,
  styles: ``,
})
export class ListaTareasBuscadas {
    tareas  = input.required<Tarea[]>();
}
