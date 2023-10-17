import { Component, Input } from '@angular/core';

@Component({
    selector: 'home-servicos',
    templateUrl: 'home-servicos.component.html',
    styleUrls: ['home-servicos.component.scss'],
})
export class HomeServicos {
    @Input() cards: { routerLink: string; heading: string; image: string; text: string }[];
    constructor() {}
}
