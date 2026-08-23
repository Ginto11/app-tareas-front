import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { Categoria } from "../interfaces/categoria.interface";
import { computed, inject } from "@angular/core";
import { CategoriaService } from "../services/categoria.service";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { pipe, switchMap, tap } from "rxjs";
import { Link } from "../interfaces/link.interface";

interface CategoriaState {
    categorias: Categoria[]
}

const initialState: CategoriaState = {
    categorias: [],
}

export const CategoriaStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withComputed((state) => ({
        linksDeCategorias: computed(() => {
            const categorias = state.categorias();

            return categorias.map((categoria: Categoria) => {
                const link: Link = {
                    id: Math.round(Math.random() * 1000),
                    ruta: '/dashboard/categoria',
                    icono: categoria.icono,
                    texto: categoria.titulo,
                    cantidadTareas: 0,
                    queryParams: { nombre: `${categoria.titulo.toLowerCase()}` }
                }

                return link;
            })

        })
    })),
    withMethods((store, categoriaService = inject(CategoriaService)) => ({
        cargarCategorias: rxMethod<void>(
            pipe(
                switchMap(() => categoriaService.obtenerCategorias().pipe(

                    tap((categorias: Categoria[]) => {
                        patchState(store, { categorias })
                    })
                   
                ))
            )
        ),
        agregarCategoria: (categoria: Categoria):void => {
            patchState(store, (state) => ({
                categorias: [categoria, ...state.categorias]
            }))
        }
    }))
)