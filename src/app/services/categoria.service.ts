import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/categoria.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  
  private categorias: Categoria[] = [
    {
      id: '1',
      titulo: 'Personal',
      icono: 'fa-solid fa-house',
      cantidadTotalCanceladas: 7,
      cantidadTotalCompletadas: 3,
      cantidadTotalPendientes: 4,
      cantidadTotalTareas: 14,
      ruta: '/dashboard/ver-categoria',
      queryParam: { nombre: 'personal' }
    },
    {
      id: '2',
      titulo: 'Trabajo',
      icono: 'fa-solid fa-briefcase',
      cantidadTotalCanceladas: 3,
      cantidadTotalCompletadas: 3,
      cantidadTotalPendientes: 2,
      cantidadTotalTareas: 8,
      ruta: '/dashboard/ver-categoria',
      queryParam: { nombre: 'trabajo' }
    },
    {
      id: '3',
      titulo: 'Compartidas',
      icono: 'fa-solid fa-users',
      cantidadTotalCanceladas: 7,
      cantidadTotalCompletadas: 8,
      cantidadTotalPendientes: 4,
      cantidadTotalTareas: 19,
      ruta: '/dashboard/ver-categoria',
      queryParam: { nombre: 'compartidas' }
    }
  ]

  public obtenerCategorias():Observable<Categoria[]> {
    return of(this.categorias)
  }

  public agregarCategoria(categoria: Categoria):void {
    this.categorias.push(categoria);
  }

}
