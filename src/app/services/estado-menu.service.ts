import { computed, Injectable, signal } from '@angular/core';

interface EstadoMenu {
  estado: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class EstadoMenuService {
  
  private menuAbierto = signal<EstadoMenu>({ estado: false });

  readonly estado = computed(() => this.menuAbierto().estado);

  intercambiarValor():void {
    this.menuAbierto.update((state) => ({
      ...state,
      estado: !state.estado
    }))
  }

  cerrarMenu():void {
    this.menuAbierto.update((state) => ({
      ...state,
      estado: false
    }))
  }

}
