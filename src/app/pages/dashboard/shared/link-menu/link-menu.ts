import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Link } from '../../../../interfaces/link.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-link-menu',
  imports: [NgClass, RouterLink, RouterLinkActive, CommonModule],
  template: `
    <a 
      [routerLink]="dataLink().ruta" 
      routerLinkActive="bg-(--color-fondo-link-menu) border-white"
      [queryParams]="dataLink().queryParams"
      class="w-full flex justify-between items-center rounded-l-xl py-2 px-3 border-r-3 border-transparent hover:bg-(--color-fondo-link-menu)">
      
      <div>
          <i [ngClass]="dataLink().icono"></i>
          {{ dataLink().texto }}
      </div>
      @if (dataLink().cantidadTareas) {
        <span class="text-sm bg-(--color-fondo-link-menu) text-gray-100 h-auto w-auto px-2 flex justify-center items-center rounded">
            {{ dataLink().cantidadTareas }}
        </span>
      }
    </a>
  `,
  styles: ``,
})
export class LinkMenu {
  public dataLink = input.required<Link>();
}
