import { NgClass } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Link } from '../../../../interfaces/link.interface';
import { CommonModule } from '@angular/common';
import { TareaStore } from '../../../../store/tarea.store';

@Component({
  selector: 'app-link-menu',
  imports: [NgClass, RouterLink, RouterLinkActive, CommonModule],
  template: `
    <a 
      [routerLink]="dataLink().ruta" 
      routerLinkActive="bg-(--color-fondo-secondary-dark) !border-(--color-primary-dark)"
      [queryParams]="dataLink().queryParams"
      class="w-full text-(--color-texto-dark) flex justify-between items-center rounded-l-xl py-2 px-3 border-r-3 border-transparent hover:bg-(--color-fondo-secondary-dark) ">
      
      <div>
          <i [ngClass]="dataLink().icono"></i>
          {{ dataLink().texto }}
      </div>
      @if(dataLink().texto == 'Papelera'){
        @if (tareaStore.papeleraTareas().length) {
          <span class="text-sm bg-(--color-primary-dark) text-gray-100 h-auto w-auto px-2 flex justify-center items-center rounded">
              {{ tareaStore.papeleraTareas().length }}
          </span>
        }
      }
    </a>
  `,
  styles: ``,
})
export class LinkMenu {
  public dataLink = input.required<Link>();
  public tareaStore = inject(TareaStore);
}
