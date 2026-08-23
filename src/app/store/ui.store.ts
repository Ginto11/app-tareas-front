import { computed } from "@angular/core";
import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";

export const UiStore  = signalStore(
    { providedIn: 'root' },
    withState({
        menuAbierto: false
    }),
    withComputed((state) => ({
        obtenerValor: computed(() => {
            return state.menuAbierto();
        })
    })),
    withMethods((store) => ({
       alternarMenu: () => {
            patchState(store, {
                menuAbierto: !store.menuAbierto()
            })
       },
       cerrarMenu: () => {
        patchState(store, { menuAbierto: false })
       }
    }))
)