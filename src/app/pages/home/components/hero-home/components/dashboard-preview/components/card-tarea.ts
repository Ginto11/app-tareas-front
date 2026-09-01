import { Component, input } from '@angular/core';
import { CardTareaInterface } from '../dashboard-preview';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card-tarea',
  imports: [NgClass],
  template: `
    <div
      class="flex items-center gap-3 rounded-2xl border border-(--color-border-light) border-l-2  bg-(--color-task-light) p-3 shadow-sm dark:border-(--color-border-dark) dark:bg-(--color-task-dark)"
        [ngClass]="{
            'border-l-(--color-info-light) dark:border-l-(--color-info-dark)': cardTarea().tipo == 'info',
            'border-l-(--color-success-light) dark:border-l-(--color-success-dark)': cardTarea().tipo == 'success'
        }"
    >
      <div
        class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
        [ngClass]="{
            'bg-(--color-info-bg-light) text-(--color-info-light) dark:bg-(--color-info-dark)/10 dark:text-(--color-info-dark)': cardTarea().tipo == 'info',
            'bg-(--color-success-bg-light) text-(--color-success-light) dark:bg-(--color-success-dark)/10 dark:text-(--color-success-dark)': cardTarea().tipo == 'success'
        }"
      >
        <i class="fa-solid fa-folder text-sm"></i>
      </div>

      <div class="min-w-0 flex-1">
        <p
          class="truncate text-sm font-semibold text-(--color-texto-light) dark:text-(--color-texto-dark)"
        >
          {{ cardTarea().titulo }}
        </p>

        <div
          class="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[9px] text-(--color-texto-tertiary-light) dark:text-(--color-texto-muted-dark)"
        >
          <span>
            <i class="fa-regular fa-calendar mr-1"></i>
            {{ cardTarea().fecha }}
          </span>

          <span>
            <i class="fa-solid fa-tag mr-1"></i>
            {{ cardTarea().etiqueta }}
          </span>

          <span>
            <i class="fa-solid fa-circle-user mr-1"></i>
            {{ cardTarea().usuario }}
          </span>
        </div>
      </div>

      <span
        class="hidden rounded-xl bg-(--color-danger-bg-light) px-3 py-2 text-[10px] font-medium text-(--color-danger-light) sm:block dark:bg-(--color-danger-dark)/15 dark:text-(--color-danger-dark)"
      >
        {{ cardTarea().prioridad }}
      </span>

      <span
        class="hidden rounded-xl border border-(--color-border-light) bg-(--color-card-light) px-3 py-2 text-[10px] font-medium text-(--color-texto-secondary-light) md:block dark:border-(--color-border-dark) dark:bg-(--color-fondo-secondary-dark) dark:text-(--color-texto-secondary-dark)"
      >
        {{ cardTarea().categoria }}
      </span>
    </div>
  `,
  styles: ``,
})
export class CardTarea {
    cardTarea = input.required<CardTareaInterface>();
}
