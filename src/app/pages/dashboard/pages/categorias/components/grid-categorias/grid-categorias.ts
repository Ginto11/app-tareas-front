import { Component, inject } from '@angular/core';
import { ItemCategoria } from "../item-categoria/item-categoria";
import { CategoriaStore } from '../../../../../../store/categoria.store';

@Component({
  selector: 'app-grid-categorias',
  imports: [ItemCategoria],
  template: `
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      @for (categoria of categoriaStore.categorias(); track categoria.id) {
        <app-item-categoria [categoria]="categoria" />
      }
    </div>
  `,
  styles: ``,
})
export class GridCategorias {
    public categoriaStore = inject(CategoriaStore);
}
