import { Component, ElementRef, inject, OnDestroy, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TareaStore } from '../../../../store/tarea.store';
import Swal from 'sweetalert2';
import { UiStore } from '../../../../store/ui.store';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styles: ``,
})
export class Header implements OnDestroy {
  
  private tareaStore = inject(TareaStore);
  private router = inject(Router);
  public uiStore = inject(UiStore);


   @ViewChild('busquedaM') busquedaM!: ElementRef<HTMLInputElement>;
   @ViewChild('busqueda') busqueda!: ElementRef<HTMLInputElement>;
  
  buscarTareas(valor: string):void {
    
    if(valor == ''){
      Swal.fire({
        icon: 'warning',
        text: 'Ingrese texto en el input, por favor.'
      })
      return;
    }
    this.tareaStore.buscarTareasPorNombre(valor);
    this.router.navigate(['/dashboard/buscador'], { queryParams: { nombre: valor } })
  }
  
  ngOnDestroy(): void {
    this.busquedaM.nativeElement.value = '';
    this.busqueda.nativeElement.value = '';
  }

}
