import { Component } from "@angular/core";

@Component({
    selector: 'app-seccion-page',
    imports: [],
    template: `
        <section class="w-full p-6 flex flex-col gap-5 md:p-12">
            <ng-content></ng-content>
        </section>
    `,
    styles: ``
})
export class SeccionPage {

}