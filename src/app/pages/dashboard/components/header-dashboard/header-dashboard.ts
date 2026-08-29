import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TareaStore } from '../../../../store/tarea.store';
import Swal from 'sweetalert2';
import { EstadoMenuService } from '../../../../services/estado-menu.service';
import { BtnTheme } from "../../../../shared/btn-theme/btn-theme";

@Component({
  selector: 'app-header-dashboard',
  imports: [RouterLink, RouterLinkActive, BtnTheme],
  templateUrl: './header-dashboard.html',
  styles: ``,
})
export class HeaderDashboard  {
  
  public estadoMenuService = inject(EstadoMenuService);
  private tareaStore = inject(TareaStore);
  private router = inject(Router);

  buscarTareas(input: HTMLInputElement):void {
    
    const valor = input.value;

    if(valor == ''){
      Swal.fire({
        icon: 'warning',
        text: 'Ingrese texto en el input, por favor.'
      })
      return;
    }
    input.value = '';
    this.tareaStore.buscarTareasPorNombre(valor);
    this.router.navigate(['/dashboard/buscador'], { queryParams: { nombre: valor } })
  }
  

}
