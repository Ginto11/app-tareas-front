import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { EstadoMenuService } from '../../../../services/estado-menu.service';

@Component({
  selector: 'app-footer-menu',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <a
      routerLink="/dashboard/perfil" 
      (click)="estadoMenuService.cerrarMenu()"
      routerLinkActive="!bg-(--color-fondo-secondary-dark) !border-(--color-primary-dark)"
      [routerLinkActiveOptions]="{ exact: true }"
      class="flex items-center p-3 gap-3 sticky bottom-0 bg-(--color-fondo-tertiary-dark) border-r-3 border-transparent hover:bg-(--color-fondo-secondary-dark)">
        <span class="w-10 h-10 bg-(--color-primary-dark) text-(--color-texto-dark) rounded-full flex items-center justify-center">
            <i class="fa-solid fa-user text-xl"></i>
        </span>
        <div>
            <h2 class="font-semibold">Nelson Muñoz</h2>
            <p class="text-sm">Mi cuenta</p>
        </div>
    </a>
  ` ,
  styles: ``,
})
export class FooterMenu {
  public estadoMenuService = inject(EstadoMenuService);
}
