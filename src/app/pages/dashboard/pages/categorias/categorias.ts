import { Component, inject } from '@angular/core';
import { CategoriaStore } from '../../../../store/categoria.store';
import { LinkService } from '../../../../services/link.service';
import { HeaderPage } from '../../shared/header-page/header-page';
import { GridCategorias } from './components/grid-categorias/grid-categorias';
import { ModalService } from '../../../../services/modal.service';
import { BotonNuevaCategoria } from "./components/boton-nueva-categoria/boton-nueva-categoria";
import { SeccionPage } from "../../shared/seccion-page/seccion-page";

@Component({
  selector: 'app-categorias',
  imports: [HeaderPage, GridCategorias, BotonNuevaCategoria, SeccionPage],
  template: `
    <app-seccion-page>
      <!-- Header -->
      <div class="flex items-center justify-between">
        <app-header-page
          titulo="Categorías"
          anteTitulo="Organización"
          postTitulo="Visualiza el estado de tus tareas organizadas por categoría."
        />
        <!-- Boton Nueva categoría -->
         <app-boton-nueva-categoria (onClick)="modalService.mostrarModalNuevaCategoria()" />
      </div>

      <!-- Grid de categorías -->
      <app-grid-categorias />
    </app-seccion-page>
  `,
  styles: ``,
})
export default class Categorias {
  public categoriaStore = inject(CategoriaStore);
  public linkService = inject(LinkService);
  public modalService = inject(ModalService);
}
