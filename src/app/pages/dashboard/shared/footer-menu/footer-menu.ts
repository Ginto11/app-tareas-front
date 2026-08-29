import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-menu',
  imports: [],
  template: `
    <div class="flex items-center p-3 gap-3 sticky bottom-0 bg-(--color-fondo-tertiary-dark)">
        <span class="w-10 h-10 bg-(--color-primary-dark) text-(--color-texto-dark) rounded-full flex items-center justify-center">
            <i class="fa-solid fa-user text-xl"></i>
        </span>
        <div>
            <h2 class="font-semibold">Nelson Muñoz</h2>
            <p class="text-sm">Mi cuenta</p>
        </div>
    </div>
  ` ,
  styles: ``,
})
export class FooterMenu {

}
