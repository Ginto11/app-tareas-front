import { inject, Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { TareaStore } from '../store/tarea.store';
import { CategoriaStore } from '../store/categoria.store';
import { Categoria } from '../interfaces/categoria.interface';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private tareaStore = inject(TareaStore);
  private categoriaStore = inject(CategoriaStore);

  /* MODALES DE TAREAS */
  mostrarModalCambiarEstado(id: string): void {
    Swal.fire({
      icon: 'question',
      showCancelButton: true,
      title: 'Actualización de estado',
      confirmButtonText: 'Actualizar',
      cancelButtonText: 'Cancelar',
      html: `
          <form id="formTarea" class="mt-4 text-left">
    
            <label
              for="estado"
              class="mb-2 block text-sm font-medium text-gray-700"
            >
              ¿A que estado desea actualizar la tarea?
            </label>
    
            <select
              id="estado"
              name="estado"
              class="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-(--color-fondo-boton) focus:bg-white focus:ring-2 focus:ring-(--color-fondo-boton)"
            >
            <option selected>Seleccionar estado</option>  
            <option value="En Progreso">En Progreso</option>  
            <option value="Completada"> Completada </option>  
            <option value="Cancelada"> Cancelada </option>  
            </select>
    
          </form>
          `,
      preConfirm: () => {
        const input = document.getElementById('estado') as HTMLSelectElement;

        const valor = input.value;

        return valor;
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.tareaStore.actualizarEstado(id, result.value);
        Swal.fire({
          icon: 'success',
          text: 'Estado actualizado exitosamente.',
        });
      }
    });
  }

  /* MODALES DE CATEGORIAS */
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

        const categoria: Categoria = {
          id: crypto.randomUUID(),
          icono: 'fa-solid fa-layer-group',
          ruta: '/dashboard/categoria',
          titulo: nombreCategoria,
          cantidadTotalTareas: 0,
          cantidadTotalCompletadas: 0,
          cantidadTotalPendientes: 0,
          cantidadTotalCanceladas: 0,
          queryParam: { nombre: nombreCategoria.toLowerCase() },
        };

        this.categoriaStore.agregarCategoria(categoria);

        // Aquí llamas a tu store
        // this.tareaStore.agregarCategoria(nombreCategoria);
      }
    });
  };
}
