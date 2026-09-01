import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';


@Component({
  selector: 'app-card-resumen',
  imports: [NgClass],
  template: `
     <div
          class="flex rounded-2xl border border-(--color-border-light) bg-(--color-card-light) p-3 shadow-sm dark:border-(--color-border-dark) dark:bg-(--color-card-dark)"
        >
          <div class="flex items-center justify-center gap-1">
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
              [ngClass]="{
                'bg-(--color-warning-bg-light) text-(--color-warning-light) dark:bg-(--color-warning-dark)/10 dark:text-(--color-warning-dark)' : texto() == 'Pendientes',
                'bg-(--color-info-bg-light) text-(--color-info-light) dark:bg-(--color-info-dark)/10 dark:text-(--color-info-dark)' : texto() == 'En Progreso',
                'bg-(--color-success-bg-light) text-(--color-success-light) dark:bg-(--color-success-dark)/10 dark:text-(--color-success-dark)': texto() == 'Completadas',
                'bg-(--color-accent-soft-light) text-(--color-accent-light) dark:bg-(--color-accent-dark)/10 dark:text-(--color-accent-dark)': texto() == 'Para hoy'

              }"    
            >
              <i class="text-sm"
                [ngClass]="icono()"></i>
            </div>

            <div>
              <p
                class="text-[9px] text-(--color-texto-tertiary-light) dark:text-(--color-texto-secondary-dark)"
              >
                {{ texto() }}
              </p>

              <p
                class="text-xl font-bold text-(--color-texto-light) dark:text-(--color-texto-dark)"
              >
                {{ cantidad() }}
              </p>
            </div>
          </div>
        </div>
  `,
  styles: ``
})
export class CardResumen {
  icono = input.required<string>();
  texto = input.required<string>();
  cantidad = input.required<string>();
}