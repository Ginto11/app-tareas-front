import { NgClass } from '@angular/common';
import { Component, input, signal } from '@angular/core';


@Component({
  selector: 'app-item-resumen',
  imports: [NgClass],
  template: `
    <div 
      class="text-sm md:text-inherit p-2 rounded-2xl lg:p-5 shadow
            bg-(--color-fondo-light) 
            dark:bg-(--color-fondo-tertiary-dark)">
      <div class="flex gap-3">
          <span 
          class="p-3 rounded-2xl md:rounded-full text-xl lg:text-2xl flex items-center justify-center"
          [ngClass]="{
              'bg-(--color-warning-bg-light) text-(--color-warning-light) dark:bg-(--color-warning-bg-dark)/25 dark:text-(--color-warning-dark)': icono() == 'fa-solid fa-inbox',
              'bg-(--color-info-bg-light) text-(--color-info-light) dark:bg-(--color-info-bg-dark)/25 dark:text-(--color-info-dark)': icono() == 'fa-solid fa-bars-progress',
              'bg-(--color-success-bg-light) text-(--color-success-light) dark:bg-(--color-success-bg-dark)/25 dark:text-(--color-success-dark)': icono() == 'fa-solid fa-circle-check',
              'bg-(--color-accent-soft-light) text-(--color-accent-light) dark:bg-(--color-accent-soft-dark)/50 dark:text-(--color-accent-dark)': icono() == 'fa-solid fa-clock',
          }">
              <i [ngClass]="icono()"></i>
          </span>  
          <div>
              <h2 class="text-(--color-texto-tertiary-light) dark:text-(--color-texto-secondary-dark)"> {{ nombre() }} </h2>
              <p class="text-2xl font-semibold text-(--color-texto-light) dark:text-(--color-texto-dark)"> {{ cantidad() }} </p>
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
