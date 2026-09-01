import { Component } from '@angular/core';

@Component({
  selector: 'app-status-floating',
  imports: [],
  template: `
    <div
      class="absolute -bottom-5 -left-5 hidden rounded-2xl border border-(--color-border-light) bg-(--color-card-light) p-3 shadow-xl sm:block dark:border-(--color-border-dark) dark:bg-(--color-card-dark) dark:shadow-black/30"
    >
      <div class="flex items-center gap-3">
        <div
          class="flex h-9 w-9 items-center justify-center rounded-xl bg-(--color-success-bg-light) text-(--color-success-light) dark:bg-(--color-success-dark)/10 dark:text-(--color-success-dark)"
        >
          <i class="fa-solid fa-check text-xs"></i>
        </div>

        <div>
          <p
            class="text-[9px] text-(--color-texto-tertiary-light) dark:text-(--color-texto-muted-dark)"
          >
            Tareas completadas
          </p>

          <p class="text-base font-bold text-(--color-texto-light) dark:text-(--color-texto-dark)">
            9
          </p>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class StatusFloating {}
