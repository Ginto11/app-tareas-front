import { Component, inject, OnInit } from '@angular/core';
import { HeaderMenuMobile } from './header-menu-mobile/header-menu-mobile';
import { LinkStore } from '../../../../store/link.store';
import { CategoriaStore } from '../../../../store/categoria.store';
import { FooterMenu } from '../../shared/footer-menu/footer-menu';
import { LinkMenu } from '../../shared/link-menu/link-menu';

@Component({
  selector: 'app-menu-mobile',
  imports: [HeaderMenuMobile, FooterMenu, LinkMenu],
  templateUrl: './menu-mobile.html',
  styles: ``,
})
export class MenuMobile implements OnInit {

  public linkStore = inject(LinkStore);
  public categoriaStore = inject(CategoriaStore);
  
  ngOnInit(): void {
    this.linkStore.cargarLinks();
  }

}
