import { Component, inject } from '@angular/core';
import { ItemTarea } from '../inicio/item-tarea/item-tarea';
import { TareaStore } from '../../../../store/tarea.store';

@Component({
  selector: 'app-buscador',
  imports: [ItemTarea],
  templateUrl: './buscador.html',
  styles: ``,
})
export default class Buscador {

  public tareaStore = inject(TareaStore);


}
