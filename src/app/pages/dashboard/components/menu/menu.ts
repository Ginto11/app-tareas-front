import { Component, inject, OnInit } from '@angular/core';
import { HeaderMenu } from './header-menu/header-menu';
import { FooterMenu } from './footer-menu/footer-menu';
import { LinkMenu } from './link-menu/link-menu';
import { LinkStore } from '../../../../store/link.store';
import { CategoriaStore } from '../../../../store/categoria.store';

@Component({
  selector: 'app-menu',
  imports: [HeaderMenu, FooterMenu, LinkMenu],
  templateUrl: './menu.html',
  styles: ``,
})
export class Menu implements OnInit {

  public linkStore = inject(LinkStore);
  public categoriaStore = inject(CategoriaStore);
  
  ngOnInit(): void {
    this.linkStore.cargarLinks();
  }

}
