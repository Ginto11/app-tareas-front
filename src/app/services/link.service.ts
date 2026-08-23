import { Injectable } from '@angular/core';
import { Link } from '../interfaces/link.interface';
import { Observable, of } from 'rxjs';
import { Categoria } from '../interfaces/categoria.interface';

@Injectable({
  providedIn: 'root',
})
export class LinkService {
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
  ];

  obtenerLinksMenu(): Observable<Link[]> {
    return of(this.listaDeLinks);
  }
}
