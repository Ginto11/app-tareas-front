import { NgClass } from '@angular/common';
import { Component, input, signal } from '@angular/core';


@Component({
  selector: 'app-item-resumen',
  imports: [NgClass],
  template: `
    <div class="bg-white text-sm md:text-inherit p-2 rounded-2xl lg:p-5 shadow">
      <div class="flex gap-3">
          <span 
          class="p-3 rounded-2xl md:rounded-full text-xl lg:text-2xl flex items-center justify-center"
          [ngClass]="{
              'bg-yellow-100/50 text-yellow-700': icono() == 'fa-solid fa-inbox',
              'bg-blue-100/50 text-blue-700': icono() == 'fa-solid fa-bars-progress',
              'bg-green-100/50 text-green-700': icono() == 'fa-solid fa-circle-check',
              'bg-violet-100/50 text-violet-700': icono() == 'fa-solid fa-clock',
          }">
              <i [ngClass]="icono()"></i>
          </span>  
          <div>
              <h2 class="text-gray-500"> {{ nombre() }} </h2>
              <p class="text-2xl font-semibold text-(--color-texto-light)"> {{ cantidad() }} </p>
          </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class ItemResumen {
  nombre = input.required<string>();
  cantidad = input.required<number>();
  icono = input.required<string>();
}
