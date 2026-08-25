import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Link } from '../../../../../../interfaces/link.interface';

@Component({
  selector: 'app-link-inicio',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <a
      [routerLink]="datalink().ruta"
      [queryParams]="datalink().queryParams"
      [routerLinkActiveOptions]="{ exact: true }"
      routerLinkActive="border-(--color-fondo-boton) text-gray-800"
      class="block h-8 border-b-2 text-gray-500 border-(--color-border) text-center text-sm px-1  md:px-3 items-center"
    >
      {{ datalink().texto }}
    </a>
  `,
  styles: ``,
})
export class LinkInicio {
  datalink = input.required<Link>();
}
