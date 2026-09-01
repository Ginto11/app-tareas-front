import { Component } from '@angular/core';
import { BtnTheme } from "../../../../shared/btn-theme/btn-theme";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-home',
  imports: [BtnTheme, RouterLink],
  templateUrl: './header-home.html',
  styles: '',
})
export class HeaderHome {

}
