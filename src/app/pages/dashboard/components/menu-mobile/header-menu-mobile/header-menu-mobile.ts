import { Component, inject } from '@angular/core';
import { EstadoMenuService } from '../../../../../services/estado-menu.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header-menu-mobile',
  imports: [RouterLink],
  template: `
    <div class="flex flex-row justify-between items-center h-20 px-4">
        <div class="flex items-center gap-2">
            <span class="w-10 h-10 bg-(--color-primary-dark) text-(--color-texto-dark) flex justify-center items-center rounded-xl">
                <i class="fa-solid fa-list-check text-2xl"></i>
            </span>
            <a 
            routerLink="/dashboard"
            class="text-3xl h-20 flex items-center">Tareas</a>
        </div>
        <!-- BOTON PARA MOVILE -->
        <button (click)="estadoMenuService.intercambiarValor()" class="bg-red-300 rounded text-black p-1 cursor-pointer">
            <i class="fa-solid fa-xmark"></i>
        </button>
    </div>
  `,
  styles: ``,
})
export class HeaderMenuMobile {
  public estadoMenuService = inject(EstadoMenuService);
}
