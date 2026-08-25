import { Component, input } from "@angular/core";
import { Tarea } from "../../../../../../../../interfaces/tarea-interface";
import { IconoFolder } from "./components/icono-folder/icono-folder";
import { IconoFolderOpen } from "./components/icono-folder-open/icono-folder-open";

@Component({
    selector: 'app-contenedor-icono-item-tarea',
    imports: [IconoFolder, IconoFolderOpen],
    template: `
        <div class="flex items-center justify-center">
            <app-icono-folder [tarea]="tarea()" />
            <app-icono-folder-open [tarea]="tarea()" />
        </div>
    `,
    styles: ``
})

export class ContenedorIconoItemTarea {
    tarea = input.required<Tarea>();
}