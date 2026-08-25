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
      [routerLink]="['/dashboard/tarea', dataTarea().id]"
      class="group text-(--color-texto-light) w-full 
        h-25 rounded-2xl bg-white flex items-center 
        justify-between px-5 shadow cursor-pointer hover:shadow-gray-400
        border-l-3"
      [class.pointer-events-none]="dataTarea().estado == 'Cancelada'"
      [ngClass]="{
        'border-gray-400/50': dataTarea().estado == 'Cancelada',
        'border-blue-400/50': dataTarea().estado == 'En Progreso',
        'border-yellow-400/50': dataTarea().estado == 'Pendiente',
        'border-green-400/50': dataTarea().estado == 'Completada',
      }"
    >
      <div class="flex items-center gap-3 md:gap-5">
        <app-contenedor-icono-item-tarea [tarea]="dataTarea()" />
        <app-informacion-tarea [tarea]="dataTarea()" />
      </div>

      @if (dataTarea().estado === 'Cancelada') {
        <app-botones-papelera 
        class="pointer-events-auto"
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
