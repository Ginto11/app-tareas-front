import { Component, input } from '@angular/core';
import { Tarea } from '../../../../../interfaces/tarea-interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-item-tarea',
  imports: [CommonModule, RouterLink],
  templateUrl: './item-tarea.html',
  styles: ``,
})
export class ItemTarea {
  dataTarea = input.required<Tarea>();
}
