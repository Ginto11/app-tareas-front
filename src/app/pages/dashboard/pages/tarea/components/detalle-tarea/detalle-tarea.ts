import { Component, inject, input } from "@angular/core";
import { InformacionTarea } from "../informacion-tarea/informacion-tarea";
import { DescripcionTarea } from "../descripcion-tarea/descripcion-tarea";
import { EtiquetasTarea } from "../etiquetas-tarea/etiquetas-tarea";
import { AccionesTarea } from "../acciones-tarea/acciones-tarea";
import { Tarea } from "../../../../../../interfaces/tarea-interface";
import { ModalService } from "../../../../../../services/modal.service";

@Component({
    selector: 'app-detalle-tarea',
    imports: [InformacionTarea, DescripcionTarea, EtiquetasTarea, AccionesTarea],
    template: `
        <!-- Información -->
      <app-informacion-tarea [tarea]="tarea()" />

      <!-- Descripción -->
      <app-descripcion-tarea [descripcion]="tarea().descripcion!" />

      <!-- Etiquetas -->
      <app-etiquetas-tarea [etiquetas]="tarea().etiqueta!" />

      <!-- Acciones -->
      <app-acciones-tarea
        [tarea]="tarea()"
        (cambiarEstado)="modalService.mostrarModalCambiarEstado($event)"
      />
    `,
    styles: ``
})
export class DetalleTarea {
    tarea = input.required<Tarea>();
    modalService = inject(ModalService);
}