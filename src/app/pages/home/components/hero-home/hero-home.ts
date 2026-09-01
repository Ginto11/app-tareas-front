import { Component } from '@angular/core';
import { DecoracionFondoHome } from "../decoracion-fondo-home/decoracion-fondo-home";
import { Contenido } from "./components/contenido/contenido";
import { DashboardPreview } from './components/dashboard-preview/dashboard-preview';

@Component({
  selector: 'app-hero-home',
  imports: [DecoracionFondoHome, Contenido, DashboardPreview],
  templateUrl: './hero-home.html',
  styles: ``,
})
export class HeroHome {

}
