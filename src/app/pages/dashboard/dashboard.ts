import { Component, inject, OnInit } from '@angular/core';
import { Menu } from './components/menu/menu';
import { Header } from './components/header/header';
import { RouterOutlet } from "@angular/router";
import { LinkStore } from '../../store/link.store';
import { TareaStore } from '../../store/tarea.store';
import { CategoriaStore } from '../../store/categoria.store';
import { UiStore } from '../../store/ui.store';

@Component({
  selector: 'app-dashboard',
  imports: [Menu, Header, RouterOutlet],
  templateUrl: './dashboard.html',
  styles: ``,
})
export default class Dashboard implements OnInit {

  public uiStore = inject(UiStore);
  private tareaStore = inject(TareaStore);
  private categoriaStore = inject(CategoriaStore);

  ngOnInit(): void {
    this.tareaStore.cargarTareas();
    this.categoriaStore.cargarCategorias();
  }
}
