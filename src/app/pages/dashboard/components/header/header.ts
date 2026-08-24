import { Component, ElementRef, inject, OnDestroy, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TareaStore } from '../../../../store/tarea.store';
import Swal from 'sweetalert2';
import { UiStore } from '../../../../store/ui.store';
import { EstadoMenuService } from '../../../../services/estado-menu.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styles: ``,
})
export class Header  {
  
  public estadoMenuService = inject(EstadoMenuService);
  private tareaStore = inject(TareaStore);
  private router = inject(Router);
  public uiStore = inject(UiStore);

  buscarTareas(input: HTMLInputElement):void {
    
    const valor = input.value;

    if(valor == ''){
      Swal.fire({
        icon: 'warning',
        text: 'Ingrese texto en el input, por favor.'
      })
      return;
    }
    this.tareaStore.buscarTareasPorNombre(valor);
    input.value = '';
    this.router.navigate(['/dashboard/buscador'], { queryParams: { nombre: valor } })
  }
  

}
