import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'landing-integracao-de-sistema-sat',
    templateUrl: 'landing-integracao-de-sistema-sat.component.html',
    styleUrls: ['landing-integracao-de-sistema-sat.component.scss'],
})
export class LandingIntegracaoDeSistemaSAT {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Landing-Integracao-de-Sistema-SAT - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Landing-Integracao-de-Sistema-SAT - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
