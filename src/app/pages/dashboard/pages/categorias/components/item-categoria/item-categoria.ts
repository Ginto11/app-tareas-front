import { Component, input } from '@angular/core';
import { Categoria } from '../../../../../../interfaces/categoria.interface';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-item-categoria',
  imports: [CommonModule, RouterLink],
  templateUrl: './item-categoria.html',
  styles: ``,
})
export class ItemCategoria {
  public categoria = input.required<Categoria>();

  }
