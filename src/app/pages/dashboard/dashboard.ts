import { Component, inject, OnInit } from '@angular/core';
import { MenuWeb } from './components/menu/menu-web';
import { HeaderDashboard } from './components/header-dashboard/header-dashboard';
import { RouterOutlet } from "@angular/router";
import { TareaStore } from '../../store/tarea.store';
import { CategoriaStore } from '../../store/categoria.store';
import { MenuMobile } from './components/menu-mobile/menu-mobile';
import { EstadoMenuService } from '../../services/estado-menu.service';

@Component({
  selector: 'app-dashboard',
  imports: [MenuWeb, HeaderDashboard, RouterOutlet, MenuMobile],
  templateUrl: './dashboard.html',
  styles: ``,
})
export default class Dashboard implements OnInit {

  public estadoMenuService = inject(EstadoMenuService);
  private tareaStore = inject(TareaStore);
  private categoriaStore = inject(CategoriaStore);

  ngOnInit(): void {
    this.tareaStore.cargarTareas();
    this.categoriaStore.cargarCategorias();
  }
}
