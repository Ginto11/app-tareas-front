import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemTarea } from '../item-tarea/item-tarea';
import { tap } from 'rxjs';
import { TareaStore } from '../../../../../../store/tarea.store';

@Component({
  selector: 'app-lista-tareas',
  imports: [ItemTarea],
  template: `
    <div class="py-5 flex flex-col gap-3">
      @for (tarea of tareaStore.tareasSeleccionadas(); track tarea.id) {
        <app-item-tarea [dataTarea]="tarea" />
      }
    </div>
  `,
  styles: ``,
})
export default class ListaTareas implements OnInit {
  public tareaStore = inject(TareaStore);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  public texto = signal<string>('');

  ngOnInit(): void {

    if(this.tareaStore.filtroPor() === ''){
      this.router.navigate(['/dashboard/inicio'])
    }

    this.route.queryParams
      .pipe(tap((params) => {
        this.tareaStore.buscarTareasPorEstado(params['estado'] ?? params['prioridad'] ?? '')
      }))
      .subscribe();
  }
}
