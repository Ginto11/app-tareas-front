import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Link } from '../../../../../interfaces/link.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-link-menu',
  imports: [NgClass, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './link-menu.html',
  styles: ``,
})
export class LinkMenu {
  
  public dataLink = input.required<Link>();

}
