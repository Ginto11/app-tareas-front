import { Params } from "@angular/router";

export interface Categoria {
    id: string;
    icono: string;
    ruta: string;
    titulo: string;
    cantidadTotalTareas: number;
    cantidadTotalCompletadas: number;
    cantidadTotalPendientes: number;
    cantidadTotalCanceladas: number;
    queryParam: Params
}