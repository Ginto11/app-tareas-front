import { Component, input } from '@angular/core';
import { ItemResumen } from '../item-resumen/item-resumen';

@Component({
  selector: 'app-grid-item-resumen',
  imports: [ItemResumen],
  template: `
    <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
      <app-item-resumen
        icono="fa-solid fa-inbox"
        nombre="Pendientes"
        [cantidad]="cantidadPendientes()"
      />
      <app-item-resumen
        icono="fa-solid fa-bars-progress"
        nombre="En Progreso"
        [cantidad]="cantidadEnProgreso()"
      />
      <app-item-resumen
        icono="fa-solid fa-circle-check"
        nombre="Completadas"
        [cantidad]="cantidadCompletas()"
      />
      <app-item-resumen 
        icono="fa-solid fa-clock" 
        nombre="Para hoy" 
        [cantidad]="cantidadParaHoy()" />
    </div>
  `,
  styles: ``,
})
export class GridItemResumen {
    cantidadPendientes = input.required<number>();
    cantidadCompletas = input.required<number>();
    cantidadParaHoy = input.required<number>();
    cantidadEnProgreso = input.required<number>();
}
