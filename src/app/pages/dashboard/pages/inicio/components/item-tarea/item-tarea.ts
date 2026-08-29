import { Component, input } from '@angular/core';
import { Tarea } from '../../../../../../interfaces/tarea-interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContenedorIconoItemTarea } from './components/contenedor-icono-item-tarea/contenedor-icono-item-tarea';
import { InformacionTarea } from './components/informacion-tarea/informacion-tarea';
import { Badges } from './components/badges/badges';
import { BotonesPapelera } from "./components/botones-papelera/botones-papelera";

@Component({
  selector: 'app-item-tarea',
  imports: [CommonModule, RouterLink, ContenedorIconoItemTarea, InformacionTarea, Badges, BotonesPapelera],
  template: `
    <a
      [routerLink]="
        dataTarea().estado !== 'Cancelada'
          ? ['/dashboard/tarea', dataTarea().id]
          : null"
      class="group text-(--color-texto-light) w-full 
        h-25 rounded-2xl flex items-center 
        justify-between px-5 shadow  hover:shadow-gray-400
        border-l-3
        bg-(--color-task-light) hover:bg-(--color-task-hover-light) dark:bg-(--color-task-dark) dark:hover:bg-(--color-task-hover-dark)"
      [ngClass]="{
        'border-gray-400/50 cursor-default': dataTarea().estado == 'Cancelada',
        'border-(--color-info-light) dark:border-(--color-info-dark) cursor-pointer': dataTarea().estado == 'En Progreso',
        'border-(--color-warning-light) dark:border-(--color-warning-dark) cursor-pointer': dataTarea().estado == 'Pendiente',
        'border-(--color-success-light) dark:border-(--color-success-dark) cursor-pointer': dataTarea().estado == 'Completada',
      }"
    >
      <div class="flex items-center gap-3 md:gap-5">
        <app-contenedor-icono-item-tarea [tarea]="dataTarea()" />
        <app-informacion-tarea [tarea]="dataTarea()" />
      </div>

      @if (dataTarea().estado === 'Cancelada') {
        <app-botones-papelera 
        [tarea]="dataTarea()" />
      } @else {
        <app-badges [tarea]="dataTarea()"/>
      }
    </a>
  `,
  styles: ``,
})
export class ItemTarea {
  dataTarea = input.required<Tarea>();
}
