import { Component, inject, input } from '@angular/core';
import { Tarea } from '../../../../../../../../interfaces/tarea-interface';
import { TareaStore } from '../../../../../../../../store/tarea.store';

@Component({
  selector: 'app-botones-papelera',
  imports: [],
  template: `
    <div class="flex items-center gap-2 ml-4">
      <!-- Restaurar -->
      <button
        type="button"
        (click)="tareaStore.restaurarTareaPorId(tarea().id)"
        title="Restaurar tarea"
        class="w-10 h-10 rounded-full
                 flex items-center justify-center cursor-pointer
                 text-gray-500
                 hover:text-green-600
                 hover:bg-green-50
                 transition-colors"
      >
        <i class="fa-solid fa-rotate-left"></i>
      </button>

      <!-- Eliminar -->
      <button
        title="Eliminar permanentemente"
        class="w-10 h-10 rounded-full
                 flex items-center justify-center cursor-pointer
                 text-gray-500
                 hover:text-red-500
                 hover:bg-red-50
                 transition-colors"
      >
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `,
  styles: ``,
})
export class BotonesPapelera {
  tarea = input.required<Tarea>();
  tareaStore = inject(TareaStore);
}
