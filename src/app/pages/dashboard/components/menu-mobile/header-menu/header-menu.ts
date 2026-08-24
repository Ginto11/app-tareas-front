import { Component, inject } from '@angular/core';
import { UiStore } from '../../../../../store/ui.store';
import { EstadoMenuService } from '../../../../../services/estado-menu.service';

@Component({
  selector: 'app-header-menu',
  imports: [],
  templateUrl: './header-menu.html',
  styles: ``,
})
export class HeaderMenu {

  public estadoMenuService = inject(EstadoMenuService);
  public uiStore = inject(UiStore);

}
