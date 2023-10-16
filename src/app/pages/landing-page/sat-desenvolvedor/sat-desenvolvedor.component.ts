import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'sa-desenvolvedor',
    templateUrl: 'sat-desenvolvedor.component.html',
    styleUrls: ['sat-desenvolvedor.component.scss'],
})
export class SATDesenvolvedor {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('SAT-Desenvolvedor - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'SAT-Desenvolvedor - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
