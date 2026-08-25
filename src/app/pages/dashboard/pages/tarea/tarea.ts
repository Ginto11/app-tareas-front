import { Component, computed, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TareaStore } from '../../../../store/tarea.store';
import { EncabezadoTarea } from './components/encabezado-tarea/encabezado-tarea';
import { DetalleTarea } from "./components/detalle-tarea/detalle-tarea";
import { SeccionPage } from '../../shared/seccion-page/seccion-page';

@Component({
  selector: 'app-tarea',
  imports: [EncabezadoTarea, DetalleTarea, SeccionPage],
  template: `
    <app-seccion-page>
      <!-- Header -->
      <app-encabezado-tarea [tarea]="tarea()" />

      <!-- Detalle tarea -->
      <app-detalle-tarea [tarea]="tarea()" />
    </app-seccion-page>
  `,
  styles: ``,
})
export default class Tarea implements OnInit {

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  public tareaStore = inject(TareaStore);

  public tarea = computed(() => this.tareaStore.tareaBuscadaPorId()!);

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    if(!id){
      this.router.navigate(['/dashboard/inicio']);
      return;
    }

    this.tareaStore.buscarTareaPorId(id);
  }
}
