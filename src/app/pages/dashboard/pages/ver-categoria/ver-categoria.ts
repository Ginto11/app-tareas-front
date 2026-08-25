import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { HeaderPage } from "../../shared/header-page/header-page";
import { SeccionPage } from "../../shared/seccion-page/seccion-page";
import { TareaStore } from '../../../../store/tarea.store';
import { ItemTarea } from "../inicio/components/item-tarea/item-tarea";

@Component({
  selector: 'app-ver-categoria',
  imports: [CommonModule, HeaderPage, SeccionPage, ItemTarea],
  templateUrl: './ver-categoria.html',
  styles: ``
})
export default class VerCategoria implements OnInit {
  

  private route = inject(ActivatedRoute);
  public titulo = signal<string>('');
  public tareaStore = inject(TareaStore);

  ngOnInit(): void {
    this.route.queryParams.pipe(tap((params) => {
      this.titulo.set(params['nombre']);
      this.tareaStore.buscarPorCategoria(params['nombre'])
    })).subscribe()
  }

}