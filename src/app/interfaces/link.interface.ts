import { Params } from "@angular/router";

export interface Link {
    id: number;
    ruta: string;
    icono?: string;
    texto: string;
    queryParams?: Params;
    cantidadTareas?: number;
}
