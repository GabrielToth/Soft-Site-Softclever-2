import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'integracao-de-sistema-sat',
    templateUrl: 'integracao-de-sistema-sat.component.html',
    styleUrls: ['integracao-de-sistema-sat.component.scss'],
})
export class IntegracaoDeSistemaSAT {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Integracao-de-Sistema-SAT - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Integracao-de-Sistema-SAT - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
