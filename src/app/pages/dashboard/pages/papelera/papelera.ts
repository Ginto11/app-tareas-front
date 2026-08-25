import { Component, inject } from '@angular/core';
import { HeaderPage } from '../../shared/header-page/header-page';
import { SeccionPage } from '../../shared/seccion-page/seccion-page';
import { TareaStore } from '../../../../store/tarea.store';
import { BarraInformacion } from './components/barra-informacion/barra-informacion';
import { ItemTarea } from '../inicio/components/item-tarea/item-tarea';

@Component({
  selector: 'app-papelera',
  imports: [HeaderPage, SeccionPage, BarraInformacion, ItemTarea],
  template: `
    <app-seccion-page>
      <!-- Header -->
      <app-header-page
        anteTitulo="Papelera"
        titulo="Tareas canceladas"
        postTitulo="Aquí encontrarás las tareas que has cancelado. Puedes restaurarlas o eliminarlas permanentemente."
      />

      <!-- Barra de información -->
      <app-barra-informacion [cantidad]="tareaStore.papeleraTareas().length" />

      <!-- Lista -->
      <div class="flex flex-col gap-3">
        <!-- Tarea -->
        @for (tarea of tareaStore.papeleraTareas(); track tarea.id) {
          <app-item-tarea [dataTarea]="tarea" />
        }
      </div>
    </app-seccion-page>
  `,
  styles: ``,
})
export default class Papelera {
  public tareaStore = inject(TareaStore);
}
