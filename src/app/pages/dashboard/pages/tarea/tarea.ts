import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TareaStore } from '../../../../store/tarea.store';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tarea',
  imports: [CommonModule, RouterLink],
  templateUrl: './tarea.html',
  styles: ``,
})
export default class Tarea implements OnInit {

  private route = inject(ActivatedRoute);
  public tareaStore = inject(TareaStore);

  ngOnInit(): void {
    
    const id = this.route.snapshot.params['id'];
    this.tareaStore.buscarTareaPorId(id);

  }


  mostrarModalCambiarEstado(id: string):void {
    Swal.fire({
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Actualizar Estado',
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
      preConfirm: () =>{
        const input = document.getElementById('estado') as HTMLSelectElement;

        const valor = input.value;

        return valor;
      }
    }).then(result => {
      if(result.isConfirmed){
        this.tareaStore.actualizarEstado(id, result.value);
        Swal.fire({
          icon: 'success',
          text: 'Estado actualizado exitosamente.'
        })
      }
    })
    
  }


}
