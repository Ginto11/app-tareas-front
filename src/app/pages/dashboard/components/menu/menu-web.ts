import { Component, inject, OnInit } from '@angular/core';
import { HeaderMenuWeb } from './header-menu-web/header-menu-web';
import { LinkStore } from '../../../../store/link.store';
import { CategoriaStore } from '../../../../store/categoria.store';
import { FooterMenu } from '../../shared/footer-menu/footer-menu';
import { LinkMenu } from '../../shared/link-menu/link-menu';
@Component({
  selector: 'app-menu-web',
  imports: [HeaderMenuWeb, FooterMenu, LinkMenu],
  templateUrl: './menu-web.html',
  styles: ``,
})
export class MenuWeb implements OnInit {

  public linkStore = inject(LinkStore);
  public categoriaStore = inject(CategoriaStore);
  
  ngOnInit(): void {
    this.linkStore.cargarLinks();
  }

}
