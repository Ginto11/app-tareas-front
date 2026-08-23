import { NgClass } from '@angular/common';
import { Component, input, signal } from '@angular/core';


@Component({
  selector: 'app-item-resumen',
  imports: [NgClass],
  templateUrl: './item-resumen.html',
  styles: ``,
})
export class ItemResumen {
  nombre = input.required<string>();
  cantidad = input.required<number>();
  icono = input.required<string>();
}
