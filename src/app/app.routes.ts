import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home')
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard'),
        children: [
            {
                path: 'inicio',
                loadComponent: () => import('./pages/dashboard/pages/inicio/inicio'),
                children: [
                    {
                        path: '',
                        redirectTo: 'lista',
                        pathMatch: 'full'
                    },
                    {
                        path: 'lista',
                        loadComponent: () => import('./pages/dashboard/pages/inicio/lista-tareas/lista-tareas')
                    }
                ]
            },
            {
                path:'nueva-tarea',
                loadComponent: () => import('./pages/dashboard/pages/nueva-tarea/nueva-tarea')
            },
            {
                path: 'categorias',
                loadComponent: () => import('./pages/dashboard/pages/categorias/categorias')
            },
            {
                path: 'tarea/:id',
                loadComponent: () => import('./pages/dashboard/pages/tarea/tarea')
            },
            {
                path: 'buscador',
                loadComponent: () => import('./pages/dashboard/pages/buscador/buscador')
            },
            {
                path: '**',
                redirectTo: 'inicio',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
