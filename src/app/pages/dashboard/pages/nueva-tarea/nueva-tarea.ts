import { Component} from '@angular/core';
import { HeaderPage } from '../../shared/header-page/header-page';
import { FormNuevaTarea } from './components/form-nueva-tarea';
import { SeccionPage } from '../../shared/seccion-page/seccion-page';

@Component({
  selector: 'app-nueva-tarea',
  imports: [HeaderPage, FormNuevaTarea, SeccionPage],
  template: `
    <app-seccion-page>
      <!-- Header -->
      <app-header-page 
        titulo="Nueva tarea" 
        anteTitulo="Gestión de tareas" 
        postTitulo="Completa la información para crear una nueva tarea." />

      <!-- Formulario -->
      <app-form-nueva-tarea />
    </app-seccion-page>
  `,
  styles: ``,
})
export default class NuevaTarea {

}
