import { Component, inject, OnInit } from '@angular/core';
import { Menu } from './components/menu/menu';
import { Header } from './components/header/header';
import { RouterOutlet } from "@angular/router";
import { TareaStore } from '../../store/tarea.store';
import { CategoriaStore } from '../../store/categoria.store';
import { UiStore } from '../../store/ui.store';
import { MenuMobile } from './components/menu-mobile/menu';
import { EstadoMenuService } from '../../services/estado-menu.service';

@Component({
  selector: 'app-dashboard',
  imports: [Menu, Header, RouterOutlet, MenuMobile],
  templateUrl: './dashboard.html',
  styles: ``,
})
export default class Dashboard implements OnInit {

  public estadoMenuService = inject(EstadoMenuService);
  public uiStore = inject(UiStore);
  private tareaStore = inject(TareaStore);
  private categoriaStore = inject(CategoriaStore);

  ngOnInit(): void {
    this.tareaStore.cargarTareas();
    this.categoriaStore.cargarCategorias();
  }
}
