import { Component } from '@angular/core';
import { CardResumen } from './components/card-resumen';
import { CardTarea } from "./components/card-tarea";
import { StatusFloating } from "./components/status-floating";

export interface CardTareaInterface {
  id: number,
  titulo: string,
  fecha: string,
  etiqueta: string,
  usuario: string,
  prioridad: string,
  categoria: string,
  tipo: string,
}

@Component({
  selector: 'app-dashboard-preview',
  imports: [CardResumen, CardTarea, StatusFloating],
  templateUrl: './dashboard-preview.html',
  styles: ``,
})
export class DashboardPreview {
  listaTarjetas = [
    {
      texto: 'Pendientes',
      cantidad: '3',
      icono: 'fa-solid fa-inbox',
    },
    {
      texto: 'En Progreso',
      cantidad: '5',
      icono: 'fa-solid fa-bars-progress',
    },
    {
      texto: 'Completadas',
      cantidad: '9',
      icono: 'fa-solid fa-check',
    },
    {
      texto: 'Para hoy',
      cantidad: '1',
      icono: 'fa-solid fa-clock',
    },
  ];

  tareas: CardTareaInterface[] = [
    {
      id: 1,
      titulo: 'Diseñar interfaz del panel principal',
      fecha: '06 Sep 07:00 PM',
      etiqueta: 'UI, Diseño',
      usuario: 'NM',
      prioridad: 'Alta',
      categoria: 'Trabajo',
      tipo: 'success',
    },
    {
      id: 2,
      titulo: 'Implementar autenticación con JWT',
      fecha: '08 Sep 07:00 PM',
      etiqueta: 'JWT, Seguridad',
      usuario: 'CR',
      prioridad: 'Alta',
      categoria: 'Trabajo',
      tipo: 'success',
    },
    {
      id: 3,
      titulo: 'Crear endpoint para obtener tareas',
      fecha: '06 Aug 07:00 PM',
      etiqueta: 'API, GET',
      usuario: 'LM',
      prioridad: 'Alta',
      categoria: 'Trabajo',
      tipo: 'info',
    },
  ];
}
