import { Component, inject, input } from '@angular/core';
import { Link } from '../../../../../../interfaces/link.interface';
import { LinkInicio } from '../link-inicio/link-inicio';

@Component({
  selector: 'app-contenedor-links',
  imports: [LinkInicio],
  template: `
    <div class="flex gap-1 md:gap-3">
        @for (link of links(); track link.id) {
          <app-link-inicio [datalink]="link" />
        }
    </div>
  `,
  styles: ``,
})
export class ContenedorLinks {
  links = input.required<Link[]>();
}
