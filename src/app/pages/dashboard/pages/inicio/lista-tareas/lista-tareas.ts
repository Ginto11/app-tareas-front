import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemTarea } from '../item-tarea/item-tarea';
import { tap } from 'rxjs';
import { TareaStore } from '../../../../../store/tarea.store';

@Component({
  selector: 'app-lista-tareas',
  imports: [ItemTarea],
  templateUrl: './lista-tareas.html',
  styles: ``,
})
export default class ListaTareas implements OnInit {
  

  public tareaStore = inject(TareaStore);

  private route = inject(ActivatedRoute);
  
  public texto = signal<string>('');
  
  ngOnInit(): void {
    this.route.queryParams.pipe(
      tap(({ estado }) => this.tareaStore.buscarTareasPorEstado(estado ?? ''))
    ).subscribe();
  }
}
