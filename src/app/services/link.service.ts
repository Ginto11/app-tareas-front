import { inject, Injectable } from '@angular/core';
import { Link } from '../interfaces/link.interface';
import { Observable, of } from 'rxjs';
import { Categoria } from '../interfaces/categoria.interface';
import { TareaStore } from '../store/tarea.store';

@Injectable({
  providedIn: 'root',
})
export class LinkService {
  private tareaStore = inject(TareaStore);
  private listaDeLinks: Link[] = [
    {
      id: 6,
      texto: 'Dashboard',
      icono: 'fa-solid fa-cube',
      ruta: '/dashboard/inicio',
    },
    {
      id: 7,
      texto: 'Categorias',
      icono: 'fa-solid fa-layer-group',
      ruta: '/dashboard/categorias',
    },
    {
      id: 8,
      texto: 'Papelera',
      icono: 'fa-solid fa-trash',
      ruta: '/dashboard/papelera',
      cantidadTareas: this.tareaStore.papeleraTareas().length
    }
  ];

  obtenerLinksMenu(): Observable<Link[]> {
    return of(this.listaDeLinks);
  }
}
