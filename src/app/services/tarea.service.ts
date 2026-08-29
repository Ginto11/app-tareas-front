import { Injectable, signal } from '@angular/core';
import { Tarea } from '../interfaces/tarea-interface';
import { Observable, of } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class TareaService {
  tareas = signal<Tarea[]>([
    {
      id: '1',
      titulo: 'Preparar despliegue de la aplicación',
      descripcion:
        'Se configuró el entorno de producción y se realizó el despliegue correctamente.',
      fecha: new Date('2026-09-05'),
      prioridad: 'Alta',
      etiqueta: 'Deploy, Producción',
      categoria: 'Trabajo',
      estado: 'Cancelada',
      usuario: {
        iniciales: 'AP',
        nombre: 'Andrés',
      },
      fechaCreacion: new Date('2026-08-28'),
      fechaFinalizacion: new Date('2026-09-05'),
    },
    {
      id: '2',
      titulo: 'Diseñar interfaz del panel principal',
      descripcion:
        'Se diseñó la interfaz del panel principal con navegación lateral, tarjetas y estadísticas.',
      fecha: new Date('2026-09-07'),
      prioridad: 'Alta',
      etiqueta: 'UI, Diseño',
      categoria: 'Trabajo',
      estado: 'Completada',
      usuario: {
        iniciales: 'NM',
        nombre: 'Nelson',
      },
      fechaCreacion: new Date('2026-08-29'),
      fechaFinalizacion: new Date('2026-09-07'),
    },
    {
      id: '3',
      titulo: 'Implementar autenticación con JWT',
      descripcion:
        'Se implementó el inicio de sesión mediante JWT, incluyendo generación, almacenamiento y validación del token.',
      fecha: new Date('2026-09-09'),
      prioridad: 'Alta',
      etiqueta: 'JWT, Seguridad',
      categoria: 'Trabajo',
      estado: 'Completada',
      usuario: {
        iniciales: 'CR',
        nombre: 'Carlos',
      },
      fechaCreacion: new Date('2026-08-30'),
      fechaFinalizacion: new Date('2026-09-09'),
    },
    {
      id: '4',
      titulo: 'Crear endpoint para obtener tareas',
      descripcion:
        'Se desarrolló un endpoint GET para consultar las tareas registradas, permitiendo obtener la información necesaria para mostrarlas en la aplicación.',
      fecha: new Date('2026-08-07'),
      prioridad: 'Alta',
      etiqueta: 'API, GET',
      categoria: 'Trabajo',
      estado: 'En Progreso',
      usuario: {
        iniciales: 'LM',
        nombre: 'Laura',
      },
      fechaCreacion: new Date('2026-09-02'),
      fechaFinalizacion: new Date('2026-09-10'),
    },
    {
      id: '5',
      titulo: 'Configurar base de datos del proyecto',
      descripcion:
        'Se creó la base de datos, las tablas principales y las relaciones necesarias para el proyecto.',
      fecha: new Date('2026-09-11'),
      prioridad: 'Alta',
      etiqueta: 'SQL, Database',
      categoria: 'Trabajo',
      estado: 'Completada',
      usuario: {
        iniciales: 'JD',
        nombre: 'Julián',
      },
      fechaCreacion: new Date('2026-08-31'),
      fechaFinalizacion: new Date('2026-09-11'),
    },
    {
      id: '6',
      titulo: 'Implementar filtros de tareas',
      descripcion:
        'Se implementaron filtros para permitir la búsqueda y clasificación de tareas según su estado, prioridad, categoría y otros criterios.',
      fecha: new Date('2026-09-12'),
      prioridad: 'Media',
      etiqueta: 'Filtros, UX',
      categoria: 'Trabajo',
      estado: 'Pendiente',
      usuario: {
        iniciales: 'AP',
        nombre: 'Andrés',
      },
      fechaCreacion: new Date('2026-09-04'),
      fechaFinalizacion: new Date('2026-09-12'),
    },
    {
      id: '7',
      titulo: 'Corregir error en el formulario de usuarios',
      descripcion:
        'Se corrigieron las validaciones del formulario y el problema que impedía enviar correctamente los datos.',
      fecha: new Date('2026-09-13'),
      prioridad: 'Alta',
      etiqueta: 'Bug, Forms',
      categoria: 'Trabajo',
      estado: 'Completada',
      usuario: {
        iniciales: 'MR',
        nombre: 'Mariana',
      },
      fechaCreacion: new Date('2026-09-05'),
      fechaFinalizacion: new Date('2026-09-13'),
    },
    {
      id: '8',
      titulo: 'Crear componente de estadísticas',
      descripcion:
        'Se desarrolló un componente para visualizar estadísticas de las tareas mediante gráficos y diferentes indicadores del proyecto.',
      fecha: new Date('2026-09-15'),
      prioridad: 'Media',
      etiqueta: 'Charts, Dashboard',
      categoria: 'Compartidas',
      estado: 'En Progreso',
      usuario: {
        iniciales: 'NM',
        nombre: 'Nelson',
      },
      fechaCreacion: new Date('2026-09-06'),
      fechaFinalizacion: new Date('2026-09-15'),
    },
    {
      id: '9',
      titulo: 'Optimizar consultas de tareas',
      descripcion:
        'Se optimizaron las consultas de tareas y se redujeron las operaciones innecesarias contra la base de datos.',
      fecha: new Date('2026-09-16'),
      prioridad: 'Alta',
      etiqueta: 'SQL, Performance',
      categoria: 'Trabajo',
      estado: 'Completada',
      usuario: {
        iniciales: 'CR',
        nombre: 'Carlos',
      },
      fechaCreacion: new Date('2026-09-08'),
      fechaFinalizacion: new Date('2026-09-16'),
    },
    {
      id: '10',
      titulo: 'Agregar modo oscuro',
      descripcion:
        'Se agregó un modo oscuro a la aplicación para mejorar la experiencia visual y permitir al usuario cambiar entre diferentes temas de interfaz.',
      fecha: new Date('2026-09-17'),
      prioridad: 'Baja',
      etiqueta: 'Dark Mode, UI',
      categoria: 'Personal',
      estado: 'Pendiente',
      usuario: {
        iniciales: 'LM',
        nombre: 'Laura',
      },
      fechaCreacion: new Date('2026-09-09'),
      fechaFinalizacion: new Date('2026-09-17'),
    },
    {
      id: '11',
      titulo: 'Implementar manejo global de errores',
      descripcion:
        'Se implementó un sistema centralizado para capturar errores HTTP y mostrar mensajes adecuados al usuario.',
      fecha: new Date('2026-09-18'),
      prioridad: 'Alta',
      etiqueta: 'Errors, HTTP',
      categoria: 'Trabajo',
      estado: 'Completada',
      usuario: {
        iniciales: 'JD',
        nombre: 'Julián',
      },
      fechaCreacion: new Date('2026-09-10'),
      fechaFinalizacion: new Date('2026-09-18'),
    },
    {
      id: '12',
      titulo: 'Crear navegación entre tareas',
      descripcion:
        'Se implementó la navegación entre las diferentes vistas de tareas, permitiendo acceder al detalle, edición y demás acciones relacionadas.',
      fecha: new Date('2026-09-19'),
      prioridad: 'Media',
      etiqueta: 'Routing, Angular',
      categoria: 'Compartidas',
      estado: 'En Progreso',
      usuario: {
        iniciales: 'MR',
        nombre: 'Mariana',
      },
      fechaCreacion: new Date('2026-09-11'),
      fechaFinalizacion: new Date('2026-09-19'),
    },
    {
      id: '13',
      titulo: 'Documentar endpoints de la API',
      descripcion:
        'Se documentaron los endpoints principales incluyendo parámetros, respuestas y códigos HTTP.',
      fecha: new Date('2026-09-20'),
      prioridad: 'Baja',
      etiqueta: 'Swagger, API',
      categoria: 'Trabajo',
      estado: 'Completada',
      usuario: {
        iniciales: 'AP',
        nombre: 'Andrés',
      },
      fechaCreacion: new Date('2026-09-12'),
      fechaFinalizacion: new Date('2026-09-20'),
    },
    {
      id: '14',
      titulo: 'Implementar edición de tareas',
      descripcion:
        'Se implementó la funcionalidad para editar la información de las tareas existentes mediante un formulario con validaciones.',
      fecha: new Date('2026-09-21'),
      prioridad: 'Alta',
      etiqueta: 'CRUD, Forms',
      categoria: 'Compartidas',
      estado: 'En Progreso',
      usuario: {
        iniciales: 'NM',
        nombre: 'Nelson',
      },
      fechaCreacion: new Date('2026-09-13'),
      fechaFinalizacion: new Date('2026-09-21'),
    },
    {
      id: '15',
      titulo: 'Configurar variables de entorno',
      descripcion:
        'Se configuraron las variables necesarias para diferenciar los entornos de desarrollo, pruebas y producción.',
      fecha: new Date('2026-09-22'),
      prioridad: 'Alta',
      etiqueta: 'Environment, Config',
      categoria: 'Trabajo',
      estado: 'Completada',
      usuario: {
        iniciales: 'CR',
        nombre: 'Carlos',
      },
      fechaCreacion: new Date('2026-09-14'),
      fechaFinalizacion: new Date('2026-09-22'),
    },
    {
      id: '16',
      titulo: 'Agregar confirmación para eliminar tareas',
      descripcion:
        'Se agregó un cuadro de confirmación antes de eliminar una tarea para evitar eliminaciones accidentales por parte del usuario.',
      fecha: new Date('2026-09-23'),
      prioridad: 'Media',
      etiqueta: 'UX, Dialog',
      categoria: 'Personal',
      estado: 'Pendiente',
      usuario: {
        iniciales: 'LM',
        nombre: 'Laura',
      },
      fechaCreacion: new Date('2026-09-15'),
      fechaFinalizacion: new Date('2026-09-23'),
    },
    {
      id: '17',
      titulo: 'Crear pruebas para el servicio de tareas',
      descripcion:
        'Se crearon pruebas para validar la obtención, creación, actualización y eliminación de tareas.',
      fecha: new Date('2026-09-24'),
      prioridad: 'Media',
      etiqueta: 'Testing, Unit Tests',
      categoria: 'Trabajo',
      estado: 'Completada',
      usuario: {
        iniciales: 'JD',
        nombre: 'Julián',
      },
      fechaCreacion: new Date('2026-09-16'),
      fechaFinalizacion: new Date('2026-09-24'),
    },
    {
      id: '18',
      titulo: 'Revisar permisos de usuarios',
      descripcion:
        'Se revisaron y ajustaron los permisos de los usuarios para garantizar que cada rol tenga acceso únicamente a las funcionalidades correspondientes.',
      fecha: new Date('2026-09-25'),
      prioridad: 'Alta',
      etiqueta: 'Roles, Seguridad',
      categoria: 'Compartidas',
      estado: 'En Progreso',
      usuario: {
        iniciales: 'MR',
        nombre: 'Mariana',
      },
      fechaCreacion: new Date('2026-09-17'),
      fechaFinalizacion: new Date('2026-09-25'),
    },
    {
      id: '19',
      titulo: 'Actualizar dependencias del proyecto',
      descripcion:
        'Se inició la actualización de las dependencias del proyecto para incorporar versiones más recientes y mantener las librerías actualizadas.',
      fecha: new Date('2026-09-26'),
      prioridad: 'Baja',
      etiqueta: 'NPM, Dependencies',
      categoria: 'Personal',
      estado: 'Cancelada',
      usuario: {
        iniciales: 'AP',
        nombre: 'Andrés',
      },
      fechaCreacion: new Date('2026-09-18'),
      fechaFinalizacion: new Date('2026-09-26'),
    },
    {
      id: '20',
      titulo: 'Realizar revisión final del proyecto',
      descripcion:
        'Se realizó una revisión completa del proyecto verificando funcionalidades, navegación, validaciones y comportamiento general.',
      fecha: new Date('2026-09-28'),
      prioridad: 'Alta',
      etiqueta: 'Review, QA',
      categoria: 'Compartidas',
      estado: 'Cancelada',
      usuario: {
        iniciales: 'NM',
        nombre: 'Nelson',
      },
      fechaCreacion: new Date('2026-09-19'),
      fechaFinalizacion: new Date('2026-09-28'),
    },
  ]);

  public obtenerTareas(): Observable<Tarea[]> {
    return of(this.tareas());
  }

  public restaurarTarea(id: string):Observable<Tarea | undefined>{

    this.tareas.update(tareas =>
      tareas.map(tarea =>
        tarea.id === id
          ? { ...tarea, estado: 'Pendiente' }
          : tarea
      )
    )

    const tarea = this.tareas().find((tarea: Tarea) => tarea.id == id);

    if(!tarea){
      return of(undefined);
    }

    return of({
      ...tarea,
      estado: 'Pendiente'
    })
  }
}
