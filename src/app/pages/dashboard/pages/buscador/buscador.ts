import { Component, computed, inject } from '@angular/core';
import { TareaStore } from '../../../../store/tarea.store';
import { HeaderPage } from '../../shared/header-page/header-page';
import { ListaTareasBuscadas } from './components/lista-tareas-buscadas';
import { CantidadResultados } from './components/cantidad-resultados';
import { SeccionPage } from "../../shared/seccion-page/seccion-page";

@Component({
  selector: 'app-buscador',
  imports: [HeaderPage, ListaTareasBuscadas, CantidadResultados, SeccionPage],
  template: `
    <app-seccion-page>
      <!-- Header -->
      <div class="flex items-center justify-between">
        <app-header-page
          [titulo]="'Tareas encontradas (' + tareas().length + ')'"
          anteTitulo="Resultados"
          postTitulo="Consulta y gestiona las tareas que coinciden con tu búsqueda."
        />

        @if (tareas().length > 0) {
          <app-cantidad-resultados [cantidad]="tareas().length" />
        }
      </div>
      <!-- Lista de tareas -->
      <app-lista-tareas-buscadas [tareas]="tareas()" />
    </app-seccion-page>
  `,
  styles: ``,
})
export default class Buscador {
  public tareaStore = inject(TareaStore);
  tareas = computed(() => this.tareaStore.tareasBuscadas())
}
