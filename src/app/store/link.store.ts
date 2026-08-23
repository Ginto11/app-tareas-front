import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { Link } from '../interfaces/link.interface';
import { inject } from '@angular/core';
import { LinkService } from '../services/link.service';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';

interface LinkState {
    listaDeLinks: Link[]
}

const initialState: LinkState = {
    listaDeLinks: []
}

export const LinkStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store, linkService = inject(LinkService))  =>({

        cargarLinks: rxMethod<void>(
            pipe(
                switchMap(() => linkService.obtenerLinksMenu().pipe(
                    tap((listaDeLinks: Link[]) => {
                        patchState(store, { listaDeLinks })
                    }),
                    
                )),
                
            )
        )

    })),
    withHooks({
        onInit: (store):void => {
            store.cargarLinks();
        }
    })
)