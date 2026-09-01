import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-home',
  imports: [],
  templateUrl: './section-home.html',
  styles: ``,
})
export class SectionHome {
  valorId = input.required<string>();
}
