import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderHome } from './components/header-home/header-home';
import { HeroHome } from "./components/hero-home/hero-home";
import { SectionHome } from "./components/section-home/section-home";

@Component({
  selector: 'app-home',
  imports: [RouterLink, HeaderHome, HeroHome, SectionHome],
  templateUrl: './home.html',
  styles: ``,
})
export default class Home {

}
