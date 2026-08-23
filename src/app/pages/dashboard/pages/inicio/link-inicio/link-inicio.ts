import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Link } from '../../../../../interfaces/link.interface';

@Component({
  selector: 'app-link-inicio',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './link-inicio.html',
  styles: ``,
})
export class LinkInicio {
  datalink = input.required<Link>();
}
