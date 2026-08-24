import { computed } from "@angular/core";
import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";

export const UiStore  = signalStore(
    { providedIn: 'root' },
    withState({
        menuOculto: false
    }),
    withComputed((state) => ({
        obtenerValor: computed(() => {
            console.log('Obteniendo:', state.menuOculto())
            return !state.menuOculto();
        })
    })),
    withMethods((store) => ({
       alternarMenu: () => {
            patchState(store, {
                menuOculto: !store.menuOculto()
            })
       },
       cerrarMenu: () => {
        patchState(store, { menuOculto: false })
       }
    }))
)