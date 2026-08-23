import { Component, inject, OnInit } from '@angular/core';
import { CategoriaStore } from '../../../../store/categoria.store';
import { ItemCategoria } from './components/item-categoria/item-categoria';
import Swal from 'sweetalert2';
import { Categoria } from '../../../../interfaces/categoria.interface';
import { LinkService } from '../../../../services/link.service';

@Component({
  selector: 'app-categorias',
  imports: [ItemCategoria],
  templateUrl: './categorias.html',
  styles: ``,
})
export default class Categorias {

  public categoriaStore = inject(CategoriaStore);
  public linkService = inject(LinkService);


  mostrarModalNuevaCategoria = (): void => {
    Swal.fire({
      title: 'Nueva categoría',
      html: `
      <form id="formCategoria" class="mt-4 text-left">

        <label
          for="nombreCategoria"
          class="mb-2 block text-sm font-medium text-gray-700"
        >
          Nombre de la categoría
        </label>

        <input
          id="nombreCategoria"
          name="nombreCategoria"
          type="text"
          placeholder="Ej. Desarrollo"
          class="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-(--color-fondo-boton) focus:bg-white focus:ring-2 focus:ring-(--color-fondo-boton)"
        />

      </form>
    `,
      showCancelButton: true,
      confirmButtonText: 'Crear categoría',
      cancelButtonText: 'Cancelar',
      focusConfirm: false,

      preConfirm: () => {
        const input = document.getElementById('nombreCategoria') as HTMLInputElement;

        const nombre = input.value.trim();

        if (!nombre) {
          Swal.showValidationMessage('Debes ingresar el nombre de la categoría');

          return false;
        }

        return nombre;
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const nombreCategoria = result.value;

        const  categoria: Categoria = {
          id: crypto.randomUUID(),
          icono: 'fa-solid fa-layer-group',
          ruta: '/dashboard/categoria',
          titulo: nombreCategoria,
          cantidadTotalTareas: 0,
          cantidadTotalCompletadas: 0,
          cantidadTotalPendientes: 0,
          cantidadTotalCanceladas: 0,
          queryParam: { nombre: nombreCategoria.toLowerCase() }
        }

        this.categoriaStore.agregarCategoria(categoria);

        // Aquí llamas a tu store
        // this.tareaStore.agregarCategoria(nombreCategoria);
      }
    })
  };

  
}
