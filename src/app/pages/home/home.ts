import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { RouterLink } from '@angular/router';
import { BtnTheme } from "../../shared/btn-theme/btn-theme";

@Component({
  selector: 'app-home',
  imports: [RouterLink, BtnTheme],
  templateUrl: './home.html',
  styles: ``,
})
export default class Home {

}
