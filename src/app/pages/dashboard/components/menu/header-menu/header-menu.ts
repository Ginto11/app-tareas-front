import { Component, inject } from '@angular/core';
import { UiStore } from '../../../../../store/ui.store';

@Component({
  selector: 'app-header-menu',
  imports: [],
  templateUrl: './header-menu.html',
  styles: ``,
})
export class HeaderMenu {

  public uiStore = inject(UiStore);

}
