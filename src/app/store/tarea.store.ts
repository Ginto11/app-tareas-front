import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { Tarea } from "../interfaces/tarea-interface";
import { computed, inject } from "@angular/core";
import { TareaService } from "../services/tarea.service";
import { pipe, switchMap, tap } from "rxjs";
import { rxMethod } from "@ngrx/signals/rxjs-interop";

interface TareaState {
    tareas: Tarea[],
    param: string,
    query: string;
    id: string;
}

const initialState: TareaState = {
    tareas: [],
    param: '',
    query: '',
    id: ''
}

export const TareaStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withComputed((state) => ({
        tareasSeleccionadas: computed(() => {
            const param = state.param();
            const tareas = state.tareas();

            if(param == ''){
                return tareas;
            }

            return tareas.filter(tarea => {
                return tarea.estado.toLowerCase() == param
            })

        }),
        cantidadTareasPendientes: computed(() => {
            return state.tareas().filter(tarea => tarea.estado == 'Pendiente').length
        }),
        tareasBuscadas: computed(() => {
            const tareas = state.tareas();
            const query = state.query();

            return tareas.filter((tarea: Tarea) => tarea.titulo.toLowerCase().includes(query.toLowerCase()))
        }),
        tareaBuscadaPorId: computed(() =>{
            const id = state.id();

            const tarea = state.tareas().find((tarea: Tarea) => tarea.id == id);

            if(tarea){
                return tarea;
            }

            return;
        }),
        cantidadTareasParaHoy: computed(() => {
            const hoy = new Date();
            
            return state.tareas().filter((tarea: Tarea) => {
                
                const esHoy = tarea.fecha.getFullYear() == hoy.getFullYear() &&
                    tarea.fecha.getMonth() == hoy.getMonth() &&
                    tarea.fecha.getDate() == hoy.getDate();
                
                if(esHoy && tarea.estado !== 'Cancelada' && tarea.estado !== 'Completada'){
                    return tarea;
                }
                return;
            }).length;
        }),
        cantidadTareasCompletas: computed(() => {
            return state.tareas().filter((tarea: Tarea) => tarea.estado == 'Completada').length;
        }),
        cantidadTareasEnProgreso: computed(() => {
            return state.tareas().filter((tarea: Tarea) => tarea.estado == 'En Progreso').length;
        })
    })),
    withMethods((store, tareaService = inject(TareaService)) => ({
        cargarTareas: rxMethod<void>(
            pipe(
                switchMap(() => tareaService.obtenerTareas()),
                tap((tareas: Tarea[]) => {
                    patchState(store, { tareas })
                })
            )
        ),
        buscarTareasPorEstado: (estado: string):void => {
            patchState(store, { param: estado })
        },
        buscarTareaPorId: (id: string):void => {
            patchState(store, { id })
        },
        agregarTarea: (tarea: Tarea):void =>{
            patchState(store, (state) => ({
                tareas: [tarea, ...state.tareas] 
            }))
        },
        buscarTareasPorNombre: (query: string):void => {
            patchState(store, { query })
        },
        actualizarEstado: (id: string, estado: Tarea['estado']):void => {

            patchState(store, (state) => ({
                tareas: state.tareas.map((tarea: Tarea) =>
                tarea.id == id
                ? { ...tarea, estado: estado }
                : tarea)
            }))
            
        }
    }))
)

