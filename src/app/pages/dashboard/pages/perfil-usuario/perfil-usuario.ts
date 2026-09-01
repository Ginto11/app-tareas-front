import { Component, signal } from '@angular/core';
import { BtnTheme } from "../../../../shared/btn-theme/btn-theme";
import { SeccionPage } from "../../shared/seccion-page/seccion-page";
import { HeaderPage } from "../../shared/header-page/header-page";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-perfil-usuario',
  imports: [SeccionPage, HeaderPage, CommonModule],
  templateUrl: './perfil-usuario.html',
  styles: ``,
})
export default class PerfilUsuario {

  modoEdicion = signal<boolean>(false);

  editar():void {
    this.modoEdicion.set(true);
  }

}
