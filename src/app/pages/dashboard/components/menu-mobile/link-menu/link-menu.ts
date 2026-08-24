import { NgClass } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Link } from '../../../../../interfaces/link.interface';
import { CommonModule } from '@angular/common';
import { UiStore } from '../../../../../store/ui.store';
import { EstadoMenuService } from '../../../../../services/estado-menu.service';

@Component({
  selector: 'app-link-menu',
  imports: [NgClass, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './link-menu.html',
  styles: ``,
})
export class LinkMenu {
  
  public uiStore = inject(UiStore);
  public dataLink = input.required<Link>();
  public estadoMenuService = inject(EstadoMenuService);
}
