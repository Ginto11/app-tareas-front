export interface Tarea {
  id: string;
  titulo: string;
  descripcion?: string;
  fecha: Date;
  prioridad: 'Alta' | 'Media' | 'Baja';
  etiqueta: string;
  categoria: string;
  estado: 'Pendiente' | 'Cancelada' | 'Completada' | 'En Progreso'
  usuario: {
    iniciales: string;
    nombre: string;
  };
  fechaCreacion: Date,
  fechaFinalizacion: Date
}

// TODO: Agregar propiedad de fechaCreacion
// TODO: Agregar propiedad de fechaFinalizacion